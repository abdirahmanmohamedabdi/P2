import Image from "next/image";

export default function OurHistory() {
  const milestones = [
   
    {
      year: "2024",
      title: "Expanding Our Reach",
      description:
        "As Mustaqbal’s impact grew, so did its reach. By 2024, the organization had launched advocacy campaigns for gender equality and youth leadership programs. These initiatives focused on addressing social justice, economic empowerment, and community-driven solutions.",
      imageSrc: "/0.jpg", // Replace with relevant image
    },
  ];

  return (
    <div className="bg-gray-100 py-16 sm:py-24 lg:py-32">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold font-font text-blue-900 mb-4">Our History</h1>
        <p className="mt-4 text-lg font-font text-gray-600">
          Mustaqbal was founded to address the growing digital and economic inequalities faced by women and youth in marginalized communities. Our story is one of hope, empowerment, and progress.
        </p>
      </div>

      {/* Why Mustaqbal Was Founded */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-4xl font-extrabold font-font text-blue-900 mb-4 text-center">Why Mustaqbal Was Founded</h2>
          <p className="text-lg font-font text-gray-600 mb-6">
            Mustaqbal was created to bridge the gap in access to education, technology, and leadership opportunities for women and youth in marginalized communities, particularly in the North Eastern regions of Kenya. In these areas, individuals face significant barriers to entering the workforce and accessing education, limiting their ability to thrive in a rapidly changing world.
          </p>
          <p className="text-lg font-font text-gray-600">
            The organization was born out of a deep commitment to ensuring that everyone, regardless of their background, has the tools, resources, and opportunities to build a better future. Mustaqbal seeks to break the cycle of poverty and inequality by providing education, leadership training, and advocacy initiatives that focus on systemic change.
          </p>
        </div>
      </div>

      {/* Timeline of Milestones */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center">
              <div className="relative w-full h-64 lg:w-1/2 lg:h-80 mb-6 lg:mb-0 lg:mr-8">
                <Image
                  src={milestone.imageSrc}
                  alt={milestone.year}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-4xl font-extrabold font-font text-blue-900 mb-2">{milestone.year}</h3>
                <h4 className="text-2xl font-semibold font-font text-gray-700 mb-4">{milestone.title}</h4>
                <p className="text-lg font-font text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 py-12 mt-16 text-white text-center">
        <h3 className="text-3xl font-font font-extrabold mb-4">
          Join Us in Creating a Brighter Future
        </h3>
        <p className="text-lg font-font mb-6">
          Mustaqbal is on a mission to empower women and youth in marginalized communities. Together, we can make a difference. Join us in building a future where everyone has the opportunity to thrive.
        </p>
        <button className="bg-white font-font text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition duration-300">
          Get Involved
        </button>
      </div>
    </div>
  );
}
