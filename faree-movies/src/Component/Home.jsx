import bgfaree from "../assets/bg-faree.jpg";

const Home = () => {
  return (
    <div className=" overflow-hidden bg-cyan-900 ">
      <div className=" relative bg-cyan-900">
        <div className="absolute flex w-full flex-col mt-[50px] text-center items-center h-3/5 justify-center transition-transform">
          <h1 className="text-[50px]  font-black">WELCOME.</h1>
          <p className="text-xl">
            Millions of movies, Great Movies and people to discover. Explore now.
          </p>
         
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
