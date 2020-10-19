import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import CardBlog from "../../components/CardBlog/CardBlog";
import "./Blog.scss";
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
  {
    id: 4,
    time: "February 21, 2020",
    author: " admin",
    subTitle: `The Kozmophone Is a Holographic,  Bluetooth Turntable`,
    title:
      "Imagine a turntable with a portable and detachable phonograph-style horn speaker and a miniature.",
    url: "https://i.imgur.com/jPXw2Hz.jpg",
  },
  {
    id: 5,
    time: "February 28, 2020",
    author: " admin",
    subTitle: `This startup founded by MIT grads wants users to charge up to four iPhones at the same time`,
    title:
      "The Pi Offers a Futuristic Slice of Proximity Charging For New iPhones",
    url: "https://i.imgur.com/wdwvab7.jpg",
  },
  {
    id: 6,
    time: "February 28, 2020",
    author: " admin",
    subTitle: `Microsoft’s Top Secret Surface Headphones Project Revealed`,
    title:
      "Microsoft unveils the cool grey, minimalist voice-controlled Surface Headphones.",
    url: "https://i.imgur.com/iODjvmd.jpg",
  },
];
function Blog(props) {
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
      <section className="Blog__banner">
        <Container fluid>
          <Row>
            <Banner
              title="Blog"
              page="Blog"
              url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"
            />
          </Row>
        </Container>
      </section>
      <section className="Blog__box">
        <Container>
          <Row>{lisBlog}</Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Blog;
