import React, { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";
const PriceRange = lazy(() => import("../pages/PriceRangePage"));
const PriceRangeRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PriceRange />
    </Suspense>
  );
};

export default PriceRangeRoute;
