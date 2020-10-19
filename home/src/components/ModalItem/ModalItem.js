import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel2 from "../Carousel2/Carousel2";
import DetailItem from "../DetailItem/DetailItem";
import Spinnerr from "../UI/Spinner/Spinner";
import "./ModalItem.scss";
function ModalItem({
  dataModal,
  loadingShowModal,
  plus,
  minus,
  onChangeQuanlity,
  link,
  handleShowModal
}) {
  let renderItem;
  if (dataModal) {
    renderItem = (
      <Container>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Carousel2 data={dataModal} />
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <DetailItem
              link={link}
              plus={plus}
              minus={minus}
              onChangeQuanlity={onChangeQuanlity}
              data={dataModal}
            />
          </Col>
        </Row>
      </Container>
    );
  }
  if (loadingShowModal) {
    renderItem = <Spinnerr style={{ height: "60vh" }} />;
  }

  return <div className="ModalItem">
    <div onClick={handleShowModal} className="ModalItem__icon">
      <FontAwesomeIcon icon={"times-circle"} className="ModalItem__icon__delete"/>
    </div>
    {renderItem}
    </div>;
}

export default ModalItem;
