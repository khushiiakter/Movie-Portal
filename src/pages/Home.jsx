import Banner from "../components/Banner";
import FeatureMovies from "../components/FeatureMovies";

const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <section className="container mx-auto px-5 ">
        <FeatureMovies></FeatureMovies>
      </section>
    </>
  );
};

export default Home;
