import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  // const favorites = useLoaderData()
  useEffect(() => {
    fetch(`https://assignmet-10-server.vercel.app/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [user.email]);

  const handleDeleteFavorite = (id) => {
    fetch(`https://assignmet-10-server.vercel.app/favorites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Favorite Movie deleted.");
        setFavorites(favorites.filter((movie) => movie._id !== id));
      });
  };

  return (
    <div className="container  pb-16 mx-auto px-5 ">
      <h1 className="text-[#5f1a89] text-center text-5xl py-8 font-bold">
        My Favorite Movies
      </h1>

      {/* <div className="grid md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6 grid-cols-1">
        {favorites.map((movie) => (
          <div
            key={movie._id}
            className="   text-white rounded-2xl shadow-md overflow-hidden"
          >
           
            <div className="">
              <img
                className="w-full h-[460px] object-cover"
                src={movie.poster}
                alt={movie.title}
              />

              
            </div>

           
            <div className="py-4 bg-gray-900 pl-5 pr-4 flex flex-col  justify-between">
             
              <div className="flex items-center pb-1 ">
              
                <h3 className="text-3xl  font-bold ">{movie.title}</h3>
              
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
      </div> */}
       <div className="flex flex-col  mt-6">
        <div className="  ">
          <div className="w-full py-2  ">
            <div className=" border border-gray-200  md:rounded-lg">
              <table className="w-full divide-y ">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="pl-6  text-xl font-bold text-left "
                    >
                      <div className="flex text-white items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-2 text-xl font-bold text-left text-white"
                    >
                      <span> Genre</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4  text-xl font-bold text-left text-white"
                    >
                     Rating
                    </th>
                    <th
                      scope="col"
                      className="px-4  text-xl font-bold text-left text-white"
                    >
                      Year
                    
                    </th>
                    <th className="px-4  text-xl font-bold text-left text-white">
                      Duration
                    </th>
                    <th className="px-4  text-xl font-bold text-left text-white">
                      Edit Options
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-x divide-white ">
                  {/* Generate dynamic tr */}
                  {favorites.map((movie) => (
                    <tr key={movie._id}>
                      <td className="pl-6 py-4 text-lg text-white  font-medium whitespace-nowrap">
                        {movie.title}
                      </td>

                      <td className="px-4 py-4 text-lg text-white  whitespace-nowrap">
                        ${movie.genre}
                      </td>
                      <td className="px-4 py-4 text-lg text-white  whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p>{movie.rating}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-lg text-white  whitespace-nowrap">
                        {movie.year}
                      </td>
                      <td className="px-4 py-4 text-lg text-white  whitespace-nowrap">
                        {movie.duration}
                      </td>
                      <td className="px-4 py-4 text-lg whitespace-nowrap">
                        <div className="flex items-center gap-x-10">
                          <button
                           onClick={() => handleDeleteFavorite(movie._id)}
                            className="text-white transition-colors duration-200 font-semibold  hover:text-red-500 focus:outline-none"
                          >
                            Delete
                          </button>

                          
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
