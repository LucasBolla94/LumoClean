import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Image src="/shield.png" alt="Lumo Clean Logo" width={40} height={40} />
          <span className="text-lg font-bold text-blue-600">Lumo Clean</span>
        </div>
      </div>
    </header>
  );
}
