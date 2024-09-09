import Image from "next/image";

export default function Heroe() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Menu</a>
          <a href="#" className="text-gray-700">Contact</a>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700">Login</a>
          <a href="#" className="text-gray-700">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
