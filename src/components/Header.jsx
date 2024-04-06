import { Link } from "react-router-dom";

import SideMenu from "./SideMenu";

import logo from "/assets/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-4 lg:px-8 text-lg">
      <SideMenu />
      <div className="max-w-[100px]">
        <img src={logo} className="h-[50px] md:h-[80px]" alt="logo" />
      </div>
      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-4">
          <li className="hover:text-secondary duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-secondary duration-200">
            <Link to="/collection">Collection</Link>
          </li>
          <li className="hover:text-secondary duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-secondary duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <i className="fa-solid fa-magnifying-glass hover:text-secondary duration-200"></i>
        <i className="fa-solid fa-cart-shopping hover:text-secondary duration-200"></i>
        <Link to="/login" className="hidden lg:block hover:text-secondary duration-200">Login</Link>
      </div>
    </header>
  );
};

export default Header;
