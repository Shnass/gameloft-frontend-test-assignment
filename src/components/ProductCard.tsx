import { Product } from "../types/product";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import QtyField from "./QtyField";
import Button from "./Button";
type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps): React.JSX.Element {
  const cart = useContext(CartContext);
  const cartItem = cart.items.find((item) => item.product.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <figure className="bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
      </figure>
      <div className="p-4 min-w-0">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        <div className="flex justify-between items-center min-h-[40px]">
          <p className="text-blue-600 font-bold">${product.price}</p>
          {cartItem ? (
            <QtyField item={cartItem} />
          ) : (
            <Button
              className="bg-black hover:bg-gray-700"
              onClick={() => cart.addToCart(product)}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
