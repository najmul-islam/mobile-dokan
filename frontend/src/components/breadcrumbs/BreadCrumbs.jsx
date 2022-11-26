import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, NavLink } from "react-router-dom";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  console.log(breadcrumbs);
  return (
    <div>
      {breadcrumbs.map(({ match, breadcrumb }) =>
        match.pathname === "/" ? null : (
          <NavLink key={match.pathname} to={match.pathname}>
            {breadcrumb}
          </NavLink>
        )
      )}
    </div>
  );
};

export default BreadCrumbs;
