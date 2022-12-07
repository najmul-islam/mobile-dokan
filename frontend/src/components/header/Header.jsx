import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import NavBrands from "./NavBrands";
import BreadCrumbs from "./BreadCrumbs";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <NavBar />
      <NavBrands />
      {pathname === "/" ? null : <BreadCrumbs />}
    </>
  );
};

export default Header;
