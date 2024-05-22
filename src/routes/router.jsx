import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import MenuDetails from "../pages/menuDetails/MenuDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <OurMenu />,
      },
      {
        path: "/ourShop",
        element: <OurShop />,
      },
      {
        path: "/menuDetails/:id",
        element: <MenuDetails />,
      },
    ],
  },
]);
export default router;
