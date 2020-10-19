import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import Filter from "../../components/Filter/Filter";
import "./Products.scss";
import Carousel from "../../components/Carousel/Carousel";
import CardItem from "../../components/CardItem/CardItem";
import { useSelector, useDispatch } from "react-redux";
import { toSlug } from "../../components/utiliti/utility";
import * as actions from "../../store/actions/index";
import Spinnerr from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import ModalItem from "../../components/ModalItem/ModalItem";
import Button from "../../components/UI/Button/Button";
import { useHistory } from "react-router-dom";
import queryString from "querystring";
var likeProducts = [
  {
    id: 1,
    title: "Lomo Sanremo Edition",
    images: [
      "https://i.imgur.com/JrH9udG.jpg",
      "https://i.imgur.com/PAsLFGS.jpg",
      "https://i.imgur.com/MxSUt53.jpg",
    ],
    price: 120,
    sale: 20,
    status: false,
    producer: "Lomo",
    categories: "Camera",
    quanlity: 1,
  },
  {
    id: 2,
    title: "Beats Solo3 Wireless",
    images: [
      "https://i.imgur.com/d4FAl7i.jpg",
      "https://i.imgur.com/dxK88Px.jpg",
      "https://i.imgur.com/65d518e.jpg",
      "https://i.imgur.com/NCfPfbp.jpg",
    ],
    price: 100,
    sale: 0,
    status: false,
    producer: "Lomo",
    categories: "Speaker",
    quanlity: 1,
  },
  {
    id: 3,
    title: "Ysamsung Camera",
    images: [
      "https://i.imgur.com/SM3VuHR.jpg",
      "https://i.imgur.com/SrVWY5F.jpg",
      "https://i.imgur.com/umasxMr.jpeg",
    ],
    price: 100,
    sale: 0,
    status: false,
    producer: "Samsung",
    categories: "Camera",
    quanlity: 1,
  },
  {
    id: 4,
    title: "Ygoogle Speaker",
    images: [
      "https://i.imgur.com/4mZgEYM.jpg",
      "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic4_1_720x.jpg?v=1582862216",
    ],
    price: 120,
    sale: 0,
    status: false,
    producer: "Google",
    categories: "Speaker",
    quanlity: 1,
  },
  {
    id: 5,
    title: "Ybeoplay H9i",
    images: [
      "https://i.imgur.com/7u8na5o.jpg",
      "https://i.imgur.com/aIy3zgS.jpg",
      "https://i.imgur.com/2I8FVNh.jpg",
    ],
    price: 150,
    sale: 29,
    status: false,
    producer: "Google",
    categories: "Speaker",
    quanlity: 1,
  },
  {
    id: 6,
    title: "YApple MacBook",
    images: [
      "https://i.imgur.com/iJbjLaJ.jpg",
      "https://i.imgur.com/iJbjLaJ.jpg",
      "https://i.imgur.com/jU5hrDm.jpg",
    ],
    price: 130,
    sale: 0,
    status: false,
    producer: "apple",
    categories: "Laptop",
    quanlity: 1,
  },
];
function Products() {
  let dataProducts = useSelector((state) => state.products.data);
  let [valueSelectPage, setValueSelectPage] = useState("")
  let loading = useSelector((state) => state.products.loading);
  let dispatch = useDispatch();
  let history = useHistory();
  let showModalItem = useSelector((state) => state.products.showModal);
  let loadingShowModal = useSelector((state) => state.products.loadingModal);
  let dataModal = useSelector((state) => state.products.dataModal);

  let totalItem = localStorage.getItem("x-total-count");
  let page = Math.ceil(totalItem / 8);
  let renderButton = [];

  let query = {
    categories_like: "",
    _sort: "id",
    _order: "desc",
    _limit: "9",
    _page: 1,
  };

  const handleSelect = (e) => {
    
    [query._sort, query._order] = e.target.value.split("-");
    fetchDataSort("/products?" + queryString.stringify({...query,  categories_like: valueSelectPage }));
  };
  const selectPage = (i) => {
    query._page = i;
  
    fetchDataSort("/products?" + queryString.stringify(query));
  };
  const onChangeFilter = (e) => {
    let categories = e.target.value;
    if (categories == "all") {
      query.categories_like = "";
      setValueSelectPage("")
    } else {
   
      query.categories_like = categories;
      setValueSelectPage(categories)
    }
  };
  const fetchDataSort = (url) => {
    dispatch(actions.productsSortInit(url));
    history.push(url);
  };
  const filter = (e) => {
    e.preventDefault();
    fetchDataSort("/products?" + queryString.stringify({...query, categories_like:valueSelectPage}));
  };

  for (let i = 1; i <= page; i++) {
    renderButton.push(
      <div key={i} style={{ display: "inline-block" }}>
        <Button
          key={i}
          classN={query._page == i ? "Button--page active" : "Button--page"}
          clicked={() => selectPage(i)}
        >
          {i}
        </Button>
      </div>
    );
  }
  const clickedToCard = () => {};

  const onQuickView = (e, id) => {
    e.preventDefault();
    dispatch(actions.productsItemModalInit(id));
  };

  const onChangeQuanlity = (e) => {
    let quanlity = e.target.value;
    if (!quanlity) {
      quanlity = 0;
    } else {
      quanlity = parseInt(e.target.value);
      if (quanlity === 0 || Number.isNaN(quanlity) || quanlity >= 100) return;
    }
    dispatch(actions.productsOnChangeQuanlity(quanlity));
  };

  const plusQuanlity = () => {
    dispatch(actions.productsPlusQuanlity());
  };

  const minusQuanlity = () => {
    dispatch(actions.productsMiunsQuanlity());
  };

  useEffect(() => {
    dispatch(actions.productsInit());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {}, [dataProducts]);

  const turnOffModal = () => {
    dispatch(actions.productsTurnOffModal());
  };

  let renderProduct;
  if (dataProducts) {
    renderProduct = dataProducts.map((item) => {
      return (
        <Col
          xl={4}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          key={item.id}
          style={{ marginBottom: "3rem" }}
        >
          <div>
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

  if (loading) {
    renderProduct = (
      <Spinnerr
        style={{ height: "30rem", width: "100%", textAlign: "center" }}
      />
    );
  }
  return (
    <Fragment>
      <Modal show={showModalItem} clicked={turnOffModal}>
        <p></p>
        <ModalItem
          link={true}
          plus={plusQuanlity}
          minus={minusQuanlity}
          onChangeQuanlity={onChangeQuanlity}
          loadingShowModal={loadingShowModal}
          dataModal={dataModal}
          handleShowModal={turnOffModal}
        />
      </Modal>
      <section className="Products__banners">
        <Container fluid>
          <Row>
            <Banner
              title="Products"
              page="products"
              url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"
            />
          </Row>
        </Container>
      </section>
      <section className="Products__content">
        <Container>
          <Row>
            <Col xl={3} lg={3} md={12} sm={12} xs={12}>
              <form className="Products__content__filter">
                <Filter
                  title="Categories"
                  subTitle={["All", "Camera", "Speaker", "Laptop"]}
                  onChange={(e) => onChangeFilter(e)}
                />
                <div className="Products__content__filter__box">
                  <button
                    onClick={(e) => filter(e)}
                    className="Products__content__filter__box__submit"
                  >
                    Filter
                  </button>
                </div>
              </form>
            </Col>
            <Col xl={9} lg={9} md={12} sm={12} xs={12}>
              <div className="Products__content__list">
                <div className="Products__content__list__filter">
                  <p className="Products__content__list__filter__sort">
                    Sort by:
                  </p>
                  <select
                    id="selectValue"
                    onChange={handleSelect}
                    className="Products__content__list__filter__select"
                  >
                    <option value="id-asc" select="selected">
                      Mặc định
                    </option>
                    <option value="title-asc">A đến Z</option>
                    <option value="title-desc">Z đến A</option>
                    <option value="price-asc">Giá từ thấp đến cao</option>
                    <option value="price-desc">Giá từ cao đến thấp</option>
                  </select>
                </div>
                <div className="Products__content__list__content">
                  <Row>{renderProduct}</Row>
                  <Row>
                    <Col>
                      <div style={{ textAlign: "center" }}>
                        {renderButton && renderButton}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ marginBottom: "5rem" }}>
        <Container>
          <Row>
            <Col>
              <Carousel data={likeProducts && likeProducts} />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Products;
