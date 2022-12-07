import React from "react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <p className="text-center py-3">
      * Some prices may not be up to date according to today's latest price.{" "}
      <Link to="/disclaimer">Learn more</Link>
    </p>
  );
};

export default LearnMore;
