import React from "react";
import { Container } from "react-bootstrap";
import MainNavbar from "../navbar/MainNavbar";
import BrandBadge from "../others/BrandBadge";

const Header = () => {
  return (
    <>
      <MainNavbar />
      <BrandBadge />
    </>
  );
};

export default Header;
