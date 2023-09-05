import React, { useState } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

function Reviews() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, event: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="client-reviews">
      <Container style={{ marginLeft: "35px" }}>
        <Row className="justify-content-center client-review-row" style={{ height: "175px" }}>
          <Col md={11} className="text-left">
            <h2 className="client-reviews__title">Client Reviews</h2>
          </Col>
        </Row>
        <Row className="justify-content-center client-review-row">
          <Col md={11}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              slide={true}
              indicators={false}
              style={{ height: "400px" }}
              controls={false}
            >
              <Carousel.Item>
                <Row>
                  <Col md={4} className="review-col">
                    <div className="client-reviews__item">
                      <p className="client-reviews__text">
                        I love it when a seller or developer is so naturally talented and skilled
                        that you always admire their work. It's like a much needed breath of fresh
                        air, far exceeding my expectations. Don't hesitate to hire him. I highly
                        recommend fasih to whoever wants amazing results!
                      </p>
                      <p className="client-reviews__author">- brandiepatrick</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="client-reviews__item">
                      <p className="client-reviews__text">
                        Fashi was great to work with, very responsive and did great work.
                      </p>
                      <p className="client-reviews__author">- davis36</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="client-reviews__item last-item" style={{ borderRight: "none" }}>
                      <p className="client-reviews__text">
                        Great work with quick delivery. He worked on updating and modernizing my
                        e-commerce website.
                      </p>
                      <p className="client-reviews__author">- sabihul</p>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col md={4}>
                    <div className="client-reviews__item">
                      <p className="client-reviews__text">
                        I asked him to copy a website and he did exactly that. The website looked
                        exactly like the original and when I asked to modify some components of the
                        website, he did it right away without any complaints. He always communicated
                        with me and whenever I had a question about his code, he answered it clearly
                        and descriptively. He is very friendly, hard-working, dedicated, and easy to
                        work. I would definitely work with him again. Thank you for providing the
                        best service! See
                      </p>
                      <p className="client-reviews__author">- jiermyu</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="client-reviews__item">
                      <p className="client-reviews__text">
                        Understood my project very easily. Good communication and experience.
                      </p>
                      <p className="client-reviews__author">- salmankhan968</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="client-reviews__item last-item">
                      <p className="client-reviews__text">
                        Very detailed explanation and professional work 👌🏻
                      </p>
                      <p className="client-reviews__author">- reemsaleh95</p>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <Button
              variant="secondary"
              className="client-reviews__button"
              onClick={() => setIndex(index === 0 ? 1 : index - 1)}
            >
              <i className="fa-solid fa-arrow-left fa-2xl"></i>
            </Button>
          </Col>
          <Col md={4} className="text-center">
            <Button
              variant="secondary"
              className="client-reviews__button"
              onClick={() => setIndex(index === 1 ? 0 : index + 1)}
            >
              <i className="fa-solid fa-arrow-right fa-2xl"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reviews;
