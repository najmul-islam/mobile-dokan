import React, { useState, useEffect } from "react";
import { useGetAllBrandQuery } from "../../redux/api/brandApi";
import { Badge, Container, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrandBadgeSkeleton from "./BrandBadgeSkeleton";

const BrandBadge = () => {
  const { data, isLoading, isError } = useGetAllBrandQuery();
  const [windowWidth, setWindowWidth] = useState(0);
  const [brandNum, setBrandNum] = useState(15);
  // useEffect(() => {
  //   window.addEventListener("resize", (e) => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // }, [window.innerWidth]);

  // if (windowWidth > 576) {
  //   setBrandNum(4);
  // }
  // console.log(windowWidth);

  if (isLoading) return <BrandBadgeSkeleton />;
  if (isError) return <BrandBadgeSkeleton />;
  return (
    <Container>
      <Nav className="border-bottom">
        {data.map((brand) => (
          <Nav.Link
            key={brand._id}
            as={Link}
            to={`/brands/${brand.name.toLowerCase()}`}
          >
            {brand.name}
          </Nav.Link>
        ))}

        <Nav.Link as={Link} to={"/brands"}>
          All Brands
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default BrandBadge;
