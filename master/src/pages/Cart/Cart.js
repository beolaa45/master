import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faStoreAltSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import "./Cart.scss";
import ButtonAmount from "../../components/UI/ButtonAmount/ButtonAmount";
import Button from "../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toFix, toSlug } from "../../components/utiliti/utility";
import * as actions from "../../store/actions/index";
function Cart(props) {
  let data = useSelector((state) => state.cart.data);
  let dispatch = useDispatch();
  let history = useHistory();
  let [wanningChecked, setWanningChecked] = useState(null);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const onChangeChecke = () => {
    setChecked((prev) => !prev);
  };
  const checkOut = () => {
    if (checked) {
      history.push("/checkout");
    } else {
      setWanningChecked(
        <p style={{ color: "red", fontSize: "1.6rem" }}>
          You must agree with the terms and conditions of sales to check out.{" "}
        </p>
      );
    }
  };
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
  let subTotal = null;

  let render = data.map((item) => {
    let id = item.id;
    let total = item.quanlity * item.price;
    subTotal += total;
    return (
      <tr key={item.id}>
        <td className="Cart__content__table__body__td">
          <div style={{ maxWidth: "10rem" }}>
            <img style={{ width: "100%" }} alt="" src={item.images[0]} />
          </div>
          <div className="Cart__content__table__body__box">
            <p>
              <Link
                to={{
                  pathname: "/products/" + toSlug(item.title),
                  state: { id: `${id}` },
                }}
                className="Cart__content__table__body__link"
              >
                {item.title}
              </Link>
            </p>
            <p onClick={() => cartDelete(id)}>
              <FontAwesomeIcon
                className="Cart__content__table__body__icon"
                icon={faTrashAlt}
              />
            </p>
          </div>
        </td>
        <td>{toFix(item.price)}</td>
        <td>
          <ButtonAmount
            value={item.quanlity ? item.quanlity : ""}
            onChange={(e) => onChangeQuanlity(e, id)}
            minus={() => minusQuanlity(id)}
            plus={() => plusQuanlity(id)}
          />
        </td>
        <td className="Cart__content__table__body__total">{toFix(total)}</td>
      </tr>
    );
  });

  return (
    <Fragment>
      <section className="Cart__banner">
        <Container fluid>
          <Row>
            <Banner
              title="SHOPPING CART"
              page="SHOPPING CART"
              url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/pendant_1296x.jpg?v=1585709654"
            />
          </Row>
        </Container>
      </section>
      <section className="Cart__content">
        <Container>
          <Row>
            <Col>
              {data.length ? (
                <Fragment>
                  <table className="Cart__content__table">
                    <thead className="Cart__content__table__head">
                      <tr className="Cart__content__table__head__tr">
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody className="Cart__content__table__body">
                      {render}
                    </tbody>
                  </table>
                  <div className="Cart__content__checkout">
                    <Row>
                      <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className="Cart__content__checkout__note">
                          <p className="Cart__content__checkout__note__title">
                            Add Order Note
                          </p>
                          <textarea
                            className="Cart__content__checkout__note__textarea"
                            rows="5"
                            placeholder="How can we help you?"
                            type="text"
                          />
                        </div>
                      </Col>
                      <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className="Cart__content__checkout__content">
                          <p>SUBTOTAL: {subTotal && toFix(subTotal)}</p>
                          <div className="Cart__content__checkout__content__inputGroup">
                            <input
                              checked={checked}
                              onChange={onChangeChecke}
                              type="checkbox"
                              id="checkout"
                            />
                            <label htmlFor="checkout">
                              I agree with the terms and conditions.
                            </label>
                          </div>
                          {wanningChecked && wanningChecked}
                          <Button clicked={checkOut} classN="Button--black">
                            Check Out
                          </Button>
                          <div>
                            <img
                              alt=""
                              style={{ width: "100%" }}
                              src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cart_image_500x.png?v=1585021052"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Fragment>
              ) : (
                <div style={{ textAlign: "center" }}>
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
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Cart;
