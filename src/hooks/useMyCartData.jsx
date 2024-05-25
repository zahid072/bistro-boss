
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

const useMyCartData = () => {
  const { user, refetch, setRefetch } = useAuth();
  const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const email = user?.email;

  useEffect(() => {
    axiosSecure.get(`/myCart?email=${email}`).then((res) => {
      setData(res.data);
      setRefetch(false);
    });
  }, [refetch, email]);
  return  data 
};

export default useMyCartData;
