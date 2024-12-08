import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  // const favorites = useLoaderData()
  useEffect(() => {
    fetch(`http://localhost:5000/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [user.email]);

  const handleDeleteFavorite = (id) => {
    fetch(`http://localhost:5000/favorites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Favorite Movie deleted.");
        setFavorites(favorites.filter((movie) => movie._id !== id));
      });
  };

  return (
    <div className="container mx-auto px-5 ">
      <h1 className="text-white text-center text-5xl py-8 font-bold">
        My Favorite Movies
      </h1>

      <div className="grid md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6 grid-cols-1">
        {favorites.map((movie) => (
          <div
            key={movie._id}
            className="   text-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Movie Poster */}
            <div className="">
              <img
                className="w-full h-[460px] object-cover"
                src={movie.poster}
                alt={movie.title}
              />

              
            </div>

            {/* Movie Info */}
            <div className="py-4 bg-gray-900 pl-5 pr-4 flex flex-col  justify-between">
              {/* Additional Info */}
              <div className="flex items-center pb-1 ">
                {/* Title and Rating */}
                <h3 className="text-3xl  font-bold ">{movie.title}</h3>
                {/* Rating Number */}
                <span className="ml-2 font-bold text-[#5f1a89] text-base">
                  ({movie.rating})
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2 ">
                  <p className="text-sm text-gray-400">{movie.genre}</p>
                  <p className="text-sm text-gray-400 border-gray-400 border-x px-2">
                    {movie.duration} min
                  </p>
                  <p className="text-sm text-gray-400">{movie.year}</p>
                </div>

                {/*  Button */}

                <button
                  onClick={() => handleDeleteFavorite(movie._id)}
                  className="  px-4 py-2 bg-[#5f1a89]  hover:bg-red-800  rounded-lg text-sm"
                >
                  Delete Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
