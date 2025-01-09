import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = ({ theme, toggleTheme }) => {
  const { user, logOut } = useContext(AuthContext);

  
  return (
    <div className="navbar fixed z-50 md:px-6   w-full  backdrop-blur-2xl bg-black -px-4 text-white ">
      <div className="navbar-start  ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0F1035] text-[#e1e4fa] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <ul className="menu menu-horizontal  px-1 text-white">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/all-movie">All Movies</NavLink>
                </li>
                <li>
                  <NavLink to="/add-movie">Add Movie</NavLink>
                </li>
                <li>
                  <NavLink to="/my-favorites">My Favorites</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutUs">About US</NavLink>
                </li>
              </ul>
            ) : (
              <ul className="menu menu-horizontal  px-1 text-white">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/all-movie">All Movies</NavLink>
                </li>

                <li>
                  <NavLink to="/aboutUs">About US</NavLink>
                </li>
               
              </ul>
            )}
          </ul>
        </div>
        <div className="flex items-center  gap-1 md:text-2xl font-bold">
          <img src={logo} className="w-7" alt="" />
          <a>Movie Portal</a>
        </div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        {user ? (
          <ul className="menu menu-horizontal  px-1 text-white">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-movie">All Movies</NavLink>
            </li>
            <li>
              <NavLink to="/add-movie">Add Movie</NavLink>
            </li>
            <li>
              <NavLink to="/my-favorites">My Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">About US</NavLink>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal  px-1 text-white">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-movie">All Movies</NavLink>
            </li>

            <li>
              <NavLink to="/aboutUs">About US</NavLink>
            </li>
          </ul>
        )}
      </div>
      <div className="md:block hidden">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="relative group hidden md:block">
              <img
                src={
                  user?.photoURL ||
                  `${"https://i.ibb.co.com/Rh2DLGL/blank-profile-picture-973460-640.png"}`
                }
                alt="Profile"
                className="border-2 border-[#e3e5f3d5] w-11 h-11 mr-2 rounded-full object-cover cursor-pointer ml-16"
              />
              <div
                className="absolute -right-4
               top-[60px] max-w-max bg-gray-800 text-white text-sm shadow-lg p-2 rounded hidden group-hover:block"
              >
                {user?.displayName || "User"}
              </div>
            </div>
            <Link
              onClick={logOut}
              className="px-5 py-2 bg-[#5f1a89] rounded-2xl  text-white  font-semibold hover:border-white border-neutral hover:bg-red-800"
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="px-5 py-2 bg-[#5f1a89] rounded-2xl mr-2  text-white  font-semibold hover:border-white border-neutral hover:bg-red-800"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="px-5 py-2  font-semibold bg-[#5f1a89] border-black   rounded-2xl border  text-white  hover:bg-red-800"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
