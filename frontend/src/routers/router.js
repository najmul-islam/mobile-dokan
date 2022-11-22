import React from "react";
import { Routes, Route } from "react-router-dom";
// layouts
import PublicLayout from "../layouts/PublicLayout";

// public
import HomeRoute from "./HomeRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomeRoute />} />
      </Route>
    </Routes>
  );
};

export default Router;
