import { useState, useRef } from "react";
import { putData } from "../Services/apiCalls";

import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateAvatarOverlay = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const userToken = localStorage.getItem("token");
  const [avatar, setAvatar] = useState(null);
  const fileInput = useRef(null);

  const handleUpdate = async () => {
    if (avatar === null) {
      return toast.error("Please choose an image");
    }
    const formData = new FormData();
    formData.append("photo", avatar);
    toast.info("Updating...");
    setLoading(true);
    const response = await putData("users", formData, userToken);
    console.log(response);
    if(response.status === "success") {
      toast.success("Updated successfully");
      window.location.reload();
    }
  };

  return (
    <>
      <div onClick={() => setOpen(true)} className="absolute right-0 bottom-0 bg-primary group size-[30px] flex justify-center items-center rounded-full">
        <i className="fa-solid fa-pen text-black group-hover:text-accent duration-200 cursor-pointer text-lg"></i>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className={`flex items-center justify-between mb-6`}>
              <h3 className="font-semibold text-2xl">Update Avatar</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <div className="flex justify-center mb-6">
              <button onClick={() => fileInput.current.click()} className="bg-accent hover:bg-secondary duration-200 px-12 py-2 text-white font-semibold text-lg">
                Choose Image
              </button>
            </div>
            <input ref={fileInput} type="file" onChange={(e) => setAvatar(e.target.files[0])} className="hidden" />
            <div className="flex justify-center">
              <button disabled={loading} onClick={handleUpdate} className="bg-accent hover:bg-secondary duration-200 px-12 py-2 text-white font-semibold text-lg">
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateAvatarOverlay;
