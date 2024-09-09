export default function Volunteer() {
    return (
      <div className="bg-white text-gray-800">
        <header className="bg-two text-white py-16 text-center">
          <h1 className="text-5xl font-font font-bold">Volunteer</h1>
          <p className="mt-4 max-w-2xl font-font mx-auto text-lg">
            Use your skills to empower others. Join our volunteer team and help us make a lasting impact on marginalized communities.
          </p>
        </header>
  
        <section className="py-16 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-font font-bold mb-6">Volunteer Opportunities</h2>
            <p className="text-lg font-font mb-8">
              We offer various volunteer opportunities in digital literacy, mentorship, community outreach, and more. Sign up and help make a difference.
            </p>
            <button className="bg-two text-white py-2 px-6 rounded-full hover:bg-two-light">
              Become a Volunteer
            </button>
          </div>
        </section>
      </div>
    );
  }
  