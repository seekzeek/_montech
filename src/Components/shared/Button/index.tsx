import React from "react";

type ButtonProps = {
  disabled?: Boolean;
  className?: String;
  children: React.ReactNode;
  onClick?: () => void;
};

// JSX.Element[] | JSX.Element;

const Button: React.FC<ButtonProps> = ({
  disabled,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`outline-none px-8 py-2 h-[52px] min-w-[178px] flex justify-center items-center btn-drop-sh ${
        disabled && "bg-opacity-60"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
