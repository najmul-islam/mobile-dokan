import React, { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";
const Brands = lazy(() => import("../pages/BrandsPage"));

const BrandsRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Brands />
    </Suspense>
  );
};

export default BrandsRoute;
