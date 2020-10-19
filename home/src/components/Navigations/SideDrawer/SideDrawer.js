import React from "react";
import "./SideDrawer.scss";

function SideDrawer({ show, clicked, children, classN }) {
  let sideDrawer = ["SideDrawer"];
  let translateX = 0;
  show ? (translateX = 0) : (translateX = -120);
  if (classN) {
    show ? (translateX = 0) : (translateX = 120);
    sideDrawer.push(classN);
  }

  return (
    <div
      className={sideDrawer.join(" ")}
      style={{ transform: `translateX(${translateX}%)` }}
    >
      {children}
    </div>
  );
}

export default SideDrawer;
