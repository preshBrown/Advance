import React from "react";
import { Link, Outlet, useLocation, NavLink, Navigate } from "react-router-dom";
import classes from "./Products.module.css";

export const ProdItems = (props) => (
  <div>
    <ul>
      <li>
        <Link to="/products/P1">P1</Link>
      </li>
      <li>
        <Link to="/products/P2">P2</Link>
      </li>
      <li>
        <Link to="/products/P3">P3</Link>
      </li>
      <li>
        <Link to="/products/P4">P4</Link>
      </li>
    </ul>
  </div>
);

const Products = (props) => {
  const location = useLocation();

  for (let key in location) {
    console.log(`${key}: ${location[key]}`);
  }
  const zipCode = "20566";
  const locationInfo = "No14, Block-6, Port-Harcourt";
  const contextData = {
    profile: "Psychopath",
    address: [zipCode, locationInfo],
  };

  return (
    <React.Fragment>
      {(location.pathname === `/products` ||
        location.pathname === `/products/`) && <Navigate to="prod-items" />}
      <div>Products</div>
      {location.pathname === `/products` && <p>STILL ON PAGE</p>}
      <Link to="prod-items">Open Products Items</Link>
      <div>
        <ul className={classes.ProdItems}>
          <li className={classes.ProdItem}>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.ProdActive : ""
              }
              to="prod-items"
            >
              ProdItems
            </NavLink>
          </li>
          <li className={classes.ProdItem}>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.ProdActive : ""
              }
              to="info"
            >
              INFO
            </NavLink>
          </li>
          <li className={classes.ProdItem}>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.ProdActive : ""
              }
              to="line-up"
            >
              LINE-UP
            </NavLink>
          </li>
          <li className={classes.ProdItem}>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.ProdActive : ""
              }
              to="news"
            >
              NEWS
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet context={contextData} />
      {/* <Routes>
      <Route path="prod-items" element={<p>LOADED</p>} />
    </Routes> */}
    </React.Fragment>
  );
};

export default Products;
