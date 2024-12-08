const Footer = () => {
  return (
    <footer className="  bg-black text-neutral-content p-10 max-w-full">
      <div className="footer grid grid-cols-1 md:grid-cols-3">
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Featured Movies</a>
          <a className="link link-hover">Latest Reviews</a>
          <a className="link link-hover">Genres</a>
          <a className="link link-hover">Upcoming Releases</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
