import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary py-16 px-3">
        <div className="container mx-auto">
          <h5 className="text-center font-semibold text-lg mb-4">Subscribe To Our News Letter</h5>
          <p className="text-center text-sm mb-4">Receive Emails With The Latest Products & Deals!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-6">
            <input type="text" className="outline-none p-2 md:w-[40%]" placeholder="Enter Your Email..." />
            <button className="py-2 px-2 md:px-6 bg-secondary text-white">Subscribe</button>
          </div>
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
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
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <ul className="flex justify-center items-center gap-4 text-xl">
            <li className="hover:text-secondary duration-200 cursor-pointer">
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li className="hover:text-secondary duration-200 cursor-pointer">
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li className="hover:text-secondary duration-200 cursor-pointer">
              <i className="fa-brands fa-x-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-secondary p-3">
        <p className="text-white text-center">Copyright © 2024 Nearest Shops</p>
      </div>
    </footer>
  );
};

export default Footer;
