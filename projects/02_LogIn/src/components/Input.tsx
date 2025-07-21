import React from "react";

// Input 컴포넌트가 받을 props 타입을 정의합니다.
// React.InputHTMLAttributes<HTMLInputElement>를 확장하여 모든 표준 input 속성을 포함합니다.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input {...props} className="input input-bordered" />
    </div>
  );
};

export default Input;
