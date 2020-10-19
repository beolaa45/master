import React from "react";
import { Spinner } from "react-bootstrap";
function Spinnerr({ style }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        ...style,
      }}
    >
      <Spinner
        variant="primary"
        style={{ width: "4rem", height: "4rem", fontSize: "2rem" }}
        animation="border"
      />
    </div>
  );
}

export default Spinnerr;
