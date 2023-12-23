import bgfaree from "../assets/bg-faree.jpg";

const Home = () => {
  return (
    <div className=" overflow-hidden bg-cyan-900 ">
      <div className=" relative bg-cyan-900">
        <div className="absolute flex w-full flex-col mt-[50px] text-center items-center h-3/5 justify-center transition-transform">
          <h1 className="text-[50px]  font-black">WELCOME.</h1>
          <p className="text-xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div>
            <input className="mt-[50px] w-[350px] sm:w-[400px] rounded-2xl p-2 text-black"></input>
            <button className="bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-blue-500 p-2 m-2 rounded-2xl">
              Search
            </button>
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
