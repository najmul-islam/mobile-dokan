import React from "react";
import { useGetAllBrandQuery } from "../../redux/api/brandApi";
import { Badge, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const BrandBadge = () => {
  const { data, isLoading, isError, error } = useGetAllBrandQuery();
  console.log(data);
  if (isLoading) return <Loading />;
  if (isError) return <h1>An error occured {error.error}</h1>;
  return (
    <Container>
      <Nav>
        {data.map((brand) => (
          <Nav.Link
            key={brand._id}
            as={Link}
            to={`brands/${brand.name.toLowerCase()}`}
          >
            {brand.name}
          </Nav.Link>
        ))}
      </Nav>
    </Container>
  );
};

export default BrandBadge;
