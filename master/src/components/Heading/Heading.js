import React from "react";
import "./Heading.scss";
function Heading({ title, subTitle }) {
  return (
    <div className="Heading" style={{ marginBottom: "4rem" }}>
      <h1 className="Heading__primary">{title}</h1>
      <p className="Heading__subTitle">{subTitle}</p>
    </div>
  );
}

export default Heading;
