import ApplyScrapPage from "./pages/ApplyScrapPage";
import QuotationPage from "./pages/QuotationPage";
import ScrapCompletePage from "./pages/ScrapCompletePage";
import { useState } from "react";

function App() {
  const [stage, setStage] = useState(0);
  const [count, setCount] = useState(0);
  const [isPageOpen, setIsPageOpen] = useState(false);

  const prevStage = () => setStage(stage - 1);
  const nextStage = () => setStage(stage + 1);
  const countUp = () => setCount(count + 1);
  const countDown = () => setCount(count - 1);

  const handleButtonClick = () => setIsPageOpen((prev) => !prev);

  return (
    <div>
      {/* 페이지네이션 */}
      <button className="p-4 m-4 bg-blue-500" onClick={prevStage}>
        이전
      </button>
      <span>{stage}</span>
      <button className="p-4 m-4 bg-blue-500" onClick={nextStage}>
        다음
      </button>
      {/* 카운트 */}
      <button className="p-4 m-4 bg-blue-500" onClick={countDown}>
        감소
      </button>
      <span>{count}</span>
      <button className="p-4 m-4 bg-blue-500" onClick={countUp}>
        증가
      </button>

      {stage === 1 && <ApplyScrapPage />}
      {stage === 2 && <QuotationPage />}
      {stage === 3 && (
        <div>
          <button
            className="p-4 m-4 text-black bg-green-500"
            onClick={handleButtonClick}
          >
            {isPageOpen ? "내 차 돌려내!!" : "폐차!!!"}
          </button>
          {isPageOpen && <ScrapCompletePage />}
        </div>
      )}
    </div>
  );
}

export default App;
