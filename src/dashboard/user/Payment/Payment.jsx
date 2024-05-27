import { Elements } from "@stripe/react-stripe-js";
import useMyCartData from "../../../hooks/useMyCartData";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_KEY);

const Payment = () => {
  const cartData = useMyCartData();
  const totalPrice = cartData.reduce(
    (total, menu) => menu?.price * menu?.quantity + total,
    0
  );

  return (
    <div>
      <h1 className="text-center text-xl font-semibold font-gilda">
        Payment method
      </h1>
      <div className="divider divide-x-2"></div>
      <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
