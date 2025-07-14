/**
 * Difference.tsx
 *
 * This section highlights the key differentiators of Lumo Clean.
 * Clearly explains why customers should choose Lumo Clean over competitors.
 * The text is written to emphasize premium service, quality, and customer focus.
 *
 * Responsive, semantic, and easy to maintain for future developers.
 */

export default function Difference() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Why Choose Lumo Clean?
        </h2>

        {/* Introductory paragraph */}
        <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl mx-auto">
          At <span className="font-semibold">Lumo Clean</span>, we set the standard for premium cleaning services in Glasgow, Edinburgh, and surrounding areas — with a meticulous approach, unmatched attention to detail, and a dedication to excellence that goes beyond a simple clean.
        </p>

        {/* Differences grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Difference 1 */}
          <div className="bg-blue-50 rounded shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700">
              Premium Quality
            </h3>
            <p className="mt-2 text-gray-700">
              Every service we provide is carried out to the highest professional standard — ensuring spotless results and a clean you can truly feel.
            </p>
          </div>

          {/* Difference 2 */}
          <div className="bg-blue-50 rounded shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700">
              Detail-Oriented Approach
            </h3>
            <p className="mt-2 text-gray-700">
              We don’t just clean what’s visible — we go the extra mile, paying attention to the smallest details that others might miss.
            </p>
          </div>

          {/* Difference 3 */}
          <div className="bg-blue-50 rounded shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700">
              Customer-Focused Service
            </h3>
            <p className="mt-2 text-gray-700">
              Our punctual, friendly, and transparent team ensures you’re informed every step of the way — because your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
