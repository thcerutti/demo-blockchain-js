import { Home } from "./pages/Home";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { PropertyNegotiation } from "./molecules/PropertyNegotiation";
import { TransferFunds } from "./molecules/TransferFunds";
import { BaseTemplate } from "./pages/BaseTemplate";

const defaultErrorPage = <ErrorPage />;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: defaultErrorPage,
  },
  {
    path: "/property-negotiation",
    element: (
      <BaseTemplate>
        <PropertyNegotiation />
      </BaseTemplate>
    ),
    errorElement: defaultErrorPage,
  },
  {
    path: "/transfer-funds",
    element: (
      <BaseTemplate>
        <TransferFunds />
      </BaseTemplate>
    ),
    errorElement: defaultErrorPage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
