import React from "react";
import { useDispatch } from "react-redux";
import { useGetAllBrandQuery } from "../../redux/api/brandApi";
// import { slug } from "../../redux/features/brands/brandSlice";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBrandsSkeleton from "./NavBrandsSkeleton";

const NavBrands = () => {
  const { data, isLoading, isError } = useGetAllBrandQuery();

  return (
    <Container>
      {isLoading ? (
        <NavBrandsSkeleton />
      ) : isError ? (
        <NavBrandsSkeleton />
      ) : (
        <Nav className="border-bottom">
          {data.brands.map((brand) => (
            <Nav.Link key={brand._id} as={Link} to={`/brands/${brand.slug}`}>
              {brand.name}
            </Nav.Link>
          ))}

          <Nav.Link as={Link} to={"/brands"}>
            All Brands
          </Nav.Link>
        </Nav>
      )}
    </Container>
  );
};

export default NavBrands;
