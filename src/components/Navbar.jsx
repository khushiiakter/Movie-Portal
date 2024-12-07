import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink, useLocation } from "react-router-dom";

import profile from "../assets/blank-profile-picture-973460_640.png";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          // onClick={(e) => e.currentTarget.blur()}
          // className={({ isActive }) =>
          //   isActive
          //     ? "bg-[#e1e4fa] text-[#0F1035]   rounded-lg  "
          //     : "bg-[#0F1035] text-[#e1e4fa]   rounded-lg hover:bg-[#e1e4fa]  hover:text-[#0F1035]  "
          // }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-movie"
          // onClick={(e) => e.currentTarget.blur()}
          // className={({ isActive }) =>
          //   isActive
          //     ? "bg-[#e1e4fa] text-[#0F1035]    rounded-lg  "
          //     : "bg-[#0F1035] text-[#e1e4fa]    rounded-lg hover:bg-[#e1e4fa]  hover:text-[#0F1035]    "
          // }
        >
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-movie"
          // onClick={(e) => e.currentTarget.blur()}
          // className={({ isActive }) =>
          //   isActive
          //     ? "bg-[#e1e4fa] text-[#0F1035]   rounded-lg  "
          //     : "bg-[#0F1035] text-[#e1e4fa]    rounded-lg  hover:bg-[#e1e4fa]  hover:text-[#0F1035]   "
          // }
        >
          Add Movie
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-favorites"
          // onClick={(e) => e.currentTarget.blur()}
          // className={({ isActive }) =>
          //   isActive
          //     ? "bg-[#e1e4fa] text-[#0F1035]   rounded-lg  "
          //     : "bg-[#0F1035] text-[#e1e4fa]    rounded-lg  hover:bg-[#e1e4fa]  hover:text-[#0F1035]   "
          // }
        >
          My Favorites
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  text-white ">
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
            {links}
          </ul>
        </div>
        <a className=" md:text-xl ">Movie Mania</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 text-white">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <div className="relative group hidden md:block">
              <img
                src={user?.photoURL || {profile}}
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
              className="btn bg-[#5f1a89] rounded-2xl px-5 text-white hover:border-white border-neutral hover:bg-black"
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn bg-[#5f1a89] rounded-2xl mr-2 px-5 text-white hover:border-white border-neutral hover:bg-black"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn bg-[#5f1a89] rounded-2xl px-5 text-white hover:border-white border-neutral hover:bg-black"
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
