import CartContext from "../context/CartContext";
import { useContext } from "react";
import Button from "./Button";

export default function CartToggle() {
  const cart = useContext(CartContext);
  return (
    <div className="absolute right-0 top-0">
      <Button onClick={() => cart.toggleCart()}>
        Cart ({cart.items.length})
      </Button>
    </div>
  );
}
