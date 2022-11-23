import React, { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";
const Blog = lazy(() => import("../pages/BlogPage"));

const BlogRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Blog />
    </Suspense>
  );
};

export default BlogRoute;
