import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-xl shadow">

      <img src={product.images?.[0]} className="h-40 w-full object-cover rounded" />

      <h3 className="font-bold mt-2">{product.name}</h3>
      <p className="text-green-700">₹{product.price}</p>

      <div className="flex gap-2 mt-3">
        <Link href={`/product/${product._id}`}>
          <button className="px-3 py-1 border">View</button>
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="bg-green-800 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

    </div>
  );
}
