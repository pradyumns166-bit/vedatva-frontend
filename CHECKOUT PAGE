import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const placeOrder = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer: form,
        products: cart
      })
    });

    const data = await res.json();
    alert("Order Placed Successfully!");
  };

  return (
    <div className="p-10 grid grid-cols-2 gap-10">

      {/* FORM */}
      <div>
        <h1 className="text-xl font-bold">Checkout</h1>

        <input placeholder="Name" className="border p-2 w-full mt-2"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input placeholder="Phone" className="border p-2 w-full mt-2"
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />

        <textarea placeholder="Address" className="border p-2 w-full mt-2"
          onChange={e => setForm({ ...form, address: e.target.value })}
        />

        <button
          onClick={placeOrder}
          className="bg-green-800 text-white px-4 py-2 mt-4"
        >
          Place Order
        </button>
      </div>

      {/* SUMMARY */}
      <div>
        <h2 className="font-bold">Order Summary</h2>

        {cart.map(p => (
          <p key={p._id}>{p.name} - ₹{p.price}</p>
        ))}
      </div>

    </div>
  );
}
