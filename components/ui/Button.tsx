"use client";
import clsx from "clsx";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  className,
  outline,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx([
        "px-6 py-2 rounded-full",
        !outline && "bg-[#E23744] text-white hover:bg-[#cb323d]",

        outline &&
          "border border-[#424961] text-[#424961] bg-white hover:bg-[#424961] hover:text-white",
        ,
        "font-openSans font-bold",
        className,
      ])}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
