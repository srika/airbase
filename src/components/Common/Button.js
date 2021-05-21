import React from "react";

const Button = ({ className, buttonLabel, onClick }) => {
  return (
    <div className={`btn ${className}`} onClick={onClick}>
      {buttonLabel}
    </div>
  );
};

export default Button;
