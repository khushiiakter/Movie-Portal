

const Movie = ({movie}) => {
    const {rating, summary, year, duration, genre, title, poster, _id} = movie;
    return (
        <div>
            <h1>{title}</h1>
            <h1>{rating}</h1>
        </div>
    );
};

export default Movie;