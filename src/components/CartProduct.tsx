import { useContext } from "react";
import { CartItem } from "../types/cartItem";
import CartContext from "../context/CartContext";
import QtyField from "./QtyField";

export default function CartProduct({ item }: { item: CartItem }) {
  const cart = useContext(CartContext);

  return (
    <div className="border-b border-dashed border-gray-900 mb-4 pb-4 flex gap-2">
      <figure>
        <img
          className="object-contain"
          width={100}
          height={100}
          src={item.product.image}
          alt={item.product.title}
        />
      </figure>
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex justify-between">
          <b>{item.product.title}</b>
          <b className="text-blue-600">${cart.itemPrice(item).toFixed(2)}</b>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <button
            className="cursor-pointer text-red-600 hover:text-red-800"
            onClick={() => cart?.removeFromCart(item.product)}
          >
            Remove
          </button>
          <QtyField item={item} />
        </div>
      </div>
    </div>
  );
}
