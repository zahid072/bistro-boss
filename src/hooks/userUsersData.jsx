import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const userUsersData = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data = [] } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const users = await axiosSecure.get("/allUsers");
      return users.data;
    },
  });
  return [data, refetch];
};

export default userUsersData;
