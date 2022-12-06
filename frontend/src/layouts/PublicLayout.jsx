import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const PublicLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container className="min-vh-100">
        <Outlet />
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PublicLayout;
