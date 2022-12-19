import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetSingleBrandQuery } from "../../redux/api/brandApi";
import { Row, Col } from "react-bootstrap";
import Devider from "../helpers/Devider";
import BrandSkeleton from "./BrandSkeleton";
import MobileCard from "./MobileCard";

const SingleBrand = () => {
  const { brandslug } = useParams();
  const { data, isLoading, isError, error } = useGetSingleBrandQuery(brandslug);
  const skeletonNum = 18;

  return (
    <>
      {/* <h1>{data.brand.name}</h1>
      <hr />
      <div>
        {data.mobiles.map((mobile) => (
          <div key={mobile._id}>
            <Link to={`/brands/${brandslug}/${mobile.slug}`}>
              <h3>{mobile.name}</h3>
            </Link>
          </div>
        ))}
      </div> */}
      <Row className="pt-5">
        <Col className="pt-3">
          <h1 className="text-center fw-bold">
            {isLoading ? "Loading..." : data.brand.name} Mobile Bangladesh
          </h1>
        </Col>
      </Row>
      <Devider width={3} color="primary" />
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
        <Row xs={2} md={3} lg={5}>
          {data.mobiles.map((mobile) => (
            <MobileCard key={mobile._id} brand={data.brand} mobile={mobile} />
          ))}
        </Row>
      )}
    </>
  );
};

export default SingleBrand;
