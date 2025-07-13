아래는 프로젝트 공통 사용을 위한 **📘 README 템플릿**입니다.
각 프로젝트 폴더의 `README.md`에 바로 복붙하여 사용하거나, 마크다운 문법으로 커스터마이징 가능합니다.

---

# 📌 프로젝트명: Firebase Auth & React 로그인 데모

> 이 프로젝트는 [React] 수업에서 진행된 Small Project입니다.  
> Firebase 인증과 React를 활용한 기본 로그인 기능 구현을 목표로 하였습니다.

---

## 📆 프로젝트 기간

- 시작일: 2025.07.10
- 종료일: 2025.07.31

---

## 🎯 주요 목표

- ✅ Firebase Authentication 연동
- ✅ 이메일/비밀번호 기반 로그인 및 회원가입 구현
- ✅ 로그인 상태 관리 및 UI 반영
- ✅ 인증된 사용자만 접근 가능한 페이지 예시

---

## ⚙️ 사용 기술 스택

| 분류       | 기술명                  |
| ---------- | ----------------------- |
| 프론트엔드 | TypeScript, React       |
| 백엔드     | Firebase Authentication |
| 기타       | Vite, CSS Modules       |

---

## 🧱 프로젝트 구조

```bash
📁 프로젝트명/
├── public/           # 정적 파일
├── src/
│   ├── App.tsx       # 메인 컴포넌트
│   ├── components/   # UI 컴포넌트 (LoginForm, ProtectedRoute 등)
│   ├── services/     # firebase 인증 로직
│   ├── assets/       # 이미지 및 스타일
│   └── index.tsx
└── README.md
```

---

## 💡 주요 기능 설명

### ✨ 기능 1: 사용자 로그인/회원가입

- 이메일, 비밀번호 입력 폼 제공
- Firebase Auth로 회원가입 및 로그인 처리
- 에러 및 성공 메시지 UI 반영

### 🔐 기능 2: 인증 상태 관리

- 로그인/로그아웃 시 UI 동적 변경
- 인증된 사용자만 접근 가능한 페이지 예시 구현

### 🛡️ 기능 3: 보안 및 예외 처리

- 입력값 유효성 검사
- 인증 실패 시 에러 안내

---

## 🖼️ 데모 화면

| 주요 화면   | 캡처 예시                            |
| ----------- | ------------------------------------ |
| 로그인      | ![login](./assets/login.png)         |
| 회원가입    | ![signup](./assets/signup.png)       |
| 인증 페이지 | ![protected](./assets/protected.png) |

---

## 🧠 회고 요약

- 어려웠던 점: Firebase Auth 초기 세팅 및 에러 핸들링
- 배운 점: 인증 흐름과 React 상태 관리의 연계
- 개선하고 싶은 점: 소셜 로그인, UI 디자인 고도화

---

## 📦 배포 주소 (선택)

- Vercel / Netlify / AWS S3 등
- `https://your-project.vercel.app`

---

## 🙋‍♀️ 개발자

| 이름   | GitHub                                              |
| ------ | --------------------------------------------------- |
| 윤찬우 | [github.com/hongdev](https://github.com/whobuythis) |
