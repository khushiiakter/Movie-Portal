import { useLoaderData } from "react-router-dom";

import Movie from "../components/Movie";
import { useState } from "react";

const AllMovies = () => {
  const movies = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section className="container pb-16 mx-auto lg:px-8 px-4 ">
      <h1 className="text-[#5f1a89] text-center text-5xl py-7 font-extrabold">
        All Movies
      </h1>

      {/* Search Input */}
      <div className="mt-3  text-center">
        <input
          type="text"
          className="input input-bordered text-white bg-gray-800 w-full max-w-"
          placeholder="Search by Movie Title"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="grid mt-14
       md:grid-cols-4 grid-cols-1 gap-4">
        {filteredMovies.map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
 
     
    </section>
  );
};

export default AllMovies;
