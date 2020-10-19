import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShippingType from "../../components/ShippingType/ShippingType";
import Button from "../../components/UI/Button/Button";
import {
  faLifeRing,
  faRecycle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import CardItem from "../../components/CardItem/CardItem";
import CardBlog from "../../components/CardBlog/CardBlog";
import * as actions from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { toSlug } from "../../components/utiliti/utility";
import Modal from "../../components/UI/Modal/Modal";
import ModalItem from "../../components/ModalItem/ModalItem";
import { useHistory } from "react-router-dom";

const data1 = [
  {
    id: 1,
    time: "February 28, 2020",
    author: " admin",
    subTitle: `Sleek, minimalist wireless charging designs to "complement and blend within the home and office".`,
    title: "Dial and Disc Wireless Chargers home office from Sum",
    url: "https://i.imgur.com/hdk9VOT.jpg",
  },
  {
    id: 2,
    time: "February 28, 2020",
    author: " admin",
    subTitle: `These 3-in-1 headphones can snap together and turn into a wireless speaker.`,
    title: "The Headphones Can Translate 11 Languages Wireless Speaker",
    url: "https://i.imgur.com/PpR64sW.jpg",
  },
  {
    id: 3,
    time: "February 28, 2020",
    author: " admin",
    subTitle: `Microsoft’s Top Secret Surface Headphones Project Revealed`,
    title:
      "Microsoft unveils the cool grey, minimalist voice-controlled Surface Headphones.",
    url: "https://i.imgur.com/94kpTQY.jpg",
  },
];
function Home() {
  const history = useHistory();
  const dataBestSeller = useSelector((state) => state.home.data);
  const showModalItem = useSelector((state) => state.home.showModal);
  const dataModal = useSelector((state) => state.home.dataModal);
  const loadingShowModal = useSelector((state) => state.home.loadingShowModal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.homeInit());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  document.title = "Home";

  const clickedToCard = () => {};

  const redirectProduct = () => {
    history.push("/products")
  }
  const onQuickView = (e, id) => {
    e.preventDefault();
    dispatch(actions.modalShowItemInit(id));
  };

  const turnOffModal = () => {
    dispatch(actions.modalShowItemTurnOffModal());
  };

  const onChangeQuanlity = (e) => {
    let quanlity = e.target.value;
    if (!quanlity) {
      quanlity = 0;
    } else {
      quanlity = parseInt(e.target.value);
      if (quanlity === 0 || Number.isNaN(quanlity) || quanlity >= 100) return;
    }
    dispatch(actions.homeOnChangeQuanlity(quanlity));
  };

  const plusQuanlity = () => {
    dispatch(actions.homePlusQuanlity());
  };

  const minusQuanlity = () => {
    dispatch(actions.homeMiunsQuanlity());
  };
  const handleLoadMore = () => {
    history.push("/products");
  };
  let listCart;
  if (dataBestSeller) {
    listCart = dataBestSeller.map((item) => {
      return (
        <Col
          xl={3}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          key={item.id}
          style={{ marginBottom: "2rem" }}
        >
          <div className="BestSeller__card">
            <CardItem
              clickedToCard={clickedToCard}
              onQuickView={(e) => onQuickView(e, item.id)}
              sale={item.sale}
              price={item.price}
              title={item.title}
              url={item.images[0]}
              id={item.id}
              link={`products/${toSlug(item.title)}`}
            />
          </div>
        </Col>
      );
    });
  }

  let lisBlog = data1.map((item) => {
    return (
      <Col
        xl={4}
        lg={4}
        md={4}
        sm={6}
        xs={12}
        style={{ marginBottom: "5rem" }}
        key={item.id}
      >
        <div className="Blog__list">
          <CardBlog
            time={item.time}
            author={item.author}
            subTitle={item.subTitle}
            title={item.title}
            url={item.url}
          />
        </div>
      </Col>
    );
  });
  return (
    <Fragment>
      <Modal show={showModalItem} clicked={turnOffModal}>
        <p></p>
        <ModalItem
          plus={plusQuanlity}
          minus={minusQuanlity}
          onChangeQuanlity={onChangeQuanlity}
          link={true}
          loadingShowModal={loadingShowModal}
          dataModal={dataModal}
          handleShowModal={turnOffModal}
        />
      </Modal>
      <section className="Banner">
        <Container fluid>
          <Row>
            <div
              className="Banner__box"
              style={{
                backgroundImage: `url("https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ban16_f6fd0b77-a64d-48a9-8163-5330297676e8_1950x.jpg?v=1582857554")`,
              }}
            >
              <div className="Banner__content">
                <h3 className="Heading--tertiary">
                  Decor your home with high-end audio
                </h3>
                <Button classN="Button--black">show now</Button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className="Shipping">
        <Container>
          <Row>
            <Col xl={4} lg={4} md={12} sm={12} xs={12}>
              <div  className="Shipping__content">
                <ShippingType
                  icon={faLifeRing}
                  title="SUPPORT 24/7"
                  subtitle="we support 24 hours a day"
                />
              </div>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} xs={12}>
              <div className="Shipping__content">
                <ShippingType
                  icon={faRecycle}
                  title="30 DAYS RETURN"
                  subtitle="you have 30 days to return"
                />
              </div>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} xs={12}>
              <div className="Shipping__content">
                <ShippingType
                  icon={faUser}
                  title="PAYMENT 100% SECURE"
                  subtitle="Payment 100% Secure"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Category">
        <Container>
          <Row>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <div  onClick={redirectProduct} className="Category__card">
                <Card
                  title="Audio"
                  url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cat15_720x.jpg?v=1582857819"
                />
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <div  onClick={redirectProduct} className="Category__card">
                <Card
                  title="Speaker"
                  url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cat13_720x.jpg?v=1582796459"
                />
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <div  onClick={redirectProduct} className="Category__card">
                <Card
                  title="Hi-end"
                  url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/hi-end_720x.jpg?v=1583147788"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="BestSeller">
        <Container>
          <Row>
            <Col>
              <div className="BestSeller__box">
                <div className="BestSeller__heading">
                  <Heading
                    title="BESTSELLER"
                    subTitle="Top seller in the week"
                  />
                </div>
                <div className="BestSeller__content">
                  <Row>
                    {/* <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                      <div className="BestSeller__card">
                        <CardItem
                          clickedToCard={clickedToCard}
                          onQuickView={onQuickView}
                          sale={10}
                          price={4000}
                          title="Ysamsung Camera"
                          url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
                        />
                      </div>
                     
                    </Col> */}
                    {listCart}
                  </Row>
                  <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <Button classN="Button--black" clicked={handleLoadMore}>
                      Load More
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Subscribe">
        <Container>
          <Row>
            <Col>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <Heading
                  title="SUBSCRIBE OUR NEWSLETTER"
                  subTitle="Sign up for our newsletter to be updated on the latest designs, exclusive offers, inspiration and tips!"
                />
              </div>
              <div className="Subscribe__box">
                <div className="Subscribe__form">
                  <input
                    type="email"
                    name="home[email]"
                    placeholder="Your email address"
                    className="Subscribe__input"
                  />
                  <Button
                    classN="Button--black"
                    style={{ borderRadius: "50px", width: "70%" }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Blog">
        <Container>
          <Row>
            <Col>
              <div
                className="Blog__box"
                style={{ textAlign: "center", marginBottom: "2.5rem" }}
              >
                <div style={{ marginBottom: "3rem" }}>
                  <Heading
                    title="LATES FROM BLOG"
                    subTitle="The freshest and most exciting news"
                  />
                </div>
              </div>
              <Row>{lisBlog}</Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Home;
