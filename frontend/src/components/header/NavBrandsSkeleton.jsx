import React from "react";
import { Nav } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const BrandBadgeSkeleton = () => {
  return (
    <Nav className="border-bottom">
      <ContentLoader
        speed={2}
        width="100%"
        height="40px"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="108" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="216" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="324" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="432" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="540" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="648" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="756" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="864" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="972" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="1080" y="10" rx="10" ry="10" width="100" height="20" />
        <rect x="1188" y="10" rx="10" ry="10" width="100" height="20" />
      </ContentLoader>
    </Nav>
  );
};

export default BrandBadgeSkeleton;
