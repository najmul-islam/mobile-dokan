import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Disclaimer = () => {
  return (
    <Container className="py-5">
      <Row className="py-5">
        <Col className="text-center">
          <h1 className="fw-bold">Disclaimer</h1>
          <h2>Disclaimer about the information on our site</h2>
        </Col>
      </Row>

      <Row className="py-3">
        <Col>
          <h2>Price</h2>
          <p className="text-justify">
            Mobiledokan.com shows only the official price of mobile phones in
            Bangladesh. The prices and status / availability of different
            devices may change and we try to update the information as soon as
            we receive it. But we do not guarantee that all the devices on our
            site are available at the same price at this moment and that all of
            their status are correct. We suggest to double check the price from
            brand showroom, their official website, customer care or by
            contacting any of their verified social media pages before making a
            decision of purchase.
          </p>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          <h2>Specifications</h2>
          <p>
            We also do not guarantee that the specifications are 100% accurate.
            Most of the specs were collected from the official sites of each
            brand and some other trusted sources. However, there is always the
            possibility of making mistakes by both parties during manual data
            entry or any other reasons.
          </p>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          {" "}
          <h2>Rating & Reviews</h2>
          <p>
            The ratings and reviews of individual products are subjected to the
            research, knowledge, understanding, opinion and experience of the
            writer. They are mostly based on the general understanding of the
            specifications, market trends, pricing and user feedback. Online
            hands-on reviews from different tech experts are being considered as
            well in most of the recent reviews. But many of the reviews are
            written based on the general understanding of the specifications
            only. So, the real-life experience of a user can be different, e.g.,
            because of the hardware and software quality of the device.
            Moreover, the experience with a phone is also unique from user to
            user and the service of a phone often depends on how a user uses it.
            Therefore, ratings and reviews are there to give some general
            indications about the device and should not be taken in an absolute
            sense.
          </p>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          {" "}
          <h2>Brand Information & Blog Posts</h2>
          <p>
            The historical information on individual brand pages, news on blog
            posts etc. are collected from authentic sources, but like the topics
            mentioned above, we can’t guarantee the 100% accuracy of the data.
          </p>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          <h2>Where to Buy Page</h2>
          <p>
            We have mentioned some shop names in our “where to buy” page to help
            our visitors to know about popular local retail shops and online
            shops. However, we do not guarantee that the pricing of our site and
            the pricing of the shops will be the same or that you can find all
            latest phones in our site in those shops. Also, every shop is
            responsible for their own products, warranty, delivery and so on. We
            do not have partnership with any shop or brand as the purpose of
            mobiledokan.com is to remain a neutral, independent mobile phone
            info-based website.
          </p>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          {" "}
          <h2>Fair Information Policy</h2>
          <p>
            As a part of our fair information policy, any brand or business can
            request us to update our information about them at any time if there
            is a delay in update or a misinformation from our side and we will
            try to update it as soon as possible after verifying the
            information. The second option is to officially request us to remove
            their brand or business information from our website which we will
            try to carry out within 48 hours. We can be contacted via our Email
            mail@mobiledokan.com.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Disclaimer;
