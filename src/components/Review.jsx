import profilePic from "../assets/profilepic.png";
const Review = () => {
  const reviews = [
    {
      name: "Jack William",
      designation: "Movie Critic",
      review:
        "This movie platform is phenomenal! It has transformed the way I select and enjoy movies. Highly recommended!",
      rating: 5.0,
      profilePic: { profilePic },
    },
    {
      name: "Emily Clark",
      designation: "Film Enthusiast",
      review:
        "A perfect platform for movie lovers. Amazing features and a sleek design make it my go-to website for movies.",
      rating: 4.8,
      profilePic: { profilePic },
    },
    {
      name: "John Doe",
      designation: "Director",
      review:
        "User-friendly and loaded with amazing features. This is a must-have for anyone who loves movies.",
      rating: 4.9,
      profilePic: { profilePic },
    },
  ];
  return (
    <section className=" text-white py-14 px-6">
      <h2 className="text-5xl font-extrabold text-center my-6">
        What Our Users Say
      </h2>
      <p className="text-center text-gray-400 py-4">
        See what others are saying about our platform. Join the community of
        movie enthusiasts!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
          >
            <div className="mb-4">
              <img
                src="https://i.ibb.co.com/Rh2DLGL/blank-profile-picture-973460-640.png"
                alt={review.name}
                className="w-16 h-16 mx-auto rounded-full border-2 "
              />
            </div>
            <h3 className="text-lg font-bold">{review.name}</h3>
            <p className="text-sm text-gray-400">{review.designation}</p>
            <div className="flex justify-center items-center my-4">
              <span className="text-yellow-400 text-lg mr-2">⭐</span>
              <span className="text-yellow-400 font-bold">{review.rating}</span>
            </div>
            <p className="text-sm text-gray-300">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
