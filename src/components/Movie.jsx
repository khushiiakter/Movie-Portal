import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { rating, summary, year, duration, genre, title, poster, _id } = movie;
  return (
    <div className="  text-white rounded-2xl shadow-md overflow-hidden">
      {/* Movie Poster */}
      <div className="relative ">
        <img
          className="w-full h-[460px] object-cover"
          src={poster}
          alt={title}
        />

        <div className="flex items-center  absolute bottom-0 pl-5 pb-4">
          {/* Title and Rating */}
          <h3 className="text-4xl  font-bold ">{title}</h3>
          {/* Rating Number */}
          <span className="ml-2 font-bold text-[#5f1a89] text-base">
            ({rating})
          </span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="py-4 bg-gray-900 pl-5 pr-3 flex  items-center justify-between">
        {/* Additional Info */}

        <div className="flex gap-3 ">
          <p className="text-sm text-gray-400">{genre}</p>
          <p className="text-sm text-gray-400 border-gray-400 border-x px-2">
            {duration} min
          </p>
          <p className="text-sm text-gray-400">{year}</p>
        </div>

        {/* See Details Button */}
        <Link to={`/movie-details/${_id}`}>
          <button className="  px-4 py-2 bg-[#5f1a89]  hover:bg-red-800 rounded-lg text-sm">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
