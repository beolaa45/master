import React from "react";
import "./Image.scss";
function Image({ url, style = {} }) {
  return (
    <div className="Image" style={style}>
      <img alt="" src={url} style={{ width: "100%" }} />
    </div>
  );
}

export default Image;
