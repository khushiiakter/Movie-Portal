import { useLoaderData } from "react-router-dom";
import FeatureMovies from "../components/FeatureMovies";

const AllMovies = () => {
  const movies = useLoaderData();
  return (
    <section className="container mx-auto px-4 ">
      <FeatureMovies></FeatureMovies>
    </section>
  );
};

export default AllMovies;
