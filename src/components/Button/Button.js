import React from "react";

const Button = ({ onClick, className, type = "button", bgColor = "primary", children }) => {
  const bgClassName = `bg-${bgColor}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`"w-full px-6 py-3 mt-auto text-white capitalize rounded-lg bg-primary" ${className} ${bgClassName}`}
    >
      {children}
    </button>
  );
};

export default Button;
