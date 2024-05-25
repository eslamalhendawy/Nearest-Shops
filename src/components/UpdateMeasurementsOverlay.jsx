import { useState } from "react";
import { putData } from "../Services/apiCalls";
import { useAppContext } from "../Context/AppContext";

import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateMeasurementsOverlay = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const { userData } = useAppContext();
  const userToken = localStorage.getItem("token");
  const regNumbers = /^[0-9]+$/;

  const handleUpdate = async () => {
    if (height !== "" && !height.match(regNumbers)) {
      return toast.error("Height should only contain numbers");
    }
    if (weight !== "" && !weight.match(regNumbers)) {
      return toast.error("Weight should only contain numbers");
    }
    const data = { height, weight };
    if (height === "") {
      delete data.height;
    }
    if (weight === "") {
      delete data.weight;
    }
    toast.info("Updating...");
    setLoading(true);
    const response = await putData("users", data, userToken);
    if (response.status === "success") {
      toast.success("Updated successfully");
      window.location.reload();
    } else {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
      <i onClick={() => setOpen(true)} className="fa-solid fa-pen hover:text-accent duration-200  cursor-pointer text-2xl"></i>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className={`flex items-center justify-between mb-6`}>
              <h3 className="font-semibold text-2xl">Update Measurements</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <p className="mb-6 text-center font-semibold text-lg">Only Enter The Data You Wish To Update</p>
            <div className="flex flex-col gap-2 mb-4">
              <span className="font-semibold text-lg">Height (In CM):</span>
              <input onChange={(e) => setHeight(e.target.value)} type="text" className="outline-none border border-primary p-2 rounded-lg" placeholder={userData.height} />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <span className="font-semibold text-lg">Weight (IN KG):</span>
              <input onChange={(e) => setWeight(e.target.value)} type="text" className="outline-none border border-primary p-2 rounded-lg" placeholder={userData.weight} />
            </div>
            <div className="flex justify-center">
              <button disabled={loading} onClick={handleUpdate} className="bg-accent hover:bg-secondary duration-200 px-12 py-2 text-white font-semibold text-lg">
                {loading ? "Updating" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateMeasurementsOverlay;
