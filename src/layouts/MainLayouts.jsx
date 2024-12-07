import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// #5f1a89  #5f1a89 btn #181c20  #101318 #1f1e24 #17161c
const MainLayouts = () => {
  return (
    <div>
      <nav className="md:px-6 bg-[black] -px-4">
        <Navbar></Navbar>
      </nav>

      <section className="bg-[#17161c] min-h-screen">
        <Outlet></Outlet>
      </section>
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
