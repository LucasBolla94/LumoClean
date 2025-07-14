export default function About() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          About Lumo Clean
        </h2>

        {/* Subtítulo */}
        <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Delivering cleaning excellence for homes and businesses across Glasgow, Edinburgh, and beyond — with punctuality, transparency, and unmatched quality.
        </p>

        {/* Boxes de diferenciais */}
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Box 1 */}
          <div className="bg-blue-50 rounded shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700">
              Excellence in Every Corner
            </h3>
            <p className="mt-2 text-gray-700">
              Whether it’s <strong>Standard</strong> or <strong>Deep Cleaning</strong>, our team ensures every detail shines to perfection — so you can feel proud of your space.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-blue-50 rounded shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700">
              Trained & Trusted Team
            </h3>
            <p className="mt-2 text-gray-700">
              Our cleaners are <strong>internally trained</strong> to deliver the highest standards, with reliability and respect for your home or business at all times.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-blue-50 rounded shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700">
              Punctual & Transparent
            </h3>
            <p className="mt-2 text-gray-700">
              We arrive <strong>on time</strong> and keep you updated <strong>live</strong> throughout the service — so you’re always in the loop, worry-free.
            </p>
          </div>
        </div>

        {/* Slogan */}
        <div className="mt-10">
          <p className="text-xl md:text-2xl font-bold text-blue-600">
            We clean — you enjoy. Simple as that.
          </p>
        </div>
      </div>
    </section>
  );
}
