import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MovieDetails = () => {
  
  const { user } = useContext(AuthContext);
  const movie = useLoaderData();
  const navigate = useNavigate();

  const { rating, summary, year, duration, genre, title, poster, _id } = movie;


  const handleAddToFavorites = () => {
   const { _id, ...favoriteMovie} = movie;
   const newMovie = { ...favoriteMovie, userEmail: `${user.email}`};
    fetch("http://localhost:5000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Movie added to favorites.");
      })
     
  };
  const handleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/movies/${movie._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Movie has been deleted.",
                icon: "success",
              });
              navigate("/all-movie");

            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete movie",
                icon: "error",
              })
            }
          })
          .catch((error) => {
            console.error("Error deleting movie:", error );
            Swal.fire({
              title: "Error!",
              text: "Failed to delete movie",
              icon: "error",
            })
            
          })

        //
      }
    });
  };

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto  p-6 bg-[#070808] shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
        {/* Movie Poster */}
        <div className="w-full h-[400px] md:w-2/5">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover  rounded-lg shadow-md"
          />
        </div>

        {/* Movie Details Section */}
        <div className="w-full md:w-3/5 flex flex-col items-start justify-between">
          {/* Title and Meta Info */}
          <div className="mb-4">
            <h1 className="text-[40px] text-white font-bold ">{title}</h1>
            <p className="text-gray-500 mt-6">
              {year} | {genre} | {duration} mins
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <Rating initialValue={rating} size={25} readonly />
            <span className="text-lg text-gray-600 font-medium">
              {rating.toFixed(1)} / 5
            </span>
          </div>

          {/* Summary */}
          <div className="my-6">
            <h2 className="text-2xl text-white font-semibold">Overview</h2>
            <p className="text-gray-500 mt-2">{summary}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-auto">
            <button
              onClick={handleDelete}
              className="btn text-gray-400 hover:bg-red-800 rounded-lg btn-outline "
            >
              Delete Movie
            </button>
            {/* <Link to={`/my-favorites/${userEmail}`}> */}
            <button
              onClick={handleAddToFavorites}
              className="btn btn-outline text-gray-400    hover:bg-[#5f1a89]  "
              disabled={!user}
            >
              Add to Favorites
            </button>
            {/* </Link> */}
            <Link to={`/update-movie/${_id}`}>
              <button className="btn btn-outline text-gray-400  hover:bg-[#5f1a89]">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
