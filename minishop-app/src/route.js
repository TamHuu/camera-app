import { ROUTES } from "./utils/route";
import MasterLayout from "./components/MasterLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const renderRoute = () => {
  const userRouters = [
    {
      path: ROUTES.USER.HOME,
      component: <Home />,
    },
    {
      path: ROUTES.USER.PROFILE,
      component: <Product />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((route, key) => (
          <Route key={key} path={route.path} element={route.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
export const CustomRouter = () => {
  return renderRoute();
};
