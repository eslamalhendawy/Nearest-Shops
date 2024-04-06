import { useState } from "react";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/SwipeableDrawer";

const SideMenu = () => {
  const [openMenu, setOpen] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu(true)}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <Drawer anchor="left" open={openMenu} onClose={toggleMenu(false)} onOpen={toggleMenu(true)}>
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col p-3 bg-white">
          <button className="w-fit ml-auto hover:text-red-500 duration-200" onClick={toggleMenu(false)}>
            <i className="fa-solid fa-x"></i>
          </button>
          <ul className="space-y-6 text-xl">
            <li className="hover:text-secondary duration-200">
              <Link to="/" onClick={toggleMenu(false)}>Home</Link>
            </li>
            <li className="hover:text-secondary duration-200">
              <Link to="/collection" onClick={toggleMenu(false)}>Collection</Link>
            </li>
            <li className="hover:text-secondary duration-200">
              <Link to="/about"onClick={toggleMenu(false)}>About</Link>
            </li>
            <li className="hover:text-secondary duration-200">
              <Link to="/contact" onClick={toggleMenu(false)}>Contact</Link>
            </li>
            <li className="hover:text-secondary duration-200">
              <Link to="/login" onClick={toggleMenu(false)}>Login</Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default SideMenu;
