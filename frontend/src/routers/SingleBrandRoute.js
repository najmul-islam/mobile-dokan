import React, { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";
const SingleBrand = lazy(() => import("../pages/SingleBrandPage"));

const SingleBrandRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SingleBrand />
    </Suspense>
  );
};

export default SingleBrandRoute;
