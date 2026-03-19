"use client";

import { useState } from "react";

export default function Donate() {
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");

  const handlePayment = async () => {
    const finalAmount = custom ? Number(custom) : amount;
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ amount: finalAmount }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Error: " + data.error);
    }
  };

  const displayAmount = custom ? Number(custom) : amount;

  return (
    <div>

      {/* PAGE HERO */}
      <section
        className="relative pt-40 pb-24 text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10">
          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Make a Difference</p>
          <h1 className="font-script text-7xl drop-shadow-lg">Support Our Mission</h1>
          <p className="mt-4 text-lg font-light max-w-xl mx-auto">
            Your generosity changes lives. Every dollar brings warmth, care, and dignity to a senior who needs it.
          </p>
        </div>
      </section>

      {/* DONATE CARD */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-10">

          <h2 className="font-script text-4xl text-center text-gray-900 mb-2">Choose an Amount</h2>
          <p className="text-center text-gray-500 text-sm mb-8">100% of your donation goes directly to senior care programs.</p>

          {/* Preset Amounts */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[10, 25, 50, 100].map((val) => (
              <button
                key={val}
                onClick={() => { setAmount(val); setCustom(""); }}
                className={`py-3 rounded-full font-bold text-sm transition ${
                  amount === val && !custom
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:border-blue-400"
                }`}
              >
                ${val}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <input
              type="number"
              placeholder="Enter custom amount ($)"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Donate Button */}
          <button
            onClick={handlePayment}
            className="w-full py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition"
          >
            Donate ${displayAmount || "–"}
          </button>

          <p className="text-center text-gray-400 text-xs mt-4">🔒 Secure payment powered by Stripe</p>
        </div>
      </section>

      {/* IMPACT ROW */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { amount: "$10", impact: "Provides a warm meal for 5 seniors" },
            { amount: "$50", impact: "Funds a week of daily check-in calls" },
            { amount: "$100", impact: "Supports a full medical consultation" },
          ].map((i) => (
            <div key={i.amount} className="border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">{i.amount}</div>
              <p className="text-gray-600 text-sm">{i.impact}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
