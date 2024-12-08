import { useLoaderData } from "react-router-dom";
import Movie from "../components/Movie";

const FeatureMovies = () => {
  const movies = useLoaderData();
  return (
    <div>
      <h1 className="text-white text-center text-5xl py-8 font-extrabold">Feature Movies</h1>
      <div className="grid mt-6
       md:grid-cols-3 grid-cols-1 gap-6">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
    </div>
  );
};

export default FeatureMovies;
