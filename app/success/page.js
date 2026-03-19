import Link from "next/link";

export default function Success() {
  return (
    <div>
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 px-6 max-w-xl">
          <div className="text-6xl mb-6">❤️</div>
          <h1 className="font-script text-7xl mb-4 drop-shadow-lg">Thank You!</h1>
          <p className="text-xl font-light mb-8">
            Your donation was successful. You've made a real difference in the life of a senior today.
          </p>
          <Link
            href="/"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
