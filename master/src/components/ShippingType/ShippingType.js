import React from "react";
import "./ShippingType.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShippingType({ title, subtitle, icon }) {
  return (
    <div className="ShippingType">
      <FontAwesomeIcon icon={icon} className="ShippingType__icon" />
      <div className="ShippingType__content">
        <h3 className="ShippingType__title">{title}</h3>
        <p className="ShippingType__subTitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default ShippingType;
