import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";



const MovieDetails = () => {
  const movie = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { rating, summary, year, duration, genre, title, poster, _id } = movie;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Movie has been deleted.",
                icon: "success",
              });
            }
          });

        //
      }
    });
  };

  const handleAddToFavorites = () => {
    const favoriteMovie = { ...movie, userEmail: `${user?.email}` };
    fetch("http://localhost:5000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Movie added to favorites.");
      });
  };

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto  p-6 bg-[#837e9e3f] shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
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
            <h1 className="text-4xl text-white font-bold ">{title}</h1>
            <p className="text-gray-500 mt-5">
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
            <h2 className="text-xl text-white font-semibold">Overview</h2>
            <p className="text-gray-500 mt-2">{summary}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-auto">
            <button
              onClick={() => handleDelete(_id)}
              className="btn text-gray-400 btn-outline "
            >
              Delete Movie
            </button>
            {/* <Link to={`/my-favorites/${userEmail}`}> */}
            <button
              onClick={handleAddToFavorites}
              className="btn btn-outline text-gray-400"
            >
              Add to Favorites
            </button>
            {/* </Link> */}
            <Link to={`/update-movie/${_id}`}>
              <button className="btn btn-outline text-gray-400">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
