import { useState } from "react";
import { putData } from "../Services/apiCalls";
import { useAppContext } from "../Context/AppContext";

import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BasicInfoOverlay = () => {
  const [open, setOpen] = useState(false);
  const { userData } = useAppContext();
  const userToken = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  const handleUpdate = async () => {
    if(email !== "" && !email.match(regEmail)) {
      return toast.error("Enter a valid email address");
    }
    if(phone !== "" && !phone.match(regNumbers)) {
      return toast.error("Phone number should only contain numbers");
    }
    if(phone !== "" && phone.length !== 11) {
      return toast.error("Enter a valid phone number.");
    }
    const data = { name, email, phone };
    if(name === "" ){
      delete data.name;
    }
    if(email === "" ){
      delete data.email;
    }
    if(phone === "" ){
      delete data.phone;
    }
    toast.info("Updating...");
    setLoading(true);
    const response = await putData("users", data, userToken);
    console.log(response);
    if(response.status === "success") {
      toast.success("Updated successfully");
      window.location.reload();
    }else{
      toast.error("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <>
      <i onClick={() => setOpen(true)} className="fa-solid fa-pen hover:text-accent duration-200  cursor-pointer text-xl"></i>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className={`flex items-center justify-between mb-6`}>
              <h3 className="font-semibold text-2xl">Update Basic Info</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <p className="mb-6 text-center font-semibold text-lg">Only Enter The Data You Wish To Update</p>
            <div className="flex flex-col gap-2 mb-4">
              <span className="font-semibold text-lg">Name:</span>
              <input onChange={(e) => setName(e.target.value)} type="text" className="outline-none border border-primary p-2 rounded-lg" placeholder={userData.name} />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <span className="font-semibold text-lg">Email:</span>
              <input onChange={(e) => setEmail(e.target.value)} type="text" className="outline-none border border-primary p-2 rounded-lg" placeholder={userData.email} />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <span className="font-semibold text-lg">Phone Number:</span>
              <input onChange={(e) => setPhone(e.target.value)} type="text" className="outline-none border border-primary p-2 rounded-lg" placeholder={userData.phone} />
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

export default BasicInfoOverlay;
