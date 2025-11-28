import { CartItem } from "../types/cartItem";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function QtyField({ item }: { item: CartItem }) {
  const cart = useContext(CartContext);
  return (
    <div className="border border-gray-300 flex items-center">
      <button
        className="size-8 text-lg border-r cursor-pointer"
        onClick={() => cart?.decreaseQty(item.product)}
      >
        -
      </button>
      <input
        className="size-8 text-lg text-center"
        type="text"
        readOnly
        value={item.quantity}
      />
      <button
        className="size-8 text-lg border-l cursor-pointer"
        onClick={() => cart?.increaseQty(item.product)}
      >
        +
      </button>
    </div>
  );
}
