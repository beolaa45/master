import React from "react";
import Slider from "react-slick";
import Image from "../UI/Image/Image";
import "./Carousel2.scss";
const Carousel2 = ({ data }) => {
  if (!data) return null;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="Carousel2__thumbai"
        style={{
          width: "100%",
          color: "blue",
        }}
      >
        <Image url={`${data.images[i]}`} />
      </div>
    ),
  };
  let renderItem = data.images.map((url, index) => {
    return (
      <div key={index}>
        <Image url={`${url}`} />
      </div>
    );
  });
  return (
    <div className="Carousel2">
      <Slider {...settings}>{renderItem}</Slider>
    </div>
  );
};

export default Carousel2;
