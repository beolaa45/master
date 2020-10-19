import React, { Fragment } from "react";
import BackDrop from "../BackDrop/BackDrop";
import "./Modal.scss";
function Modal({ show, clicked, children, classN }) {
    let modalClass = ["Modal"];
    classN && modalClass.push(classN)
  return (
    <Fragment>
      <BackDrop show={show} clicked={clicked} />
      {show ? (
        <div className={modalClass.join(" ")}>
          <div>{children}</div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Modal;
