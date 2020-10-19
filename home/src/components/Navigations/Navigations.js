import React from "react";

import Navigation from "./Navigation/Navigation";
import "./Navigations.scss";
function Navigations({ classN }) {
  let navigation = ["Navigations__list"];
  if (classN) {
    navigation.push(classN);
  }
  return (
    <nav className="Navigations ">
      <ul className={navigation.join(" ")}>
        <Navigation path="/" exact={true} name="Home" />
        <Navigation path="/products" name="Products" />
        <Navigation path="/blog" name="Blog" />
        <Navigation path="/contact" name="Contact" />
      </ul>
    </nav>
  );
}

export default Navigations;
