import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ onClick, children, style, type = "button" }) => {
  return (
    <button onClick={onClick} style={style} type={type}>
      {children}
    </button>
  );
};

export default React.memo(Button);