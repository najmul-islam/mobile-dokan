import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/navbar/MainNavbar";
// import Footer from "../components/footer/Footer";

const PublicLayout = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h5>This is footer</h5>
      </footer>
    </>
  );
};

export default PublicLayout;
