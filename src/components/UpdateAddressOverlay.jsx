import { useState } from "react";
import { putData } from "../Services/apiCalls";
import { useAppContext } from "../Context/AppContext";

import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateAddressOverlay = () => {
  const { userData } = useAppContext();
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const userToken = localStorage.getItem("token");

  const handleUpdate = async () => {
    if(address === "") {
      return toast.error("Please enter an address");
    }
    toast.info("Updating...");
    setLoading(true);
    const response = await putData("users", { address }, userToken);
    if(response.status === "success") {
      toast.success("Updated successfully");
      window.location.reload();
    }else{
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="flex items-center gap-2 bg-[#f6f3ef] hover:bg-accent hover:text-white duration-200  py-2 px-4 w-fit mx-auto md:mx-0 mb-6">
        <i className="fa-solid fa-location-dot"></i>
        <span>{userData.address === "None" ? "Add Address" : userData.address}</span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className={`flex items-center justify-between mb-6`}>
              <h3 className="font-semibold text-2xl">Update Address</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <span className="font-semibold text-lg">Address:</span>
              <input onChange={(e) => setAddress(e.target.value)} type="text" className="outline-none border border-primary p-2 rounded-lg" placeholder={userData.address} />
            </div>
            <div className="flex justify-center">
              <button disabled={loading} onClick={handleUpdate} className="bg-accent hover:bg-secondary duration-200 px-12 py-2 text-white font-semibold text-lg">{loading ? "Updating" : "Update"}</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateAddressOverlay;
