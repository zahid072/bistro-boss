
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

const useMyCartData = () => {
  const { user, refetch, setRefetch } = useAuth();
  const [cartData, setCartData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const email = user?.email;

  useEffect(() => {
    axiosSecure.get(`/myCart?email=${email}`).then((res) => {
      setCartData(res.data);
      setRefetch(false);
    });
  }, [refetch, email]);
  return  cartData 
};

export default useMyCartData;
