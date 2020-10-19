import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
function Navigation({ name, path, exact = false }) {
  return (
    <li className="Navigation__item">
      <NavLink
        to={path}
        exact={exact}
        className="Navigation__link"
        activeClassName="Navigation__active"
      >
        {name}
      </NavLink>
    </li>
  );
}

export default Navigation;
