import React from "react";
import { ButtonProps } from "../types/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);