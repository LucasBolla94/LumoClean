import About from "@/components/About";
import Services from "@/components/Services";
import Difference from "@/components/Difference";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Hero section with blue background and larger logo */}
      <section className="bg-blue-50 relative">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          {/* Lumo Clean logo prominently displayed */}
          <img
            src="/shield.png"
            alt="Lumo Clean Logo"
            className="w-32 md:w-48 drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mt-6">
            Professional Cleaning Services in Glasgow
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            We deliver spotless results for homes and businesses with unmatched attention to detail. Trust Lumo Clean for your Residential or Business cleaning needs.
          </p>
        </div>
      </section>

      {/* About section - who we are */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <About />
        </div>
      </section>

      {/* Services section - what we offer */}
      <section className="bg-blue-50">
        <div className="container mx-auto px-4 py-8">
          <Services />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <Difference />
        </div>
      </section>

      {/* Booking form */}
      <section className="bg-blue-50">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
            Book Your Cleaning Service
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Easily reserve your Residential or Business cleaning service with just a few clicks. Fill out the form below and our team will contact you to confirm.
          </p>

          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
