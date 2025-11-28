import { useState, createContext, useEffect, useMemo } from "react";
import { CartItem } from "../types/cartItem";
import { Product } from "../types/product";

type CartContextType = {
  items: CartItem[];
  cartOpen: boolean;
  clearCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  increaseQty: (product: Product) => void;
  decreaseQty: (product: Product) => void;
  toggleCart: () => void;
  itemPrice: (item: CartItem) => number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType>({
  items: [],
  cartOpen: false,
  clearCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  toggleCart: () => {},
  totalPrice: 0,
  itemPrice: () => 0,
});

export const DISCOUNT_FROM = 5;
export const DISCOUNT_COEFFICIENT = 0.9;

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("cartridge.cart") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartridge.cart", JSON.stringify(cart));
  }, [cart]);

  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const clearCart = () => setCart([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [
      ...prev,
      {
        product: product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product: Product) => {
    setCart((prev) => prev.filter((item) => item.product.id !== product.id));
  };
  
  const increaseQty = (product: Product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQty = (product: Product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const itemPrice = (item: CartItem) => {
    return item.quantity > DISCOUNT_FROM
      ? item.product.price * DISCOUNT_COEFFICIENT
      : item.product.price;
  };

  const totalPrice = useMemo(() => {
    return cart.reduce((sum: number, item: CartItem) => {
      return sum + (item.quantity > DISCOUNT_FROM
          ? item.product.price * item.quantity * DISCOUNT_COEFFICIENT
          : item.product.price * item.quantity);
      }, 0);
  }, [cart]);

  const toggleCart = () => {
    console.log("Toggling cart", cartOpen);
    setCartOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        items: cart,
        cartOpen,
        clearCart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        toggleCart,
        totalPrice,
        itemPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
