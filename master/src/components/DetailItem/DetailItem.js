import React from "react";
import Button from "../UI/Button/Button";
import ButtonAmount from "../UI/ButtonAmount/ButtonAmount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./DetailItem.scss";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import { NavLink } from "react-router-dom";
import { toSlug } from "../utiliti/utility";
function DetailItem({ data, onChangeQuanlity, plus, minus, link }) {
  const dispatch = useDispatch();
  const addToCard = (e, id) => {
    dispatch(actions.cartInit(id));
  };
  if (!data) return null;
  return (
    <div className="DetailItem">
      <h1 className="DetailItem__heading">{data.title}</h1>
      <p className="DetailItem__price">$50.00</p>
      <p className="DetailItem__infor">
        Go sporty this summer with this vintage navy and white striped v-neck
        t-shirt from the Nike. Perfect for pairing with denim and white kicks
        for a stylish sporty vibe.
      </p>
      <div className="DetailItem__button">
        <ButtonAmount
          plus={plus}
          minus={minus}
          value={data.quanlity === 0 ? "" : data.quanlity}
          onChange={onChangeQuanlity}
        />
        <Button clicked={(e) => addToCard(e, data.id)} classN="Button--detail">
          Add To Cart{" "}
        </Button>
      </div>
      <div className="DetailItem__photo">
        <img
          alt=""
          src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cart_image_600x.png?v=1585021052"
        />
      </div>
      <p>SKU: N/A</p>
      <p>Categories: {data?.categories}</p>
      <div className="DetailItem__boxIcon">
        <a href="/">
          <FontAwesomeIcon
            className="DetailItem__boxIcon__icon"
            icon={faFacebookF}
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            className="DetailItem__boxIcon__icon"
            icon={faTwitter}
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            className="DetailItem__boxIcon__icon"
            icon={faPinterest}
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            className="DetailItem__boxIcon__icon"
            icon={faEnvelope}
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            className="DetailItem__boxIcon__icon"
            icon={faYoutube}
          />
        </a>
      </div>
      {link ? (
        <NavLink
          className="DetailItem__viewDetails"
          to={{
            pathname: `products/${toSlug(data.title)}`,
            state: { id: `${data.id}` },
          }}
        >
          View full details
        </NavLink>
      ) : null}
    </div>
  );
}

export default DetailItem;
