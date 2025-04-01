import { ProductCard } from "./components/card/product-card";
import { Navbar } from "./components/navigation/navigation-container";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 place-items-center gap-y-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
