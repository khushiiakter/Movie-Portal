import { useContext, useState } from "react";

import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    poster: "",
    title: "",
    genre: "",
    duration: "",
    year: "",
    summary: "",
  });

  const genres = ["Comedy", "Drama", "Horror", "Action", "Sci-Fi", "Fantasy", "Romance"];
  const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.poster.match(/https?:\/\/.+\.(jpg|jpeg|png|gif)/i)) {
      return toast.error("Poster must be a valid URL");
    }

    if (formData.title.length < 2) {
      return toast.error("Title must be at least 2 characters");
    }

    if (!formData.genre) {
      return toast.error("Genre is required");
    }
    if (formData.duration <= 60) {
      return toast.error("Duration must be greater than 60 minutes");
    }
    if (!formData.year) {
      return toast.error("Year is required");
    }
    if (rating === 0) {
      return toast.error("Rating is required");
    }
    if (formData.summary.length < 10) {
      return toast.error("Summary must be at least 10 characters");
    }

    // Submit Data
    const movieData = { ...formData, rating, user: `${user?.email}` };
    // console.log("Movie Data:", movieData);
    // toast.success("Movie added successfully!");
    setFormData({
      poster: "",
      title: "",
      genre: "",
      duration: "",
      year: "",
      summary: "",
    });
    setRating(0);

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Movie added successfully!");
          navigate("/all-movie");
        }
      });
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-5">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          Add New Movie
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Movie Title */}
            <div>
              <label className="block mb-2 font-medium">Movie Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter movie title"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="block mb-2 font-medium">Genre</label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                className="select select-bordered w-full bg-gray-800 text-white"
              >
                <option value="">Select Genre</option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block mb-2 font-medium">
                Duration (minutes)
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="Enter duration"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
            </div>

            {/* Release Year */}
            <div>
              <label className="block mb-2 font-medium">Release Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="select select-bordered w-full bg-gray-800 text-white"
              >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            {/* Movie Poster */}
            <div className="col-span-2">
              <label className="block mb-2 font-medium">
                Movie Poster (URL)
              </label>
              <input
                type="text"
                name="poster"
                value={formData.poster}
                onChange={handleInputChange}
                placeholder="Enter poster URL"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
            </div>
          </div>
          {/* Rating */}
          <div>
            <label className="block mt-3 font-medium">Rating</label>
            <Rating
              onClick={handleRatingChange}
              ratingValue={rating}
              size={30}
              fillColor="red"
              emptyColor="gray"
              className="mt-2"
            />
           
          </div>

          {/* Summary */}
          <div className="mt-6">
            <label className="block mb-2 font-medium">Summary</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              placeholder="Enter a short summary"
              className="textarea textarea-bordered w-full bg-gray-800 text-white"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="btn btn-primary bg-red-500 hover:bg-red-600 w-full"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default AddMovie;
