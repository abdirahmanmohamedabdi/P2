import Image from "next/image";

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
    <div className="relative bg-gray-900"> {/* Dark background to match the Impact page */}
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/1.jpg" // Background image to fill the right side
              alt="Programs background"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-22 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-white font-font  tracking-wide uppercase">
            Our Programs
          </h2>
          <p className="mt-3 text-3xl font-font  font-extrabold text-white">
            Empowering Communities
          </p>
          <p className="mt-5 text-lg text-white font-font ">
            Through our diverse programs, we are equipping women and youth with the tools they need to succeed in a technology-driven world.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {programs.map((program, index) => (
              <div key={index}>
                <span className="block text-2xl font-font font-extrabold text-white">
                  {program.title}
                </span>
                <span className="mt-1 block font-font  text-base text-white">
                  {program.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
