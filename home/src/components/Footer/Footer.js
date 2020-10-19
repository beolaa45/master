import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";
function Footer(props) {
  return (
    <section className="Footer">
      <Container>
        <Row>
          <Col xl={3} lg={3} md={3} sm={6} xs={12} className="Footer__col">
            <div className="Footer__infor">
              <h1 className="Footer__infor__logo">master</h1>
              <div className="Footer__infor__adress">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
              </div>
              <div className="Footer__infor__mail">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="/">contact@master.com</a>
              </div>
              <p className="Footer__infor__phone">
                <FontAwesomeIcon icon={faPhone} />
                <span>+001 2233 456</span>
              </p>
              <p className="Footer__infor__social">
                <a href="/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </p>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6} xs={12} className="Footer__col">
            <div className="Footer__content">
              <p className="Footer__content__title">Categories</p>
              <a href="/" className="Footer__content__sub">
                Men
              </a>
              <a href="/" className="Footer__content__sub">
                Women
              </a>
              <a href="/" className="Footer__content__sub">
                Accessories
              </a>
              <a href="/" className="Footer__content__sub">
                Shoes
              </a>
              <a href="/" className="Footer__content__sub">
                Men
              </a>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6} xs={12} className="Footer__col">
            <div className="Footer__content">
              <p className="Footer__content__title">Infomation</p>
              <a href="/" className="Footer__content__sub">
                About Us
              </a>
              <a href="/" className="Footer__content__sub">
                Contact Us
              </a>
              <a href="/" className="Footer__content__sub">
                Terms & Conditions
              </a>
              <a href="/" className="Footer__content__sub">
                Returns & Exchanges
              </a>
              <a href="/" className="Footer__content__sub">
                Shipping & Delivery
              </a>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6} xs={12} className="Footer__col">
            <div className="Footer__content">
              <p className="Footer__content__title">Useful links</p>
              <a href="/" className="Footer__content__sub">
                Store Location
              </a>
              <a href="/" className="Footer__content__sub">
                Latest News
              </a>
              <a href="/" className="Footer__content__sub">
                My Account
              </a>
              <a href="/" className="Footer__content__sub">
                Size Guides
              </a>
              <a href="/" className="Footer__content__sub">
                FAQs
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
