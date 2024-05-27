import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMyCartData from "../../../hooks/useMyCartData";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState("");
  const cartData = useMyCartData();
  const {user}=useAuth()
  const totalPrice = cartData.reduce(
    (total, menu) => menu?.price * menu?.quantity + total,
    0
  );
  useEffect(() => {
  axiosSecure.post("/create-payment-intent", {price: totalPrice})
  .then(res =>{
    console.log(res.data)
    setClientSecret(res.data.clientSecret)
  })
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "anonymous",
              email: user?.email || "anonymous",
            },
          },
        },
      );
      if (confirmError) {
        // Inform the customer that there was an error.
        console.log(error.message);
      } else {
        // Handle next step based on PaymentIntent's status.
        console.log(paymentIntent);
      }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex justify-center mt-5 items-center">
        <button
          className="btn btn-outline border-0 border-y-2 mt-5 "
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
