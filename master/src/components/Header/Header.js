import React, { Fragment, useEffect, useState } from "react";

import Navigation from "../Navigations/Navigations";
import UserAction from "../UserAction/UserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import BackDrop from "../UI/BackDrop/BackDrop";
import SideDrawer from "../Navigations/SideDrawer/SideDrawer";
import { Link, useHistory } from "react-router-dom";
import Navigations from "../Navigations/Navigations";
import ShoppingCart from "../ShopipngCart/ShoppingCart";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal/Modal";
import { Tab, Tabs } from "react-bootstrap";
import { Formik, FastField, Form } from "formik";
import * as Yup from "yup";
import Button from "../UI/Button/Button";
import InputField from "../Form/InputField";

function Header(props) {
  const [show, setShow] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [checked, setChecked] = useState(false);
  let history = useHistory();
  let [wanningChecked, setWanningChecked] = useState(null);
  let data = useSelector((state) => state.cart.data);
  let basket = 0;
  data.map((item) => {
    basket += item.quanlity;
  });

  const clickedUser = () => {
    setShowModalUser(true);
  };
  const handleModalUser = () => {
    setShowModalUser(false);
  };

  const clickedBasket = () => {
    setShowBasket((prev) => !prev);
  };

  const clickedSearch = () => {};
  const handleShowBackDrop = () => {
    setShow((prevState) => !prevState);
  };

  const closeBasket = () => {
    setShowBasket(false);
  };

  const viewCart = () => {
    history.push("/cart");
    setShowBasket(false);
  };

  const checkOut = () => {
    if (checked) {
      history.push("/checkout");
      setShowBasket(false);
      setWanningChecked(null);
    } else {
      setWanningChecked(
        <p style={{ color: "red" }}>
          You must agree with the terms and conditions of sales to check out.{" "}
        </p>
      );
    }
  };
  useEffect(() => {
    if (data?.length) {
      setShowBasket(true);
    }
  }, [data?.length]);
  const changeChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Fragment>
      <BackDrop show={show} clicked={handleShowBackDrop} />
      <SideDrawer show={show}>
        <Navigations classN="Navigations__list--siderdrawer" />
      </SideDrawer>

      <BackDrop show={showBasket} clicked={clickedBasket} />
      <SideDrawer classN="SideDrawer--basket" show={showBasket}>
        <ShoppingCart
          data={data}
          closeBasket={closeBasket}
          viewCart={viewCart}
          checkOut={checkOut}
          changeChecked={changeChecked}
          checked={checked}
          wanningChecked={wanningChecked}
        />
      </SideDrawer>

      <Modal
        show={showModalUser}
        classN="Modal--form"
        clicked={handleModalUser}
      >
        <Tabs defaultActiveKey="LOGIN" id="uncontrolled-tab-example">
          <Tab eventKey="LOGIN" title="LOGIN">
            <div className="Form__login">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Invalid email format")
                    .required("This field is required"),
                  password: Yup.string("Invalid number format")
                    .min(9)
                    .required("This field is required"),
                })}
                onSubmit={(values) => {
                  setTimeout(() => {
                    alert("Success");
                    setShowModalUser(false);
                  }, 500);
                }}
              >
                {(props) => {
                  return (
                    <Form>
                      <FastField
                        name="email"
                        component={InputField}
                        lable="Email*"
                        type="email"
                      />

                      <FastField
                        name="password"
                        component={InputField}
                        lable="Password*"
                        type="password"
                      />
                      <div style={{ textAlign: "center" }}>
                        <Button type="submit" classN="Button--form">
                          LOGIN
                        </Button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Tab>
          <Tab eventKey="SIGNIN" title="SIGNIN">
            <div className="Form__signin">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string().required("This field is required"),
                  lastName: Yup.string().required("This field is required"),
                  email: Yup.string()
                    .email("Invalid email format")
                    .required("This field is required"),
                  phone: Yup.string("Invalid number format")
                    .min(9)
                    .required("This field is required"),
                  password: Yup.string()
                    .min(9)
                    .required("This field is required"),
                  confirmPassword: Yup.string().when("password", {
                    is: (val) => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                      [Yup.ref("password")],
                      "Both password need to be the same"
                    ),
                  }),
                })}
                onSubmit={(values) => {
                  setTimeout(() => {
                    alert("Success");
                    setShowModalUser(false);
                  }, 500);
                }}
              >
                {(props) => {
                  return (
                    <Form>
                      <FastField
                        name="firstName"
                        component={InputField}
                        lable="First Name*"
                        type="text"
                      />
                      <FastField
                        name="lastName"
                        component={InputField}
                        lable="Last Name*"
                        type="text"
                      />
                      <FastField
                        name="email"
                        component={InputField}
                        lable="Email*"
                        type="email"
                      />

                      <FastField
                        name="password"
                        component={InputField}
                        lable="Password*"
                        type="password"
                      />

                      <FastField
                        name="confirmPassword"
                        component={InputField}
                        lable="Confirm Password*"
                        type="password"
                      />
                      <div style={{ textAlign: "center" }}>
                        <Button type="submit" classN="Button--form">
                          SIGNIN
                        </Button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Tab>
        </Tabs>
      </Modal>
      <header className="Header">
        <div className="container Header__container">
          <div className="row  Header__row">
            <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 Header__col">
              <div className=" Header__navigation desktop">
                <Navigation />
              </div>
              <div className="col-1 Header__icon mobile">
                <FontAwesomeIcon
                  icon={faBars}
                  className="Header__bars"
                  onClick={handleShowBackDrop}
                />
              </div>
            </div>
            <div className="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 Header__col">
              <div className="Header__logo">
                <Link className="Header__link" to="/">
                  {" "}
                  master
                </Link>
              </div>
            </div>
            <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 Header__col">
              <div className="Header__user">
                <UserAction
                  basket={basket}
                  clickedUser={clickedUser}
                  clickedBasket={clickedBasket}
                  clickedSearch={clickedSearch}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
