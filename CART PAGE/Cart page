import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold">Cart</h1>

      {cart.map(item => (
        <div key={item._id} className="flex justify-between border p-3 mt-3">
          <p>{item.name}</p>
          <p>₹{item.price}</p>

          <button onClick={() => removeFromCart(item._id)}>
            Remove
          </button>
        </div>
      ))}

      <h2 className="mt-5 font-bold">Total: ₹{total}</h2>

      <Link href="/checkout">
        <button className="mt-4 bg-green-800 text-white px-4 py-2">
          Checkout
        </button>
      </Link>

    </div>
  );
}
