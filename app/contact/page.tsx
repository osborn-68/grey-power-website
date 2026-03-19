"use client";

export default function Contact() {
  return (
    <div>

      {/* PAGE HERO */}
      <section
        className="relative pt-40 pb-24 text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
          <h1 className="font-script text-7xl drop-shadow-lg">Contact Us</h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          {/* Info */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">Reach Us</p>
            <h2 className="font-script text-5xl text-gray-900 mb-6">We'd Love to Hear From You</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Whether you're looking for care for a loved one, want to volunteer, or would like to make a donation,
              our team is here to help. Don't hesitate to get in touch.
            </p>
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <span>support@eldercare.org</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span>+64 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span>Auckland, New Zealand</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🕐</span>
                <span>Mon – Fri, 9am – 5pm</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-xl mb-6">Send Us a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
