import React from "react";
import { Routes, Route } from "react-router-dom";
// layouts
import PublicLayout from "../layouts/PublicLayout";

// public pages
import Home from "./HomeRoute";
import Brands from "./BrandsRoute";
import SingleBrand from "./SingleBrandRoute";
import SingleMobile from "./SingleMobileRoute";
import Blog from "./BlogRoute";

// static page
import Disclaimer from "./DisclaimerRoute";
import NotFound from "./NotFoundRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:brandslug" element={<SingleBrand />} />
        <Route
          path="/brands/:brandslug/:mobileslug"
          element={<SingleMobile />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
