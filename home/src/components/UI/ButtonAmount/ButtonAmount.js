import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./ButtonAmount.scss";
function ButtonAmount({ plus, minus, style, value, onChange }) {
  return (
    <div className="ButtonAmount" style={{ style }}>
      <FontAwesomeIcon
        icon={faMinus}
        onClick={minus}
        className="ButtonAmount__icon"
      />
      <input
        className="ButtonAmount__amount"
        value={value}
        onChange={onChange}
      />
      <FontAwesomeIcon
        icon={faPlus}
        onClick={plus}
        className="ButtonAmount__icon"
      />
    </div>
  );
}

export default ButtonAmount;
