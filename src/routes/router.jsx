import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import MenuDetails from "../pages/menuDetails/MenuDetails";
import DashboardHome from "../dashboard/dashboardHome/DashboardHome";
import UserHome from "../dashboard/user/userHome/UserHome";
import AdminHome from "../dashboard/Admin/adminHome/AdminHome";
import Reservation from "../dashboard/user/reservation/Reservation";
import MyBooking from "../dashboard/user/myBooking/MyBooking";
import AddItem from "../dashboard/Admin/addItem/AddItem";
import PaymentHistory from "../dashboard/user/paymentHistory/PaymentHistory";
import MyCart from "../dashboard/user/myCart/MyCart";

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
    path: "/dashboard",
    element: <DashboardHome />,
    children: [
      // ----------------------------------user routes----------------------------------
      {
        path: "/dashboard/userHome",
        element: <UserHome />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/myCart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/myBooking",
        element: <MyBooking />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation />,
      },
      // -------------------------------admin routes-------------------------------
      {
        path: "/dashboard/adminHome",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/addItem",
        element: <AddItem />,
      },
      {
        path: "/dashboard/manageItem",
        element: <AddItem />,
      },
      {
        path: "/dashboard/manageBooking",
        element: <AddItem />,
      },
      {
        path: "/dashboard/allUser",
        element: <AddItem />,
      },
    ],
  },
]);
export default router;
