import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhone,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import Button from "../../components/UI/Button/Button";
import "./Contact.scss";

function Contact(props) {
    useEffect(() => {
       
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  return (
    <Fragment>
      <section className="Contact__banner">
        <Container fluid>
          <Row>
            <Banner
              title="Contact"
              page="Contact"
              url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"
            />
          </Row>
        </Container>
      </section>
      <section className="Contact__box">
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <form className="Contact__box__form">
                <p className="Contact__box__form__title">Send us a message</p>
                <div className="Contact__box__form__group">
                  <label htmlFor="contactName">First and last name*</label>
                  <input type="text" id="contactName" />
                </div>
                <div className="Contact__box__form__group">
                  <label htmlFor="contactEmail">Email address*</label>
                  <input type="text" id="contactEmail" />
                </div>
                <div className="Contact__box__form__group">
                  <label htmlFor="contactPhone">Phone number*</label>
                  <input type="text" id="contactPhone" />
                </div>
                <div className="Contact__box__form__group">
                  <label htmlFor="contactContent">Import content*</label>
                  <textarea row="5" type="text" id="contactContent" />
                </div>
                <Button>To Send</Button>
              </form>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="Contact__box__location">
                <div className="Contact__box__location__box">
                  <FontAwesomeIcon
                    className="Contact__box__location__box__icon"
                    icon={faMapMarkedAlt}
                  />
                  <div className="Contact__box__location__box__infor">
                    <p>Address</p>
                    <p>150 Lane Xa Dan 2, Dong Da District, City. Hanoi</p>
                  </div>
                </div>
                <div className="Contact__box__location__box">
                  <FontAwesomeIcon
                    className="Contact__box__location__box__icon"
                    icon={faPhone}
                  />
                  <div className="Contact__box__location__box__infor">
                    <p>Phone number</p>
                    <p>0987156321</p>
                  </div>
                </div>
                <div className="Contact__box__location__box">
                  <FontAwesomeIcon
                    className="Contact__box__location__box__icon"
                    icon={faEnvelopeOpenText}
                  />
                  <div className="Contact__box__location__box__infor">
                    <p>Email</p>
                    <p>master@mail.com</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <div style={{paddingBottom: "10rem"}}>
                <h2
                  style={{
                    fontWeight: "600",
                    marginBottom: "2rem",
                    fontSize: "2.2rem",
                  }}
                >
                  Map
                </h2>
                <div className="map__photo">
                  <div style={{ width: "100%" }}>
                    <iframe
                      title="aaa"
                      width="100%"
                      height={600}
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=s%E1%BB%91%204,%20%C4%91%C6%B0%E1%BB%9Dng%20nguy%E1%BB%85n%20ch%C3%AD%20thanh,%20%C4%91%E1%BB%91ng%20%C4%91a%20+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Contact;
