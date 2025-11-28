import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types/product";

type ProductsCarouselProps = {
  products: Product[];
};

export default function ProductsCarousel({
  products,
}: ProductsCarouselProps): React.JSX.Element {
  return (
    <div className="w-full max-w-screen">
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 py-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="snap-center shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] transition-all duration-300"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
