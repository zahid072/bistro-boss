import AdminHome from "../dashboard/Admin/adminHome/AdminHome";
import UserHome from "../dashboard/user/userHome/UserHome";
import useAuth from "../hooks/useAuth";

const AdminRouter = () => {
  const { admin } = useAuth();

  if (admin) {
    return <AdminHome />;
  }
  if (!admin) {
    return <UserHome />;
  }
};

export default AdminRouter;
