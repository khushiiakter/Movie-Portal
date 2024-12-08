const AboutUs = () => {
  return (
    <div className="p-10 bg-[#0d0d20] text-[#b0b6c0]">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <div className="max-w-4xl mx-auto  text-center">
        <p className="mb-4 text-gray-400">
          Welcome to our movie platform, your ultimate destination for
          discovering, reviewing, and saving your favorite films. Our mission is
          to create a seamless and engaging experience for movie lovers
          worldwide, providing detailed information on the latest blockbusters,
          timeless classics, and everything in between.
        </p>
        <p className="mb-4 text-gray-400">
          With a user-friendly interface, curated recommendations, and
          interactive features, we aim to foster a community where film
          enthusiasts can connect, share their passion, and explore new genres.
          From personalized favorite lists to real-time updates, we're here to
          make your movie journey unforgettable.
        </p>
        <p className="mb-4 text-gray-400">
          Whether you're a casual viewer or a dedicated user, our platform is
          designed with you in mind. Join us today and become part of a vibrant
          community that celebrates the art of storytelling through cinema.
        </p>
        <h2 className="text-3xl text-[#b0b6c0] font-bold mt-8">Why Choose Us?</h2>
        <ul className="list-disc list-inside mt-4 text-gray-400">
          <li>Comprehensive movie database</li>
          <li>Easy-to-use favorite and review features</li>
          <li>Real-time updates on the latest releases</li>
          <li>Community-driven insights and reviews</li>
        </ul>
        <p className="mt-8 text-[#363b44] font-semibold">
          Let's make every movie night extraordinary. Explore, engage, and
          enjoy!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
