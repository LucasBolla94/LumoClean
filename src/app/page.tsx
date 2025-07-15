import Image from "next/image";
import About from "@/components/About";
import Services from "@/components/Services";
import Difference from "@/components/Difference";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-blue-50">
        <div className="container mx-auto max-w-7xl px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Logo prominently on the left */}
          <div className="flex-shrink-0 relative w-40 md:w-56 h-40 md:h-56 drop-shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/shield.png"
              alt="Lumo Clean Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 160px, 224px"
            />
          </div>

          {/* Hero text content on the right */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-700 leading-tight">
              Premium Cleaning Services in Glasgow
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              We deliver spotless results for homes and businesses with unmatched attention to detail.
              Trust <span className="font-semibold">Lumo Clean</span> for your Residential or Business cleaning needs.
            </p>
            <a
              href="#booking"
              className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <About />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-blue-50">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <Services />
        </div>
      </section>

      {/* ================= DIFFERENCE SECTION ================= */}
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <Difference />
        </div>
      </section>

      {/* ================= BOOKING FORM ================= */}
      <section id="booking" className="bg-blue-50">
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
            Book Your Cleaning Service
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Reserve your Residential or Business cleaning service in minutes. Fill out the form below and we’ll contact you to confirm.
          </p>

          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
