import bgfaree from "../assets/bg-faree.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <div className=" overflow-hidden bg-cyan-900 ">
      <div className=" relative bg-cyan-900">
        <div  className="absolute flex w-full flex-col mt-[50px] text-center items-center h-3/5 justify-center transition-transform">
          <h1 data-aos="fade-right" className="text-[50px]  font-black">WELCOME.</h1>
          <p  data-aos="fade-left" className="text-2xl font-black text-shadow-lg text-amber-500">
            Nonton Gratis Tanpa Karcis
            
           
          </p>
         <div>
               <p data-aos="fade-up">Dengan Sengaja Menciptakan Website ini untuk Kaum Mokondo seperti kalian</p>
            </div>
        </div>

        <img
          src={bgfaree}
          className="h-[300px]  w-full  md:h-screen shadow-xl"
          alt="background"
        />
      </div>
    </div>
  );
};

export default Home;
