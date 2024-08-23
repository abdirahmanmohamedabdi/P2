export default function Heroe() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="max-w-full mx-auto sm:px-0 lg:px-0">
              <div className="relative shadow-xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="/222.jpg"
                    alt="Somali Women"
                  />
                  <div className="absolute inset-0 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold font-font tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-three">Transform Lives, Shape Futures</span>
                   
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center font-font text-xl text-white sm:max-w-3xl">
                  Your support can create opportunities for women and youth in marginalized communities. Together, we can build a brighter future.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    
                      <a
                        href="/About"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-font font-medium rounded-md shadow-sm text-white bg-two bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Get Involved
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}