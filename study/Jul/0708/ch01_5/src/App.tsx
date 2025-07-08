import * as D from "./data";

import "./App.css";

function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" alt="호출 오류" />
      <img src={D.randomImage()} height="300" alt="호출 오류" />
    </div>
  );
}

export default App;
