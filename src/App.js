import React from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Welcome from "./pages/Welcomes";
import Products, { ProdItems } from "./pages/Products";

import "./App.css";
import Layout from "./pages/Layout";
import ProductDetails from "./pages/ProductDetails";
import Info, { loader as informationData } from "./pages/Info";
import LineUp from "./pages/LineUp";
import News from "./pages/News";
import ErrorPage from "./pages/ErrorPage";
import HttpError from "./hooks/HttpError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Welcome />} />
      <Route path="/products" element={<Products />}>
        <Route path="prod-items" element={<ProdItems />} />
        <Route
          path="info"
          element={<Info />}
          loader={informationData}
          errorElement={<HttpError />}
        />
        <Route path="line-up" element={<LineUp />} />
        <Route path="news" element={<News />} />
      </Route>
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;

//  return <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Welcome />} />
//       <Route path="/products" element={<Products />}>
//         <Route path="prod-items" element={<ProdItems />} />
//         <Route path="info" element={<Info />} />
//         <Route path="line-up" element={<LineUp />} />
//         <Route path="news" element={<News />} />
//       </Route>
//       <Route path="/products/:id" element={<ProductDetails />} />
//       <Route path="*" element={<ErrorPage />} />
//     </Route>
//   </Routes>;
}

export default App;
