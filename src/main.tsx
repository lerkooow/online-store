import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./component/pages/App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./component/pages/Products";
import ProductItemPage from "./component/pages/ProductItemPage";
import UserCartPage from "./component/pages/UserCartPage";
import UserAccountPage from "./component/pages/UserAccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:category",
    element: <Products />,
  },
  {
    path: "/:category/:id",
    element: <ProductItemPage />,
  },
  {
    path: "/user",
    element: <UserAccountPage />,
  },
  {
    path: "/cart",
    element: <UserCartPage />,
  },
]);

const rootElement = document.getElementById("root");

rootElement &&
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </React.StrictMode>
  );
