import React from "react";
import { NavLink } from "react-router-dom";
import "./CardBlog.scss";

function CardBlog({ title, subTitle, time, author, url }) {
  return (
    <div className="CardBlog">
      <NavLink to="/blog" className="CardBlog__link">
        <div className="CardBlog__box">
          <div
            className="CardBlog__photo"
            style={{
              backgroundImage: `url(${url})`,
              height: "25rem",
              width: "100%",
            }}
          ></div>
        </div>
        <div className="CardBlog__content">
          <p className="CardBlog__time">
            By <span>{author}</span> on <span>{time}</span>
          </p>
          <h4 className="CardBlog__title">{title}</h4>
          <p className="CarBlog__subTitle">{subTitle}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default CardBlog;
