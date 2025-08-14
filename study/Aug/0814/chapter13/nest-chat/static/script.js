const socket = io("http://localhost:3000/chat");
const roomSocket = io("http://localhost:3000/room"); // 채팅방용 네임스페이스
const nickname = prompt("닉네임을 입력해 주세요.");
let currentRoom = ""; // 채팅방 초깃값

function sendMessage() {
  if (currentRoom === "") {
    alert("방을 선택해주세요.");
    return;
  }
  const message = $("#message").val();
  const data = { message, nickname, room: currentRoom };
  $("#chat").append(`<div>나 : ${message}</div>`);  // 내가 보낸 메시지 바로 추가
  roomSocket.emit("message", data);
  return false;
}

socket.on("connect", (socket) => {
  console.log("Connected to server");
  console.log(socket);
  roomSocket.emit("getRooms");
});

socket.on("message", (data) => {
  console.log(data);
  $("#chat").append(`<div>${data.message}</div>`);
});

// notice(공지) 이벤트를 받아서 처리
socket.on("notice", (data) => {
  console.log(data);
  $("#notice").append(`<div>${data.message}</div>`);
});

roomSocket.on("message", (data) => {
  console.log(data);
  $("#chat").append(`<div>${data.message}</div>`);
});

// 클라이언트 측에서 채팅방 추가 함수
roomSocket.on("rooms", (data) => {
  console.log(data);
  $("#rooms").empty();  // 채빙방 갱신 시 일단 리스트를 비움
  data.forEach((room) => {  // 루프를 돌면서 서버에서 준 데이터 추가
    $("#rooms").append(
      `<li>${room} <button onclick="joinRoom('${room}')">join</button></li>`
    );
  });
});

// 채팅방 생성 함수
function createRoom() {
  const room = prompt("생성하실 방의 이름을 입력해주세요.");
  roomSocket.emit("createRoom", { room, nickname });
  return false;
}

// 방에 들어갈 때 기존에 있던 방에서는 나간다.
function joinRoom(room) {
  // 서버 측의 joinRoom 이벤트를 발생
  roomSocket.emit("joinRoom", { room, nickname, toLeaveRoom: currentRoom });
  currentRoom = room; // 현재 들어 있는 방의 값을 변경
  return false;
}
