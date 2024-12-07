import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import toast from "react-hot-toast";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  // const favorites = useLoaderData()
  useEffect(() => {
    fetch(`http://localhost:5000/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      
  }, [user.email]);

  const handleDeleteFavorite = (id) => {
    fetch(`http://localhost:5000/favorites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Favorite Movie deleted.");
        setFavorites(favorites.filter((movie) => movie._id !== id));
       
         
       
      })
      
  };

  return (
    <div>
      <h1 className="bg-red-500">Your favorite movie</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {favorites.map((movie) => (
          <div
            key={movie._id}
            className="   text-purple-400 rounded-2xl shadow-md overflow-hidden"
          >
            {/* Movie Poster */}
            <div className="relative ">
              <img
                className="w-full h-[470px] object-cover"
                src={movie.poster}
                alt={movie.title}
              />

              <div className="flex items-center absolute bottom-[0px] pl-5 pb-4">
                {/* Title and Rating */}
                <h3 className="text-3xl  font-bold ">{movie.title}</h3>
                {/* Rating Number */}
                <span className="ml-2 font-medium text-red-400 text-base">
                  ({movie.rating})
                </span>
              </div>
            </div>

            {/* Movie Info */}
            <div className="py-4 bg-gray-900 pl-5 pr-3 flex  items-center justify-between">
              {/* Additional Info */}

              <div className="flex gap-3 ">
                <p className="text-sm text-gray-400">{movie.genre}</p>
                <p className="text-sm text-gray-400 border-gray-400 border-x px-2">
                  {movie.duration} min
                </p>
                <p className="text-sm text-gray-400">{movie.year}</p>
              </div>

              {/*  Button */}

              <button
                onClick={() => handleDeleteFavorite(movie._id)}
                className="  px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
              >
                Delete Favorite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
