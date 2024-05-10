import { useState } from "react";

import Modal from "@mui/material/Modal";

const ProductOverlay = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="absolute right-2 top-2 z-[4] bg-white/80 hover:bg-white text-black/60 hover:text-black size-[30px] flex items-center justify-center rounded-full opacity-0 group-hover:opacity-[100%] duration-200 hover:opacity-[100%] cursor-pointer">
        <i className="fa-solid fa-eye"></i>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white flex flex-col sm:flex-row relative w-[250px] sm:w-[600px] md:w-[720px] xl:w-[1000px]">
            <div onClick={() => setOpen(false)} className="absolute cursor-pointer bg-white border-2 size-[25px] flex items-center justify-center rounded-full top-[-10px] right-[-10px]">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="basis-1/2 h-[480px]">
              <img className="w-full h-full" src={data.images[0]} alt="" />
            </div>
            <div className="basis-1/2 p-4 flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-[#b1adad] font-[300] text-sm">{data.category.name}</span>
                <h2 className="text-xl md:text-2xl font-semibold my-2">{data.name}</h2>
                <p className="text-xs md:text-lg font-semibold text-[#706e6e] mb-2 md:mb-8">{data.price}</p>
                <p className=" text-sm md:text-base text-[#9b9b9b]">{data.description}</p>
              </div>
              <button className="block bg-secondary hover:bg-accent duration-200 w-fit mx-auto text-white py-2 px-6">Add To Cart</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductOverlay;
