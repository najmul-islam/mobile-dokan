import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";

const PublicLayout = () => {
  return (
    <>
      <header>
        <Header />
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
