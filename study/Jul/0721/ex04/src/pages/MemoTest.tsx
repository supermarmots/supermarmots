import ExpensiveComponent from "../components/ExpensiveComponent";
import Parent from "../components/Parent";
import UseMemoExample from "../components/UseMemoExample";
export default function MemoTest() {
  return (
    <div>
      <h2>useMemo 테스트</h2>
      <ExpensiveComponent />
      <UseMemoExample />
      <Parent />
    </div>
  );
}
