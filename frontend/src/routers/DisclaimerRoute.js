import React, { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";
const Disclaimer = lazy(() => import("../pages/DisclaimerPage"));

const DisclaimerRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Disclaimer />
    </Suspense>
  );
};

export default DisclaimerRoute;
