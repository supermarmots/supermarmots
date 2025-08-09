# CORS 정책과 웹 보안 기본 개념

## 쉽게요약

1. Simple Request (단순 요청)

- 친구 집에 놀러 가서 물 한잔 달라고 요청
- 흔한 요청이라 친구 부모님도 그냥 허락함
- “Access-Control-Allow-Origin” 헤더 하나만 있으면 통과

2. Preflight Request (사전 확인 요청)

- 친구 집에서 요리하고 싶은데, 괜찮은지 먼저 물어봄
- 친구 부모님이 먼저 허락 여부를 확인하고 나서 본격 요청 가능
- 브라우저가 먼저 OPTIONS 요청 → 서버는 허용 메서드와 헤더 목록을 응답

3. Credentialed Request (인증 정보 포함 요청)

- 나 신분증도 보여줄게, 진짜 나야
- 친구 부모님이 신분 확인 후 허락해야 함
- 서버는 정확한 출처만 허용

[요약 출처](https://www.threads.com/@richardlee0202/post/DNE1b15BPtR?xmt=AQF02M7F6j4g5PZfAJ_m0IZ1h-J8r6hvxXJjYRwM7V50LQ)

## 1. CORS란 무엇인가?

**CORS (Cross-Origin Resource Sharing)** 는 웹 브라우저가 다른 출처(origin)의 리소스에 접근할 때 적용되는 보안 정책입니다. 같은 출처가 아닌 서버로부터 리소스를 요청할 때 브라우저가 보안상의 이유로 이를 제한하는 메커니즘입니다.

### CORS가 필요한 이유

- **보안**: 악성 사이트가 사용자의 민감한 데이터에 무단 접근하는 것을 방지
- **개인정보 보호**: 쿠키나 인증 정보가 포함된 요청의 무분별한 전송 차단
- **XSS(Cross-Site Scripting) 공격 방지**

## 2. Origin(출처) 개념 이해

Origin은 **프로토콜, 도메인, 포트**의 조합으로 구성됩니다.

### Origin 구성 요소

```
https://example.com:3000
  ↑        ↑        ↑
프로토콜   도메인    포트
```

### Same-Origin vs Cross-Origin 예시

**기준 URL**: `https://example.com:3000`

| URL                            | Same-Origin? | 이유                          |
| ------------------------------ | ------------ | ----------------------------- |
| `https://example.com:3000/api` | ✅ Same      | 모든 구성 요소 동일           |
| `http://example.com:3000`      | ❌ Cross     | 프로토콜 다름 (https vs http) |
| `https://api.example.com:3000` | ❌ Cross     | 도메인 다름                   |
| `https://example.com:8080`     | ❌ Cross     | 포트 다름                     |
| `https://example.com`          | ❌ Cross     | 포트 다름 (기본 443 vs 3000)  |

### JavaScript에서 Origin 확인하기

```javascript
// 현재 페이지의 origin 확인
console.log(window.location.origin); // "https://example.com:3000"

// URL 객체를 사용한 origin 추출
const url = new URL("https://api.example.com/data");
console.log(url.origin); // "https://api.example.com"
```

## 3. CORS Header 이해

CORS는 HTTP 헤더를 통해 제어됩니다. 주요 헤더들을 살펴보겠습니다.

### 3.1 서버 응답 헤더

#### Access-Control-Allow-Origin

가장 중요한 헤더로, 어떤 출처에서의 요청을 허용할지 지정합니다.

```javascript
// 서버 응답 예시 (Express.js)
app.get("/api/data", (req, res) => {
  // 특정 도메인만 허용
  res.header("Access-Control-Allow-Origin", "https://trusted-site.com");

  // 모든 도메인 허용 (보안상 권장하지 않음)
  // res.header('Access-Control-Allow-Origin', '*');

  res.json({ message: "Hello CORS!" });
});
```

#### Access-Control-Allow-Methods

허용되는 HTTP 메소드를 지정합니다.

```javascript
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
```

#### Access-Control-Allow-Headers

클라이언트가 보낼 수 있는 헤더를 지정합니다.

```javascript
res.header(
  "Access-Control-Allow-Headers",
  "Content-Type, Authorization, X-Requested-With"
);
```

#### Access-Control-Allow-Credentials

쿠키나 인증 정보 포함 요청 허용 여부를 설정합니다.

```javascript
res.header("Access-Control-Allow-Credentials", "true");
```

### 3.2 클라이언트 요청 헤더

#### Origin

브라우저가 자동으로 추가하는 헤더로, 요청의 출처를 나타냅니다.

```javascript
// 브라우저가 자동으로 추가
// Origin: https://example.com
```

### 3.3 실제 CORS 설정 예시

```javascript
// Express.js 서버에서 CORS 설정
const express = require("express");
const app = express();

// 수동 CORS 설정
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://myapp.com",
    "https://admin.myapp.com",
    "http://localhost:3000",
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});

// 또는 cors 미들웨어 사용
const cors = require("cors");

const corsOptions = {
  origin: ["https://myapp.com", "https://admin.myapp.com"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
```

## 4. Preflight 요청 이해

**Preflight 요청**은 실제 요청을 보내기 전에 서버가 해당 요청을 허용하는지 확인하는 사전 요청입니다.

### 4.1 Preflight가 발생하는 조건

다음 조건 중 하나라도 해당하면 Preflight 요청이 발생합니다:

1. **HTTP 메소드가 Simple Method가 아닌 경우**

   - Simple Methods: `GET`, `POST`, `HEAD`
   - 그 외: `PUT`, `DELETE`, `PATCH` 등

2. **Content-Type이 특정 값이 아닌 경우**

   - 허용되는 값: `text/plain`, `multipart/form-data`, `application/x-www-form-urlencoded`
   - 그 외: `application/json`, `application/xml` 등

3. **커스텀 헤더를 사용하는 경우**

### 4.2 Preflight 요청 과정

```javascript
// 클라이언트에서 이런 요청을 보낸다면...
fetch("https://api.example.com/users", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token123",
  },
  body: JSON.stringify({ name: "John" }),
});
```

**1단계: Preflight 요청 (브라우저가 자동 생성)**

```http
OPTIONS /users HTTP/1.1
Host: api.example.com
Origin: https://myapp.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization
```

**2단계: 서버 응답**

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 3600
```

**3단계: 실제 요청 (Preflight 통과 시)**

```http
PUT /users HTTP/1.1
Host: api.example.com
Origin: https://myapp.com
Content-Type: application/json
Authorization: Bearer token123

{"name": "John"}
```

### 4.3 Preflight 요청 처리 예시

```javascript
// Express.js에서 OPTIONS 요청 처리
app.options("/api/*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://myapp.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Max-Age", "3600"); // 1시간 캐시
  res.sendStatus(200);
});

// 실제 API 엔드포인트
app.put("/api/users/:id", (req, res) => {
  // 실제 비즈니스 로직
  res.header("Access-Control-Allow-Origin", "https://myapp.com");
  res.json({ message: "User updated successfully" });
});
```

### 4.4 Simple Request vs Preflight Request

```javascript
// Simple Request (Preflight 없음)
fetch("https://api.example.com/data", {
  method: "GET",
});

fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
  body: "simple data",
});

// Preflight Request 발생
fetch("https://api.example.com/data", {
  method: "PUT", // Simple method가 아님
  headers: {
    "Content-Type": "application/json", // Simple content-type이 아님
  },
  body: JSON.stringify({ data: "complex" }),
});

fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    "X-Custom-Header": "value", // 커스텀 헤더 사용
  },
});
```

## 5. 실제 구현 예시

### 5.1 프론트엔드에서 CORS 요청

```javascript
// 인증이 필요한 API 호출
async function fetchUserData() {
  try {
    const response = await fetch("https://api.myapp.com/user", {
      method: "GET",
      credentials: "include", // 쿠키 포함
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    if (error.message.includes("CORS")) {
      console.error("CORS 정책으로 인해 요청이 차단되었습니다.");
    }
    throw error;
  }
}

// POST 요청 (Preflight 발생)
async function createUser(userData) {
  try {
    const response = await fetch("https://api.myapp.com/users", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userData),
    });

    return await response.json();
  } catch (error) {
    console.error("사용자 생성 실패:", error);
  }
}
```

### 5.2 백엔드에서 포괄적인 CORS 설정

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

// 환경별 CORS 설정
const corsOptions = {
  origin: function (origin, callback) {
    // 개발 환경
    if (process.env.NODE_ENV === "development") {
      return callback(null, true);
    }

    // 프로덕션 환경
    const allowedOrigins = [
      "https://myapp.com",
      "https://www.myapp.com",
      "https://admin.myapp.com",
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS 정책에 의해 차단됨"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  maxAge: 86400, // 24시간
};

app.use(cors(corsOptions));

// API 라우트
app.get("/api/data", (req, res) => {
  res.json({ message: "CORS가 올바르게 설정되었습니다!" });
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
```

## 6. 일반적인 CORS 문제와 해결법

### 6.1 자주 발생하는 오류들

```javascript
// 오류 1: Access-Control-Allow-Origin 헤더 누락
// 해결: 서버에서 적절한 헤더 설정
res.header("Access-Control-Allow-Origin", "https://yourapp.com");

// 오류 2: Preflight 요청 실패
// 해결: OPTIONS 메소드 핸들러 추가
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(200);
});

// 오류 3: 인증 정보 포함 요청 실패
// 해결: credentials 설정
// 클라이언트
fetch(url, { credentials: "include" });

// 서버
res.header("Access-Control-Allow-Credentials", "true");
```

### 6.2 디버깅 팁

```javascript
// 브라우저 개발자 도구에서 CORS 오류 확인
console.log("Request Origin:", window.location.origin);

// 네트워크 탭에서 확인할 사항:
// 1. OPTIONS 요청이 있는지 (Preflight)
// 2. 응답 헤더에 Access-Control-* 헤더들이 있는지
// 3. 요청과 응답의 Origin 값 비교

// 서버에서 디버깅 로그
app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);
  next();
});
```

## 7. 보안 모범 사례

### 7.1 안전한 CORS 설정

```javascript
// ❌ 위험한 설정
app.use(
  cors({
    origin: "*", // 모든 도메인 허용
    credentials: true, // 인증 정보도 함께 허용
  })
);

// ✅ 안전한 설정
app.use(
  cors({
    origin: ["https://myapp.com", "https://admin.myapp.com"], // 특정 도메인만 허용
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
```

### 7.2 동적 Origin 검증

```javascript
const corsOptions = {
  origin: function (origin, callback) {
    // 데이터베이스나 환경 변수에서 허용된 도메인 목록 조회
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

    if (!origin) {
      // 같은 출처 요청 (예: Postman, 모바일 앱)
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // 로깅으로 보안 모니터링
      console.warn(`CORS 차단: ${origin}`);
      callback(new Error("CORS policy violation"));
    }
  },
};
```

CORS는 웹 보안의 핵심 요소이므로, 개발 환경에서는 편의를 위해 느슨하게 설정하더라도 프로덕션에서는 반드시 엄격하게 관리해야 합니다. 적절한 CORS 설정을 통해 보안을 유지하면서도 필요한 크로스 오리진 통신을 안전하게 수행할 수 있습니다.
