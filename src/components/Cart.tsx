import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartProduct from "./CartProduct";

export default function Cart() {
  const cart = useContext(CartContext);
  return (
    <div className="absolute right-0 top-[40px] bg-white border border-gray-300 p-4 w-full max-w-120 shadow-lg max-h-96 overflow-y-auto">
      {cart?.items.length ? (
        <div>
          <ul>
            {cart.items.map((item) => (
              <li key={item.product.id}>
                <CartProduct item={item} />
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <b>Total: </b>
            <b>${cart.totalPrice.toFixed(2)}</b>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
