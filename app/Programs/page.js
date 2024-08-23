/* This example requires Tailwind CSS v2.0+ */
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

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <img
              className="h-full w-full object-cover lg:h-auto"
              src="/computer.jpg"
              alt="Empowering Marginalized Communities"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold font-font text-gray-900">
              Empowering Marginalized Communities Through Innovative Programs
            </h2>
            <p className="mt-4 text-lg font-font 0">
              At Mustaqbal Women and Youth, our programs are designed to bridge the digital divide and empower marginalized communities, particularly women and youth in Nairobi and North Eastern Kenya. We believe in creating opportunities through education, skill development, and community engagement. Our programs are tailored to address the unique challenges faced by these communities, enabling them to thrive in a digital world.
            </p>
            <div className="mt-12 lg:mt-6">
              <dl className="space-y-12">
                {programs.map((program) => (
                  <div key={program.title}>
                    <dt className="text-lg font-font leading-6 font-bold text-two">
                      {program.title}
                    </dt>
                    <dd className="mt-2 font-font text-base ">
                      {program.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}