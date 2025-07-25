# 세션과 쿠키 기반 인증 흐름 이해

## 1. 상태 유지 전략 (Session vs Cookie)

| 구분          | 쿠키                                             | 세션                                                     |
| ------------- | ------------------------------------------------ | -------------------------------------------------------- |
| **저장 위치** | 클라이언트 (브라우저의 쿠키 저장소)              | 서버의 세션 저장소 (브라우저에는 세션 ID만 쿠키로 저장)  |
| **데이터**    | 키-값 형태의 데이터를 저장                       | 주요 정보는 서버에 저장되고, 브라우저에는 세션 ID만 저장 |
| **유효 기간** | 브라우저 종료 시 삭제하거나, 만료 기간 설정 가능 | 설정한 시간 또는 브라우저 종료 시까지 유지               |
| **보안**      | 클라이언트에 저장되어 보안이 상대적으로 약함     | 서버에 저장되어 비교적 안전하나, 세션 ID 노출 시 위험    |
| **용도**      | 로그인 상태 유지, 사용자 설정 값 유지 등         | 사용자 인증 및 상태 관리                                 |
| **속도**      | 서버 자원 사용 없음, 응답 속도 빠름              | 서버 자원 사용, 서버 부하 증가 가능                      |

- **HTTP는 기본적으로 비상태성(stateless)이므로**, 쿠키와 세션을 통해 인증 상태와 같은 지속적인 정보를 관리할 수 있음.
- 쿠키 방식은 서버 자원 부담이 적으나, 보안 취약점(변조 가능성, 탈취 위험 등)이 있음.
- 세션 방식은 보안성이 우수하나 서버가 상태를 관리해야 하므로 서버 리소스가 소모됨.

---

## 2. 로그인 구조 적용 예시

Express.js(Node.js) 코드 예시

### 2.1 세션 기반 인증 예시 (express-session 활용)

```js
const express = require("express");
const session = require("express-session");
const app = express();

// 세션 미들웨어 등록
app.use(
  session({
    secret: "SecretKey", // 세션 식별을 위한 비밀키
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // HTTPS 환경에서는 true
  })
);

// 로그인 처리 라우트
app.post("/login", (req, res) => {
  // 아이디/비밀번호 체크 부분 생략
  // 인증 성공 시
  req.session.user = { id: "test", name: "테스트유저" };
  res.send("로그인 성공");
});

// 인증이 필요한 라우트
app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).send("로그인 필요");
  }
});
```

**동작 흐름**

- 로그인 성공 시 서버에 세션 생성, 세션 ID를 쿠키(`connect.sid`)에 담아 사용자에게 전달
- 브라우저가 이후 요청마다 쿠키(세션ID)를 자동으로 첨부
- 서버는 세션 ID로 사용자 정보를 식별

---

### 2.2 쿠키만을 이용한 인증 예시

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

// 간단 로그인 처리 (실서비스에서는 암호화 필요)
app.post('/login', (req, res) => {
res.cookie('user', 'testUser', { httpOnly: true }); // 인증정보를 쿠키에 직접 저장
res.send('로그인 성공');
});

app.get('/profile', (req, res) => {
if (req.cookies.user) {
res.send(안녕하세요, ${req.cookies.user}님);
} else {
res.status(401).send('로그인 필요');
}
});
```

**동작 흐름**

- 로그인 시 인증 정보를 쿠키(여기선 단순 예시, 실제로는 토큰 등 사용)로 저장
- 브라우저가 매 요청마다 자동으로 쿠키 전송 ⇒ 서버는 쿠키 내 인증정보로 사용자 확인
- 보안적인 한계가 뚜렷함(쿠키 탈취·변조 위험)

---

## 보안 고려사항

- 쿠키에는 반드시 `HttpOnly`, `Secure` 옵션을 적용해 보안 강화 필요
- 세션 기반 인증에서는 세션 하이재킹을 예방하기 위해 세션 관리 및 만료 정책 엄격히 설정해야 함
- 토큰(JWT 등)을 사용한 인증 방식도 있으나, 이는 별도의 시스템 흐름임

## 참고

velog - 세션, 토큰, 쿠키 비교  
tistory - 쿠키와 세션의 차이점, 인증과 인가, 세션 기반 인증 방식  
tistory - 쿠키 VS 세션 VS 토큰 (JWT) 방식  
velog - 인증 방식(쿠키 & 세션 & jwt)
