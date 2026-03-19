export default function Services() {
  return (
    <div>

      {/* PAGE HERO */}
      <section
        className="relative pt-40 pb-24 text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h1 className="font-script text-7xl drop-shadow-lg">Our Services</h1>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌿",
              title: "Daily Care",
              desc: "Our trained caregivers assist with everyday tasks — from meal preparation and personal hygiene to mobility support — helping seniors maintain independence with dignity.",
            },
            {
              icon: "🏥",
              title: "Medical Support",
              desc: "We coordinate regular health checkups, manage medications, and liaise with healthcare professionals to ensure each senior's health needs are met proactively.",
            },
            {
              icon: "🤝",
              title: "Community",
              desc: "Social isolation is a silent struggle. Our community programs bring seniors together through activities, events, and friendships that spark joy and belonging.",
            },
            {
              icon: "🧠",
              title: "Mental Wellness",
              desc: "From counselling sessions to mindfulness activities, we support the emotional and cognitive well-being of every individual in our care.",
            },
            {
              icon: "🚗",
              title: "Transportation",
              desc: "Reliable, friendly transportation for medical appointments, shopping trips, and community events — so seniors are never stuck at home.",
            },
            {
              icon: "🏡",
              title: "Home Visits",
              desc: "Can't come to us? We'll come to you. Our home visit program delivers care, companionship, and support directly to your doorstep.",
            },
          ].map((s) => (
            <div key={s.title} className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">Simple Process</p>
          <h2 className="font-script text-5xl text-gray-900">How It Works</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { step: "01", title: "Reach Out", desc: "Contact us by phone or email to discuss your needs." },
            { step: "02", title: "Assessment", desc: "We visit and understand the senior's unique situation and needs." },
            { step: "03", title: "Care Begins", desc: "A personalised care plan is created and services begin right away." },
          ].map((h) => (
            <div key={h.step}>
              <div className="text-5xl font-bold text-blue-100 mb-2">{h.step}</div>
              <h3 className="text-xl font-bold mb-2">{h.title}</h3>
              <p className="text-gray-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
