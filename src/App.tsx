import "./App.css";

import { productsData } from "./data/products";
import { CartProvider } from "./context/CartContext";
import ProductsCarousel from "./components/ProductsCarousel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col min-h-screen">
        <Header />
        <ProductsCarousel products={productsData} />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
