import React, { Fragment } from "react";
import "./ShoppingCart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAltSlash,
  faTimesCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import ButtonAmount from "../UI/ButtonAmount/ButtonAmount";
import Button from "../UI/Button/Button";
import { toFix } from "../utiliti/utility";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import { useHistory } from "react-router-dom";
function ShoppingCart({
  wanningChecked,
  data,
  closeBasket,
  viewCart,
  checkOut,
  changeChecked,
  checked,
}) {
  let dispatch = useDispatch();
  let history = useHistory();
  var total = null;
  const cartDelete = (id) => {
    dispatch(actions.cartDelete(id));
  };
  const onChangeQuanlity = (e, id) => {
    let quanlity = e.target.value;
    if (!quanlity) {
      quanlity = 0;
    } else {
      quanlity = parseInt(e.target.value);
      if (quanlity === 0 || Number.isNaN(quanlity) || quanlity >= 100) return;
    }
    dispatch(actions.cartOnChangeQuanlity(quanlity, id));
  };

  const plusQuanlity = (id) => {
    dispatch(actions.cartPlusQuanlity(id));
  };

  const minusQuanlity = (id) => {
    dispatch(actions.cartMiunsQuanlity(id));
  };
  let render;
  if (data.length) {
    render = data.map((item) => {
      total += item.quanlity * item.price;
      return (
        <div className="ShoppingCart__item" key={item.id}>
          <div className="ShoppingCart__item__photo">
            <img alt="" src={item.images[0]} />
          </div>
          <div className="ShoppingCart__item__content">
            <p className="ShoppingCart__item__content__title">{item.title}</p>
            <p className="ShoppingCart__item__content__price">
              {toFix(item.price)}
            </p>
            <ButtonAmount
              value={item.quanlity}
              plus={() => plusQuanlity(item.id)}
              minus={() => minusQuanlity(item.id)}
              onChange={() => onChangeQuanlity(item.id)}
            />
            <div onClick={() => cartDelete(item.id)}>
              <FontAwesomeIcon
                className="ShoppingCart__item__content__icon"
                icon={faTrashAlt}
              />
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <Fragment>
      {data.length ? (
        <div className="ShoppingCart">
          <div className="ShoppingCart__header">
            <p className="ShoppingCart__header__title">Shopping Cart</p>
            <div onClick={closeBasket}>
              <FontAwesomeIcon
                className="ShoppingCart__header__icon"
                icon={faTimesCircle}
              />
            </div>
          </div>
          {render}
          <div className="ShoppingCart__total">
            <div className="ShoppingCart__total__header">
              <p className="ShoppingCart__total__header__title">Subtotal:</p>
              <p className="ShoppingCart__total__header__price">
                {toFix(total)}
              </p>
            </div>
            <div>
              <p className="ShoppingCart__total__text">
                Taxes, shipping and discounts codes calculated at checkout
              </p>
            </div>
            <div className="ShoppingCart__total__checkbox">
              <input
                type="checkbox"
                id="ShoppingCartCheckbox"
                checked={checked}
                onChange={changeChecked}
              />
              <label className="ShoppingCart__total__checkbox">
                I agree with the terms and conditions.
              </label>
            </div>

            <Button clicked={viewCart} classN="Button--viewCart">
              View Cart
            </Button>
            <Button clicked={checkOut} classN="Button--checkOut">
              Check Out
            </Button>
            {wanningChecked ? wanningChecked : null}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <FontAwesomeIcon
            icon={faStoreAltSlash}
            style={{ fontSize: "10rem", marginBottom: "2rem" }}
          />
          <p style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
            Your cart is empty.
          </p>
          <Button
            clicked={() => history.push("/products")}
            classN="Button--black"
          >
            RETURN TO SHOP
          </Button>
        </div>
      )}
    </Fragment>
  );
}

export default ShoppingCart;
