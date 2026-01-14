import Address from "components/shopping-view/address";
import img from "../../assets/banner5.jpg";
import { useDispatch, useSelector } from "react-redux";
import UserCartItemsContent from "components/shopping-view/cart-items-content";
import { Button } from "components/ui/button";
import { toast } from "sonner";

import { useState } from "react";
import { createNewOrder } from "@/store/shop/order-slice";
function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { approvalURL } = useSelector((state) => state.shopOrder);
  console.log(cartItems, "cartItem");
  type AddressType = {
    _id: string;
    address: string;
    city: string;
    pincode: string;
    phone: string;
    notes?: string;
  };
  const [currentSelectedAddress, setCurrentSelectedAddress] =
    useState<AddressType | null>(null);

  const dispatch = useDispatch();

  const totalCartAmount =
    cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  function handleInitiatePaypalPayment() {
    if (cartItems.items.length === 0) {
      toast.error("Your cart is empty, Please add items to proceed");
      return;
    }
    if (currentSelectedAddress === null) {
      toast.error("pkease select one addresss to proceed");
      return;
    }
    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((item) => ({
        productId: item?.productId,
        title: item?.title,
        image: item?.image,
        price: item?.salePrice > 0 ? item?.salePrice : item?.price,
        quantity: item?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
    };

    console.log(orderData, "orderData");

    dispatch(createNewOrder(orderData)).then((data) => {
      console.log(data, "prince");
    });
  }

  if (approvalURL) {
    window.location.href = approvalURL;
  }

  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover object-center" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address setCurrentSelectedAddress={setCurrentSelectedAddress} />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent key={item.id} cartItem={item} />
              ))
            : null}
          <div className="mt-8 space-y-4 ">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">$500</span>
            </div>
            <div className="mt-4 w-full">
              <Button onClick={handleInitiatePaypalPayment} className="w-full">
                Checkout with Paypal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
