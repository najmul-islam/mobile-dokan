import React from "react";
import { Container } from "react-bootstrap";
import MainNavbar from "../navbar/MainNavbar";
import BrandBadge from "../brands/BrandBadge";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
const Header = () => {
  return (
    <>
      <MainNavbar />
      <BrandBadge />
      <BreadCrumbs />
    </>
  );
};

export default Header;
