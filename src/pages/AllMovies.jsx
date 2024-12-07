import { useLoaderData } from "react-router-dom";

import Movie from "../components/Movie";

const AllMovies = () => {
  const movies = useLoaderData();
  return (
    <section className="container mx-auto lg:px-8 px-4 ">
      <h1 className="text-white text-2xl pt-8 font-bold">All Movies  {movies.length}</h1>
      <div className="grid mt-6
       md:grid-cols-3 grid-cols-1 gap-6">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
    </section>
  );
};

export default AllMovies;
