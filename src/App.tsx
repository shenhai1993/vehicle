import { Suspense } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import routes from "~react-pages";
import { RootLayout, ErrorPage } from "./common";

const Routes = () => {
  const router = [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ];

  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(router)}</Suspense>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
