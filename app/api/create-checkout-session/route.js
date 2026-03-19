import Stripe from "stripe";

// ✅ Lazy init — runs at request time only, not during build
function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
  return new Stripe(key);
}

export async function POST(req) {
  try {
    const stripe = getStripe();
    const body = await req.json();
    const amount = body.amount;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "ElderCare Donation",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    return Response.json({ error: error.message });
  }
}