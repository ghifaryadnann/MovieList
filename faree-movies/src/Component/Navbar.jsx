import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 shadow-xl w-full h-full">
        <div className=" m-auto w-11/12  h-full">
          <div className="flex justify-between items-center p-2">
            <div>
              <h1 className="text-2xl">Faree</h1>
            </div>
            <nav className="flex flex-row hidden md:flex justify-between w-2/5 list-none">
              <Link to="home" spy={true} smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-cyan-600">Home</li>
              </Link>

              <Link to="about" spy={true} smooth={true} duration={500}>
                <li className="cursor-pointer hover:text-cyan-600">About</li>
              </Link>

              <Link to="trailers" spy={true} smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-cyan-600">Movies</li>
              </Link>
              
              <Link  to="contact" spy={true} smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-cyan-600">Contact</li>
              </Link>
              
              
              
            </nav>
            <button className="p-2 rounded-xl hidden md:flex hover:duration-500 bg-cyan-700 hover:bg-blue-500">
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
        <Link onClick={closeMenu} to="home" spy={true} smooth={true} duration={500}>
              <li className=" my-2 cursor-pointer hover:text-cyan-600">Home</li>
              </Link>

              <Link onClick={closeMenu} to="about" spy={true} smooth={true} duration={500}>
                <li className=" my-2 cursor-pointer hover:text-cyan-600">About</li>
              </Link>

              <Link onClick={closeMenu} to="trailers" spy={true} smooth={true} duration={500}>
              <li className=" my-2 cursor-pointer hover:text-cyan-600">Movies</li>
              </Link>
              
              <Link onClick={closeMenu}   to="contact" spy={true} smooth={true} duration={500}>
              <li className=" my-2 cursor-pointer hover:text-cyan-600">Contact</li>
              </Link>
          <button className="p-2 mt-2 rounded-xl bg-cyan-700 hover:bg-blue-500">
            Get Started
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
