//🧪 인터섹션 타입 실습 과제
// 1.type User = { id: number, name: string }과 type Auth = { token: string }를 인터섹션으로 결합해 로그인된 사용자 타입을 정의하고 객체를 생성해보세요.
type User = { id: number; name: string };
type Auth = { token: string };

// 인터섹션 타입으로 결합
type LoggedInUser = User & Auth;

// 객체 생성
const currentUser: LoggedInUser = {
  id: 1,
  name: "Alice",
  token: "abc123token",
};

console.log(`로그인 사용자: ${currentUser.name}, 토큰: ${currentUser.token}`);

// 2.interface SEO와 interface Page를 정의하고, 이를 합친 SEOPage 타입을 정의해 웹페이지 메타정보를 포함한 객체를 만들어 보세요.
interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

interface Page {
  url: string;
  content: string;
}

// 인터섹션 타입
type SEOPage = SEO & Page;

// 객체 생성
const aboutPage: SEOPage = {
  title: "About Us",
  description: "회사 소개 페이지입니다.",
  keywords: ["회사", "소개", "정보"],
  url: "/about",
  content: "여기는 회사 소개 페이지입니다.",
};

console.log(`페이지 제목: ${aboutPage.title}, 주소: ${aboutPage.url}`);

// 3.두 개 이상의 이벤트 핸들러 속성을 가진 UI 컴포넌트 타입을 정의해보고, 타입 검사를 통과하도록 작성해보세요.
// 인터섹션으로 UI 이벤트 속성 타입 정의
type Clickable = {
  onClick: () => void;
};

type Hoverable = {
  onHover: () => void;
};

// 인터섹션 타입: 클릭도 되고 호버도 되는 컴포넌트
type InteractiveComponent = Clickable & Hoverable;

// 올바른 객체 예시
const button: InteractiveComponent = {
  onClick: () => {
    console.log("버튼 클릭됨");
  },
  onHover: () => {
    console.log("버튼에 마우스 올라감");
  },
};

// 테스트
button.onClick(); // 버튼 클릭됨
button.onHover(); // 버튼에 마우스 올라감
