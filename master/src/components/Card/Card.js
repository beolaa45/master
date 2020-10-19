import React from "react";
import Button from "../UI/Button/Button";
import "./Card.scss";
function Card({ style, title, url }) {
  return (
    <div className="Card" style={{ backgroundImage: `url(${url})` }}>
      <Button classN="Button--card">{title}</Button>
    </div>
  );
}

export default Card;
