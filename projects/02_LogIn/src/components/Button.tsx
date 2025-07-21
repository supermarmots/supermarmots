import React from "react";

// Button 컴포넌트가 받을 props 타입을 정의합니다.
// React.ButtonHTMLAttributes<HTMLButtonElement>를 확장하여 모든 표준 button 속성을 포함합니다.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
