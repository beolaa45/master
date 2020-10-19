import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./UserAction.scss";
function UserAction({ clickedUser, clickedBasket, clickedSearch, basket }) {
  return (
    <ul className="User__list">
      <li className="User__item">
        <FontAwesomeIcon
          icon={faSearch}
          className="User__icon"
          onClick={clickedSearch}
        />
      </li>
      <li className="User__item">
        <FontAwesomeIcon
          icon={faUser}
          className="User__icon"
          onClick={clickedUser}
        />
      </li>
      <li className="User__item">
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className="User__icon"
          onClick={clickedBasket}
        />
        <p className="User__basket">{basket && basket}</p>
      </li>
    </ul>
  );
}

export default UserAction;
