import { useLoaderData } from "react-router-dom";
import Movie from "../components/Movie";


const Home = () => {
    const movies = useLoaderData();
    return (
        <div>
            <h1>Movies {movies.length}</h1>
            {
                movies.map(movie => <Movie key={movie._id} movie={movie}></Movie>)
            }
        </div>
    );
};

export default Home;