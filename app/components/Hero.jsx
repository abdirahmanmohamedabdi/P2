import Image from "next/image";

export default function Heroe() {
  return (
    <div className="bg-white">
    {/* Hero Section */}
    <div className="relative w-full h-[60vh] md:h-[80vh]"> {/* Adjust height for different screen sizes */}
      <img
        src="/class.jpg" 
        alt="Mustaqbal Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-80"></div> {/* Increased opacity */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-font font-bold mb-4"> {/* Adjust text size for different screen sizes */}
            Mustaqbal Initiative
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-lg md:text-2xl font-font text-four sm:max-w-3xl"> {/* Adjust text size for different screen sizes */}
            Mustaqbal Initiative is a non-governmental organization based in Nairobi, Kenya, committed to empowering marginalized communities through digital literacy and skills training. Our focus is on bridging the digital divide and providing access to technology and education for underserved populations in Nairobi and North Eastern Kenya, enabling them to thrive in the digital age.
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
