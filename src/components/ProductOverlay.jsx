import { useState } from "react";

import Modal from "@mui/material/Modal";

const ProductOverlay = ({ data }) => {
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(true);
    console.log("Clicked");
  }

  return (
    <>
      <div onClick={handleClick} className="absolute right-2 top-2 z-[4] bg-white/80 hover:bg-white text-black/60 hover:text-black size-[30px] flex items-center justify-center rounded-full opacity-0 group-hover:opacity-[100%] duration-200 hover:opacity-[100%] cursor-pointer">
        <i className="fa-solid fa-eye"></i>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div  className="flex justify-center items-center h-screen">

        </div>
      </Modal>
    </>
  );
};

export default ProductOverlay;
