import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="carousel  mt-[68px] w-full h-[73vh]">
      <div
        id="banner1"
        className="carousel-item relative w-full ">
        
        <img className="w-full object-cover" src="https://i.ibb.co.com/51Kvw2w/g-Ox-Bijsuojm9-Roww-RZydp9-X6l6m.jpg" alt="" />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner5" className="text-white text-lg">
            ❮
          </a>
          <a href="#banner2" className="text-white text-lg">
            ❯
          </a>
        </div>
      </div>
      
      
      <div
        id="banner2"
        className="carousel-item relative w-full">
        <img className="w-full object-cover" src="https://i.ibb.co.com/vLVWxG8/rdt-Zok-C7l-YFUu-Gjn1z-Ga-Y4-Wr-VXU.jpg" alt="" />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner1" className="text-white text-lg">
            ❮
          </a>
          <a href="#banner3" className="text-white text-lg">
            ❯
          </a>
        </div>
      </div>
     
      <div
        id="banner3"
        className="carousel-item relative w-full">
        
        <img className="w-full object-cover " src="https://i.ibb.co.com/9NQq90C/ca36ab143998347-6284aaf906458.png" alt="" />

        
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner2" className="text-white text-lg">
            ❮
          </a>
          <a href="#banner4" className="text-white text-lg">
            ❯
          </a>
        </div>
      </div>
      
      <div
        id="banner4"
        className="carousel-item w-full  relative" >
        <img className="w-full object-cover" src="https://i.ibb.co.com/L0gYyb4/annabelle-comes-home-postere02275801859983f.jpg" alt="" />
        
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner3" className="text-white text-lg">
            ❮
          </a>
          <a href="#banner5" className="text-white text-lg">
            ❯
          </a>
        </div>
      </div>
      <div
        id="banner5"
        className="carousel-item w-full  relative" >
     
        <img className="w-full object-cover" src="https://i.ibb.co.com/84MP6SC/thumb-1920-1119553.jpg" alt="" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner4" className="text-white text-lg">
            ❮
          </a>
          <a href="#banner1" className="text-white text-lg">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
