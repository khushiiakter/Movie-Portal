import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="  bg-[#5e1a8938]  text-neutral-content py-10 max-w-full">
      <div className="footer mx-auto px-5 container grid grid-cols-1 md:grid-cols-4">
      <nav className="flex flex-col items-center">
        <img src={logo} className="w-16 text-center" alt="" />
          <a className="  gap-1 md:text-2xl font-bold">
            Movie Portal</a>
        </nav>
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
