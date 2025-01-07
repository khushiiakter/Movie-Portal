import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { rating, summary, year, duration, genre, title, poster, _id } = movie;
  return (
    <div className="  text-white rounded-2xl shadow-md overflow-hidden">
      {/* Movie Poster */}
      <div className="">
        <img
          className="w-full h-[360px] object-cover"
          src={poster}
          alt={title}
        />
      </div>

      {/* Movie Info */}
      <div className="py-4 bg-gray-900 pl-5 pr-3 flex flex-col   ">
        {/* Additional Info */}
        <div className="flex items-center justify-between  pb-2 ">
          {/* Title and Rating */}
          <h3 className="text-2xl  font-bold ">{title}</h3>
          {/* Rating Number */}
          <span className="ml-2 font-bold text-[#602d80] text-base">
            ({rating})
          </span>
          <p className="text-sm flex-grow text-right text-gray-400">{year}</p>
        </div>

        <div className="flex justify-between  items-center">
          <div className="flex gap-2 ">
            <p className="text-sm text-gray-400">{genre}</p>
            <p className="text-sm text-gray-400 border-gray-400 border-l px-2">
              {duration} min
            </p>
            
          </div>
          {/* See Details Button */}
          <Link to={`/movie-details/${_id}`}>
            <button className="  px-3 py-2 bg-[#5f1a89]  hover:bg-red-800 rounded-lg text-sm">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
