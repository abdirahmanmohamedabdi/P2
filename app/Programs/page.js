import Image from "next/image"; // Next.js optimized image component

const programs = [
  {
    title: "Digital Literacy Training",
    description:
      "Our Digital Literacy Training program aims to equip women and youth with the essential digital skills needed to participate in today’s technology-driven society. Participants learn everything from basic computer skills to advanced digital tools, ensuring they are well-prepared for both educational and employment opportunities.",
  },
  {
    title: "Entrepreneurship and Innovation Hub",
    description:
      "We offer a dynamic Entrepreneurship and Innovation Hub that supports aspiring entrepreneurs in developing their business ideas. Through mentorship, workshops, and access to resources, we help individuals turn their ideas into viable businesses, contributing to economic growth in their communities.",
  },
  {
    title: "Advocacy and Awareness Campaigns",
    description:
      "Our advocacy initiatives focus on promoting gender equality and social inclusion. We run awareness campaigns that address issues like gender-based violence, access to education, and economic empowerment. These campaigns are designed to challenge societal norms and advocate for policy changes that benefit marginalized communities.",
  },
  {
    title: "Youth Leadership Development",
    description:
      "This program is dedicated to nurturing the next generation of leaders. Through leadership training, mentorship, and community service projects, we empower youth to take active roles in their communities, fostering a culture of responsibility and civic engagement.",
  },
];
export default function ProgramsSection() {
  return (
    <div className="bg-blue-100 py-12"> {/* Changed bg-white to bg-blue-100 for a light blue background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center font-font text-one mb-8">
          Our Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <img
              src="/1.jpg"
              alt="Program Image 1"
              className="rounded-lg shadow-lg w-full object-cover"
              width={550}
              height={350}
            />
            
            {programs.slice(0, 2).map((program, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold font-font text-one mb-3">
                  {program.title}
                </h3>
                <p className="text-base text-gray-700">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <img
              src="/2.jpg"
              alt="Program Image 2"
              className="rounded-lg shadow-lg w-full object-cover"
              width={550}
              height={350}
            />

            {programs.slice(2).map((program, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold font-font text-one mb-3">
                  {program.title}
                </h3>
                <p className="text-base font-font text-gray-700">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
