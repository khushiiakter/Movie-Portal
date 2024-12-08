import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateMovie = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const movie = useLoaderData();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const genres = ["Comedy", "Drama", "Horror", "Action", "Sci-Fi", "Fantasy", "Romance"];
  const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];

  useEffect(() => {
    if (movie) {
      setValue("poster", movie.poster || "");
      setValue("title", movie.title || "");
      setValue("genre", movie.genre || "");
      setValue("duration", movie.duration || "");
      setValue("year", movie.year || "");
      setValue("summary", movie.summary || "");
      setValue("rating", movie.rating || 0);
    }
  }, [movie, setValue]);

  const onSubmit = (data) => {
    const updatedData = { ...data, user: `${user?.email}` };

    fetch(`http://localhost:5000/movies/${movie._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("Movie updated successfully!");
          navigate("/");
        } else {
          toast.error("Failed to update movie.");
        }
      })
      .catch(() => {
        toast.error("An error occurred while updating the movie.");
      });
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-5">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          Update Movie
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Movie Title */}
            <div>
              <label className="block mb-2 font-medium">Movie Title</label>
              <input
                {...register("title", { required: "Title is required", minLength: 2 })}
                placeholder="Enter movie title"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            {/* Genre */}
            <div>
              <label className="block mb-2 font-medium">Genre</label>
              <select
                {...register("genre", { required: "Genre is required" })}
                className="select select-bordered w-full bg-gray-800 text-white"
              >
                <option value="">Select Genre</option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
            </div>

            {/* Duration */}
            <div>
              <label className="block mb-2 font-medium">Duration (minutes)</label>
              <input
                type="number"
                {...register("duration", { required: "Duration is required", min: 60 })}
                placeholder="Enter duration"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
              {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
            </div>

            {/* Release Year */}
            <div>
              <label className="block mb-2 font-medium">Release Year</label>
              <select
                {...register("year", { required: "Year is required" })}
                className="select select-bordered w-full bg-gray-800 text-white"
              >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
            </div>

            {/* Movie Poster */}
            <div className="col-span-2">
              <label className="block mb-2 font-medium">Movie Poster (URL)</label>
              <input
                {...register("poster", {
                  required: "Poster URL is required",
                  pattern: {
                    value: /https?:\/\/.+\.(jpg|jpeg|png|gif)/i,
                    message: "Invalid URL format",
                  },
                })}
                placeholder="Enter poster URL"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
              {errors.poster && <p className="text-red-500 text-sm">{errors.poster.message}</p>}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block mt-3 font-medium">Rating</label>
            <Rating
              {...register("rating", { required: "Rating is required" })}
              onClick={(rate) => setValue("rating", rate)}
              ratingValue={movie?.rating}
              size={30}
              fillColor="red"
              emptyColor="gray"
              className="mt-2"
            />
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
          </div>

          {/* Summary */}
          <div className="mt-6">
            <label className="block mb-2 font-medium">Summary</label>
            <textarea
              {...register("summary", { required: "Summary is required", minLength: 10 })}
              placeholder="Enter a short summary"
              className="textarea textarea-bordered w-full bg-gray-800 text-white"
              rows="4"
            ></textarea>
            {errors.summary && <p className="text-red-500 text-sm">{errors.summary.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="btn btn-primary bg-red-500 hover:bg-red-600 w-full"
            >
              Update Movie
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateMovie;
