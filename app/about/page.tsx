export default function About() {
  return (
    <div>

      {/* PAGE HERO */}
      <section
        className="relative pt-40 pb-24 text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542884748-2b87b36c6b90?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
          <h1 className="font-script text-7xl drop-shadow-lg">About Us</h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">Our Mission</p>
            <h2 className="font-script text-5xl text-gray-900 mb-5 leading-tight">
              Dignity, Care & Compassion
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Grey Power was  founded on a simple belief: every senior deserves to live their golden years with
              dignity, joy, and genuine human connection. We exist to bridge the gap between isolation and community,
              between neglect and nurturing care.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Since 2015, we have served over 500 elderly individuals across New Zealand, supported by a
              passionate team of volunteers and professionals who truly believe in this mission.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800"
            className="rounded-2xl shadow-xl w-full object-cover h-80"
            alt="Caregiver with senior"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">What Drives Us</p>
          <h2 className="font-script text-5xl text-gray-900">Our Core Values</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: "💛", title: "Compassion", desc: "We lead with empathy and kindness in every interaction with the seniors we serve." },
            { icon: "🤲", title: "Respect", desc: "We honour the life experience and individuality of every person in our care." },
            { icon: "🌟", title: "Excellence", desc: "We hold ourselves to the highest standards of care, safety, and professionalism." },
          ].map((v) => (
            <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">The People Behind It</p>
          <h2 className="font-script text-5xl text-gray-900">Our Team</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { name: "Margaret Collins", role: "Founder & Director", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400" },
            { name: "Dr. James Howell", role: "Medical Coordinator", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400" },
            { name: "Sophie Turner", role: "Community Manager", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
          ].map((m) => (
            <div key={m.name}>
              <img
                src={m.img}
                className="w-28 h-28 rounded-full mx-auto object-cover shadow-md mb-4"
                alt={m.name}
              />
              <h3 className="font-bold text-lg">{m.name}</h3>
              <p className="text-blue-600 text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}