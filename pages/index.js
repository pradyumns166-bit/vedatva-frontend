import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="bg-green-900 text-white text-center p-20">
        <h1 className="text-4xl font-bold">Vedatva Ayurveda</h1>
        <p className="mt-3">Pure Herbal Healing for Skin, Hair & Body</p>
      </section>

      {/* PRODUCTS */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

        <div className="grid grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
