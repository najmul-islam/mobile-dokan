import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import NavBrands from "./NavBrands";
import BreadCrumbs from "./BreadCrumbs";

const Header = () => {
  return (
    <>
      <NavBar />
      <NavBrands />
      {/* <BreadCrumbs /> */}
    </>
  );
};

export default Header;
