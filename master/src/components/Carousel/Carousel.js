import React from "react";

import Slider from "react-slick";
import CardItem from "../CardItem/CardItem";
import Heading from "../Heading/Heading";
import {toSlug } from "../utiliti/utility";
import "./Carousel.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const SimpleSlider = ({ api, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    ...api,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let render = data?.map((item) => {
    return (
      <div key={item.id}>
        <CardItem
          // clickedToCard

          sale={item.sale}
          price={item.price}
          title={item.title}
          url={item.images[0]}
          id={item.id}
          link={`products/${toSlug(item.title)}`}
        />
      </div>
    );
  });
  return (
    <div className="Carousel">
      <Heading title="You may also like" />
      <Slider {...settings}>{render}</Slider>
    </div>
  );
};

export default SimpleSlider;
