import CartToggle from "./CartToggle";
import Cart from "./Cart";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Header() {
  const cart = useContext(CartContext);

  return (
    <header className="flex md:justify-center items-center relative my-6 min-h-[40px]">
      <h1 className="text-2xl md:text-4xl font-bold">
        Cartridge
        <span className="text-purple-600">Paradise</span>
      </h1>
      <CartToggle />
      {cart.cartOpen ? <Cart /> : null}
    </header>
  );
}
