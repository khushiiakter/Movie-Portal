import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayouts = () => {
    return (
        <div>
            <nav className="md:px-6 bg-[#0F1035] -px-4">
                <Navbar></Navbar>
                
            </nav>

            <section className=" min-h-screen">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayouts;