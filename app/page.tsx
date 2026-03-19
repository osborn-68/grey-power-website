import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO — full screen with background image */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="font-script text-7xl md:text-8xl leading-none mb-4 drop-shadow-lg">
            Caring for Our Seniors
          </h1>
          <p className="text-xl font-light tracking-wide mb-10 drop-shadow">
            Bringing warmth, care, and dignity to the elderly.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-base hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
            <Link
              href="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h2 className="text-5xl font-bold text-blue-600">500+</h2>
            <p className="mt-2 text-gray-600 text-lg">Elderly Supported</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-blue-600">120+</h2>
            <p className="mt-2 text-gray-600 text-lg">Active Volunteers</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-blue-600">10+</h2>
            <p className="mt-2 text-gray-600 text-lg">Years of Service</p>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800"
            className="rounded-2xl shadow-xl w-full object-cover h-80"
            alt="Elderly care"
          />
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
            <h2 className="font-script text-5xl text-gray-900 mb-5 leading-tight">
              A Community That Cares
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At ElderCare, we believe that every elderly individual deserves respect, care, and companionship.
              Our programs are designed to ensure they live with dignity, comfort, and joy — surrounded by
              people who truly care.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 bg-blue-600 text-white px-7 py-3 rounded-full font-bold hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h2 className="font-script text-5xl text-gray-900">Our Services</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Daily Care", desc: "Compassionate assistance with everyday activities, from meals to mobility, ensuring comfort and independence.", icon: "🌿" },
            { title: "Medical Support", desc: "Regular health checkups, medication management, and coordination with healthcare professionals.", icon: "🏥" },
            { title: "Community", desc: "Social events, group activities, and emotional support to keep seniors connected and joyful.", icon: "🤝" },
          ].map((s) => (
            <div key={s.title} className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="relative py-24 px-6 text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-script text-6xl mb-4">Make a Difference Today</h2>
          <p className="text-lg font-light mb-8">
            Your generosity helps us provide comfort and care to hundreds of seniors every year.
          </p>
          <Link
            href="/donate"
            className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
          >
            Donate Now
          </Link>
        </div>
      </section>

    </div>
  );
}
