import { useLoaderData } from "react-router-dom";
import Movie from "../components/Movie";

const FeatureMovies = () => {
  const movies = useLoaderData();
  return (
    <div>
      <h1 className="text-[#5f1a89]  text-center text-5xl py-8 font-extrabold">Feature Movies</h1>
      <div className="grid mt-6
       md:grid-cols-4 grid-cols-1 gap-4">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
    </div>
  );
};

export default FeatureMovies;
