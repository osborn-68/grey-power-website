import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ElderCare",
  description: "Bringing warmth, care, and dignity to the elderly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* NAV */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

            <span className="font-script text-3xl text-gray-900 italic">Grey Power</span>

            <div className="flex items-center gap-10 text-sm font-semibold text-gray-700">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
              <Link
                href="/donate"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition"
              >
                Donate
              </Link>
            </div>

          </div>
        </nav>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-12 px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

            <div>
              <span className="font-script text-3xl italic">Grey Power</span>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Bringing warmth, care, and dignity to the elderly since 2015.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-gray-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-gray-400">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>support@greypower.org</li>
                <li>+64 123 456 789</li>
                <li>Auckland, New Zealand</li>
              </ul>
            </div>

          </div>

          <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
            © 2026 Grey Power. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
