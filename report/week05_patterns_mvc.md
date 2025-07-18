# 🏗️ 프로그래밍 아키텍처 패턴 비교: MVC, MVP, MVVM

프로그래밍에서 아키텍처 패턴은 코드의 구조와 책임 분리를 명확히 하여 유지보수성과 확장성을 높여줍니다. 대표적인 UI 아키텍처 패턴인 **MVC**, **MVP**, **MVVM**의 구조와 특징을 아래와 같이 정리합니다.

---

## 1. MVC (Model-View-Controller)

### 구조

- **Model**: 데이터와 비즈니스 로직을 담당. 데이터의 상태를 관리하고, 변경 사항을 알림.
- **View**: 사용자에게 정보를 보여주는 UI. Model의 상태를 반영하여 화면을 갱신.
- **Controller**: 사용자의 입력을 받아 해석하고, Model과 View를 연결.

```
사용자 입력
   ↓
Controller ──→ Model (데이터 변경)
   ↓                ↑
 View  ←────────────┘
```

### 특징

- **역할 분리**: 데이터(Model), UI(View), 입력 처리(Controller)로 명확히 분리.
- **양방향 의존**: View와 Model이 직접적으로 연결될 수 있음.
- **적용 예시**: 웹 프레임워크(ASP.NET MVC, Ruby on Rails), 데스크탑 앱 등.

---

## 2. MVP (Model-View-Presenter)

### 구조

- **Model**: 데이터 및 비즈니스 로직 담당.
- **View**: UI 요소, 사용자와의 상호작용 담당. 인터페이스로 추상화.
- **Presenter**: View와 Model 사이의 중재자. View의 입력을 받아 Model을 갱신하고, Model의 데이터를 View에 전달.

```
사용자 입력
   ↓
 View ──→ Presenter ──→ Model
   ↑         ↓
   └─────────┘
```

### 특징

- **View와 Model의 완전 분리**: View는 Presenter를 통해서만 Model과 통신.
- **테스트 용이성**: View를 인터페이스로 추상화하여 단위 테스트가 쉬움.
- **적용 예시**: WinForms, Android(Java), GWT 등.

---

## 3. MVVM (Model-View-ViewModel)

### 구조

- **Model**: 데이터와 비즈니스 로직.
- **View**: UI, 사용자와의 상호작용 담당.
- **ViewModel**: View의 상태와 동작을 추상화. Model의 데이터를 가공하여 View에 제공. 데이터 바인딩을 통해 View와 ViewModel이 연결.

```
사용자 입력
   ↓
 View ⇄ ViewModel ⇄ Model
```

### 특징

- **데이터 바인딩**: View와 ViewModel 간 자동 동기화(양방향 바인딩).
- **View의 로직 최소화**: ViewModel이 UI 상태와 로직을 담당.
- **적용 예시**: WPF, Xamarin, Angular, React(훅 기반 상태관리) 등.

---

## 4. 패턴별 비교 요약

| 패턴 | View와 Model 연결 | 테스트 용이성 | 데이터 바인딩 | 주요 적용 분야        |
| ---- | ----------------- | ------------- | ------------- | --------------------- |
| MVC  | 직접/간접         | 보통          | 없음          | 웹, 데스크탑          |
| MVP  | Presenter 통해서  | 높음          | 없음          | 데스크탑, 모바일      |
| MVVM | ViewModel 통해서  | 높음          | 있음(자동화)  | 데스크탑, SPA, 모바일 |

---

## 5. 결론

- **MVC**: 구조가 단순하고, 소규모 프로젝트나 전통적인 웹 앱에 적합.
- **MVP**: 테스트와 유지보수가 중요한 데스크탑/모바일 앱에 적합.
- **MVVM**: 데이터 바인딩이 강력한 프레임워크(React, WPF 등)에서 생산성과 유지보수성이 뛰어남.

---

> **참고 자료**
>
> - [Microsoft Docs: Patterns - MVC, MVP, MVVM](https://docs.microsoft.com/ko-kr/aspnet/mvc/overview/overview)
> - [위키백과: 소프트웨어 아키텍처 패턴](https://ko.wikipedia.org/wiki/소프트웨어_아키텍처_패턴)
