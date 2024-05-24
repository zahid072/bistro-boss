import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import MenuDetails from "../pages/menuDetails/MenuDetails";
import DashboardHome from "../dashboard/dashboardHome/DashboardHome";
import UserHome from "../dashboard/dashboardPages/userHome/UserHome";
import AdminHome from "../dashboard/dashboardPages/adminHome/AdminHome";
import Reservation from "../dashboard/dashboardPages/reservation/Reservation";

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
        path: "/ourShop/:id",
        element: <OurShop />,
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
  {
    path:"/dashboard",
    element:<DashboardHome/>,
    children:[
      // user routes
      {
        path:"/dashboard/userHome",
        element:<UserHome/>
      },
      {
        path:"/dashboard/reservation",
        element:<Reservation/>
      },
      // admin routes
      {
        path:"/dashboard/adminHome",
        element:<AdminHome/>
      },
    ]
  }
]);
export default router;
