import { capturePayment } from "@/store/shop/order-slice";
import { Card, CardHeader, CardTitle } from "components/ui/card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

function PaypalReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerID");
  console.log("paymentId", paymentId);
  console.log("PayerID", payerId);

  useEffect(() => {
    if (paymentId && payerId) {
      const storedOrderId = sessionStorage.getItem("currentOrderId");
      if (!storedOrderId) {
        return;
      }
      const orderId: string = JSON.parse(storedOrderId);
      dispatch(capturePayment({ paymentId, payerId, orderId })).then((data) => {
        if (data?.payload?.success) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/shop/payment-success";
        }
      });
    }
  }, [paymentId, payerId, dispatch]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing Payment...Please wait</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PaypalReturnPage;
