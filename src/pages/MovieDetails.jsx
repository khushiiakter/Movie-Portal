import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const MovieDetails = () => {
    const movie = useLoaderData();

    if(!movie){
        return <p>Loading...</p>
    }
    // const data = useLoaderData();
    // const {id} = useParams();
    // const [movie, setMovie] = useState();

    // useEffect(() =>{
    //     const singleData = data.find((item) => item._id == id);
    //     setMovie(singleData || {});
    // },[data, id])


    const { rating, summary, year, duration, genre, title, poster, _id } = movie;
    return (
        <div>
            <h1 className="text-white">movie details {title} {poster}</h1>
        </div>
    );
};

export default MovieDetails;