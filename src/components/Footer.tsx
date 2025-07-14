export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-auto">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">Lumo Clean</span>. All rights reserved.
        <span className="ml-1">
          Made by{" "}
          <a
            href="https://bolla.network"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline underline-offset-4 hover:text-blue-200 transition-colors duration-200"
          >
            Bolla Network
          </a>
        </span>
      </div>
    </footer>
  );
}
