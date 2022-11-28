import React from "react";
import ContentLoader from "react-content-loader";

const BrandSkeleton = () => {
  return (
    <>
      <ContentLoader height={250}>
        <rect x="0" y="20" width="170" height="200" />
        <rect x="0" y="225" width="100" height="15" />
      </ContentLoader>
    </>
  );
};

export default BrandSkeleton;
