import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGetAllBrandQuery } from "../../redux/api/brandApi";
import Brand from "./Brand";
import Devider from "../helpers/Devider";
import BrandSkeleton from "./BrandSkeleton";

const Brands = () => {
  const { data, isLoading, isError } = useGetAllBrandQuery();
  const skeletonNum = 18;

  return (
    <>
      <Row className="pt-5">
        <Col className="pt-3">
          <h1 className="text-center">All Mobile Brands in Bangladesh</h1>
        </Col>
      </Row>
      <Devider width={2} />
      {isLoading ? (
        <Row xs={3} md={4} lg={6} xl={10}>
          {new Array(skeletonNum).fill(null).map((item, i) => (
            <BrandSkeleton key={i} />
          ))}
        </Row>
      ) : isError ? (
        <Row xs={3} md={4} lg={6} xl={10}>
          {new Array(skeletonNum).fill(null).map((item, i) => (
            <BrandSkeleton key={i} />
          ))}
        </Row>
      ) : (
        <Row xs={3} md={4} lg={6} xl={10}>
          {data.brands.map((brand) => (
            <Brand key={brand._id} brand={brand} />
          ))}
        </Row>
      )}
    </>
  );
};

export default Brands;
