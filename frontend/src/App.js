import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Router from "./routers/router";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
};

export default App;
