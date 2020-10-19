import React from "react";
import "./Button.scss";
function Button({
  children,
  classN,
  style = {},
  loading,
  clicked,
  type = "button",
}) {
  let button = ["Button"];
  if (classN) button.push(classN);
  return (
    <button
      type={type}
      onClick={clicked}
      className={button.join(" ")}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
