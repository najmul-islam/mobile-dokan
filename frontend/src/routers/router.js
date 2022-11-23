import React from "react";
import { Routes, Route } from "react-router-dom";
// layouts
import PublicLayout from "../layouts/PublicLayout";

// public pages
import Home from "./HomeRoute";
import Brands from "./BrandsRoute";
import Blog from "./BlogRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/all-brands" element={<Brands />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default Router;
