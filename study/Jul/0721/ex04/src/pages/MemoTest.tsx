import ExpensiveComponent from "../components/ExpensiveComponent";
import UseMemoExample from "../components/UseMemoExample";
export default function MemoTest() {
  return (
    <div>
      <h2>useMemo 테스트</h2>
      <ExpensiveComponent />
      <UseMemoExample />
    </div>
  );
}
