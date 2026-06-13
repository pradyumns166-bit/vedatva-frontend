import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between p-4 bg-white shadow">

      <h1 className="font-bold text-green-800">Vedatva</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Shop</Link>
        <Link href="/cart">
          Cart ({cart.length})
        </Link>
      </div>

    </nav>
  );
}
