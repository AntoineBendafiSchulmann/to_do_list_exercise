import React from "react";
import { ButtonProps } from "../types/ButtonProps";

const ButtonDelete: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default React.memo(ButtonDelete);