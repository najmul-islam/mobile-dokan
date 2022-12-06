import React, { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";
const SingleMobile = lazy(() => import("../pages/SingleMobilePage"));

const SingleMobileRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SingleMobile />
    </Suspense>
  );
};

export default SingleMobileRoute;
