import { DialogContent } from "components/ui/dialog";
import { Label } from "components/ui/label";
import { Separator } from "components/ui/separator";

function ShoppingOrderDetailsView() {
  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex mt-6 item-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>12345</Label>
          </div>
          <div className="flex mt-2 item-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label>16/11/25</Label>
          </div>
          <div className="flex mt-2 item-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>1000</Label>
          </div>
          <div className="flex mt-2 item-center justify-between">
            <p className="font-medium">Payment method</p>
            <Label>Paypal</Label>
          </div>
          <div className="flex mt-2 item-center justify-between">
            <p className="font-medium">Payment Status</p>
            <Label>pending</Label>
          </div>
          <div className="flex mt-2 item-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>pending</Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>Shubham G</span>
              <span>Address</span>
              <span>City</span>
              <span>pincode</span>
              <span>phone</span>
              <span>notes</span>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
export default ShoppingOrderDetailsView;
