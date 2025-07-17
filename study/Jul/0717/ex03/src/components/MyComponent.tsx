import { useRef } from "react";
export default function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef); // 포커스 결과
      console.log(inputRef.current); // 포커스 결과
      console.log(inputRef.current.focus()); // 포커스 결과
    }
  };

  return (
    <div className="p-4 m-4 border border-red-300">
      <input className="border border-blue-300" ref={inputRef} type="text" />
      <button className="bg-green-300" onClick={focusInput}>
        포커스 주기
      </button>
    </div>
  );
}
