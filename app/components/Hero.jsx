import Image from "next/image";

export default function Heroe() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]"> {/* Set a fixed height */}
        <img
          src="https://i.ibb.co/HgCdmF5/class.jpg" 
          alt="Mustaqbal Hero"
          className="w-full h-full object-cover" // Updated class
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-font font-bold mb-4">
              Mustaqbal Initiative
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-four sm:max-w-3xl">
            Mustaqbal Initiative is a non-governmental organization based in Nairobi, Kenya, committed to empowering marginalized communities through digital literacy and skills training. Our focus is on bridging the digital divide and providing access to technology and education for underserved populations in Nairobi and North Eastern Kenya, enabling them to thrive in the digital age
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
    

      {/* Our Story Section */}
      {/* ... */}

      {/* Social Media / Follow Section */}
      {/* ... */}

    </div>
  );
}
