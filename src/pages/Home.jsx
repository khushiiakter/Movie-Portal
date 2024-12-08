import Banner from "../components/Banner";
import FeatureMovies from "../components/FeatureMovies";
import Membership from "../components/Membership";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <section className="container mx-auto px-5 ">
        <FeatureMovies></FeatureMovies>
      </section>
      <section className="container mx-auto px-5" >
        <Review></Review>
      </section>
      <section className="container mx-auto px-5" >
        <Membership></Membership>
      </section>
    </>
  );
};

export default Home;
