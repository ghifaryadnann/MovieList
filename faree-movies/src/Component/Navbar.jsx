import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 shadow-xl w-full h-full">
        <div className=" m-auto w-11/12  h-full">
          <div className="flex justify-between items-center p-2">
            <div>
              <h1 className="text-2xl">Faree</h1>
            </div>
            <nav className="flex flex-row hidden md:flex justify-between w-2/5 list-none">
              <li>Home</li>
              <li>About</li>
              <li>Movies</li>
              <li>Contact</li>
            </nav>
            <button className="p-2 rounded-xl hidden md:flex bg-amber-500">
              Get Started
            </button>

            <div className="cursor-pointer md:hidden">
              {menu ? (
                <IoMdClose size={30} onClick={handleMenu} />
              ) : (
                <IoMdMenu size={30} onClick={handleMenu} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden absolute z-10 transition-transform  w-full h-full duration-300`}
      >
        <nav className="flex flex-col pt-5 items-center bg-gradient-to-r from-cyan-900 to-blue-900 w-full h-full list-none ">
          <li className="my-2 cursor-pointer">Home</li>
          <li className="my-2 cursor-pointer">About</li>
          <li className="my-2 cursor-pointer">Movies</li>
          <li className="my-2 cursor-pointer">Contact</li>
          <button className="p-2 mt-2 rounded-xl bg-amber-500">
            Get Started
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
