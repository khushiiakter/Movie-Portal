import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

// #5f1a89  #5f1a89 btn #181c20  #101318 #1f1e24 #17161c
const MainLayouts = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);
  return (
    <div>
      <nav className="md:px-6 bg-black -px-4">
        <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      </nav>

      <section className=" min-h-screen">
        <Outlet theme={theme} toggleTheme={toggleTheme}></Outlet>
      </section>

     <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default MainLayouts;
