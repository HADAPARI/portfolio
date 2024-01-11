import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import portfolio from "../assets/img/portfolio.png"

const NavBar = () => {
  const [isShowNavBar, setIsShowNavBar] = useState(false);

  const handleClick = () => {
    setIsShowNavBar((prev) => !prev);
  };

  return (
    <div className="px-4 sm:px-14 xl:px-40 w-full py-7 flex flex-col lg:flex-row  justify-between lg:items-center bg-primary text-white fixed z-50 top-0 opacity-80">
      <div className="flex justify-between items-center">
        <a href="/" className="text-2xl font-bold flex items-center">
          <img src={portfolio} alt="" className="w-10 mr-5" />
          Portfolio
        </a>
        <FontAwesomeIcon
          icon={isShowNavBar ? faXmark : faBars}
          className="lg:hidden cursor-pointer text-2xl"
          onClick={handleClick}
        />
      </div>
      <nav
        className={`gap-5 lg:gap-10 nav mt-7 lg:mt-0 ${
          isShowNavBar ? `flex` : `hidden`
        } lg:flex flex-col lg:flex-row py-3 pl-16 lg:p-0`}
      >
        <Link
          to="home"
          className="cursor-pointer w-fit"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="skills"
          className="cursor-pointer w-fit"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Skills
        </Link>
        <Link
          to="projects"
          className="cursor-pointer w-fit"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Projects
        </Link>
        <Link
          to="contact"
          className="cursor-pointer w-fit"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
