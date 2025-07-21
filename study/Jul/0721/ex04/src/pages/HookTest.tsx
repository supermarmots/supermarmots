import CustomInput from "../components/CustomInput";
import IdExample from "../components/IdExample";
import LayoutEffectExample from "../components/LayoutEffectExample";
import ParentComponent from "../components/ParentComponent";
import TransitionExample from "../components/TransitionExample";

export default function HookTest() {
  return (
    <div>
      <LayoutEffectExample />
      <br />
      <hr />
      <IdExample />
      <br />
      <hr />
      <TransitionExample />
      <br />
      <hr />
      <CustomInput />
      <br />
      <hr />
      <ParentComponent />
    </div>
  );
}
