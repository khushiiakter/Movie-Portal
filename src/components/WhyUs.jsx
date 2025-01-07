import why from "../assets/Home cinema-amico.png"


const WhyUs = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
        {/* Left Section: Image/Illustration */}
        <div className="flex justify-center">
          <img
            src={why}
            alt="Why Choose Us"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Section: Content */}
        <div>
          <h3 className="text-[#5f1a89]  text-lg font-semibold uppercase mb-4">
            Why Choose MovieZone
          </h3>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Your Ultimate Destination for Movie Enthusiasts
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Discover, review, and curate your favorite movies in one place.
            MovieZone brings together movie lovers from around the globe with
            verified reviews, ratings, and personalized recommendations.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <li className="flex items-center">
              <span className="bg-[#5f1a89]  text-white p-2 rounded-full mr-3">
                🎬
              </span>
              <p>Extensive Movie Database</p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#5f1a89]  text-white p-2 rounded-full mr-3">
                ⭐
              </span>
              <p>Real User Ratings</p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#5f1a89]  text-white p-2 rounded-full mr-3">
                📝
              </span>
              <p>Personalized Recommendations</p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#5f1a89]  text-white p-2 rounded-full mr-3">
                🎥
              </span>
              <p>Latest Movie Trends</p>
            </li>
          </ul>
          <button className="bg-[#5f1a89]  hover:bg-red-800   px-6 py-2 rounded-lg transition">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
