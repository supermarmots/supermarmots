import { useState } from "react";

interface Props {
  onNameChange: (name: string) => void;
}

export default function UserInput({ onNameChange }: Props) {
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    onNameChange(newName);
  };

  return (
    <div>
      <label>이름입력: </label>
      <input
        value={name}
        onChange={handleChange}
        placeholder="이름을 입력하세요"
      />
    </div>
  );
}
