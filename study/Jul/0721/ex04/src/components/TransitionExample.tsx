import React, { useState, useTransition } from "react";

export default function TransitionExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPedning, startTransition] = useTransition();

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    startTransition(() => {
      const items = [];
      for (let i = 0; i < 100000; i++) {
        items.push(e.target.value);
      }
      setList(items);
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={handelChange} />
      {isPedning && <span>로딩중...</span>}
      <div>총 {list.length}</div>
    </div>
  );
}
