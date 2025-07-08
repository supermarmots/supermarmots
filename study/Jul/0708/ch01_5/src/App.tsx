import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";
import OnClick from "./pages/OnClick";

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="https://www.instagram.com" text="go to instagram" />
      <OnClick />
    </ul>
  );
}
