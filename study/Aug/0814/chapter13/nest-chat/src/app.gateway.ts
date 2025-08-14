import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({ namespace: "chat" })
export class ChatGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage("message")
  handleMessage(socket: Socket, data: any): void {
    const { message, nickname } = data;
    // this.server.emit(
    //   "message",
    //   `client-${socket.id.substring(0, 4)} : ${data}`
    // );

    socket.broadcast.emit("message", `${nickname} : ${message}`);
  }
}

@WebSocketGateway({ namespace: "room" })
export class RoomGateway {
  constructor(private readonly ChatGateway: ChatGateway) {} // 채팅 게이트웨이 의존성 주입
  rooms = [];

  @WebSocketServer() // 서버 인스턴스 접근을 위한 변수 선언
  server: Server;

  @SubscribeMessage("createRoom")
  handleMessage(@MessageBody() data) {
    // 소켓 없이 데이터만 받음
    const { nickname, room } = data;
    this.ChatGateway.server.emit("notice", {
      message: `${nickname}님이 ${room}방을 만들었습니다. `,
    });
    this.rooms.push(room); // 채팅방 정보 받아서 추가
    this.server.emit("rooms", this.rooms); // ROOMS 이벤트로 채팅방 리스트 전송
  }

  // 방에 입장 시 실행되는 핸들러 메서드
  @SubscribeMessage("joinRoom")
  handleJoinRoom(socket: Socket, data) {
    const { nickname, room, toLeaveRoom } = data;
    socket.leave(toLeaveRoom);
    this.ChatGateway.server.emit("notice", {
      message: `${nickname}님이 ${room}방에 입장했습니다. `,
    });
    socket.join(room); // 새로운 방에 입장
  }

  // RoomGateway로 message 이벤트가 오면 처리
  @SubscribeMessage("message")
  handleMessageToRoom(socket: Socket, data) {
    const { nickname, room, message } = data;
    console.log(data);
    socket.broadcast.to(room).emit("message", {
      // 나 이외의 사람에게 데이터 전송
      message: `${nickname}: ${message}`,
    });
  }
}
