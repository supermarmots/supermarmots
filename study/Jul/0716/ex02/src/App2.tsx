import { useState, useEffect } from "react";
function App2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("증가버튼 발작!", count);
  }, [count]);

  const countUp = () => {
    setCount(count + 1);
  };
  // useEffect(() => {
  //   console.log("페이지가 열렸습니다");
  //   setTimeout(() => {
  //     alert("Welcom!");
  //   }, 3000);
  // }, []);
  return (
    <div>
      <p>페이지가 열렸는지 콘솔을 확인하세요.</p>
      <button onClick={countUp}>카운트 증가</button>
    </div>
  );
}

export default App2;
