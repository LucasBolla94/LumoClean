/**
 * Services.tsx
 *
 * This section showcases the premium services offered by Lumo Clean.
 * Clear layout with modern UX, easy for customers to understand and navigate.
 * Fully responsive, semantic, and easy to maintain for future developers.
 */

export default function Services() {
  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Our Premium Services
        </h2>

        {/* Introductory text */}
        <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl mx-auto">
          At <span className="font-semibold">Lumo Clean</span>, we offer high-level cleaning services for both homes and businesses. Our dedicated team delivers spotless, detail-oriented results — whether you choose our standard or deep cleaning options.
        </p>

        {/* Services grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* Residential Cleaning */}
          <div className="bg-white rounded shadow-md p-6 hover:shadow-lg transition duration-300 text-left">
            <h3 className="text-xl font-semibold text-blue-600">
              Residential Cleaning
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Give your home the care it deserves with our premium <strong>Standard</strong> or <strong>Deep Cleaning</strong> services. Every room, surface, and corner is cleaned with precision and care — so you can enjoy a spotless, fresh living space.
            </p>
            <ul className="mt-4 text-gray-600 text-sm list-disc list-inside">
              <li>Customizable to your needs</li>
              <li>One-time or regular service</li>
              <li>Eco-friendly products available</li>
            </ul>
          </div>

          {/* Business Cleaning */}
          <div className="bg-white rounded shadow-md p-6 hover:shadow-lg transition duration-300 text-left">
            <h3 className="text-xl font-semibold text-blue-600">
              Business & Office Cleaning
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Impress your clients and create a healthy workspace with our professional-grade cleaning for offices, shops, and commercial spaces. Cleanliness reflects your business — and we make sure it shines.
            </p>
            <ul className="mt-4 text-gray-600 text-sm list-disc list-inside">
              <li>Flexible schedules to suit your hours</li>
              <li>Discreet & professional staff</li>
              <li>Deep cleaning available for high-traffic areas</li>
            </ul>
          </div>
        </div>

        {/* Closing message */}
        <div className="mt-10">
          <p className="text-lg text-blue-700 font-medium">
            Whatever your space — we clean it to perfection.
          </p>
        </div>
      </div>
    </section>
  );
}
