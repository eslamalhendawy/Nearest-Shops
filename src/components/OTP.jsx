import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../Services/apiCalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/otp.svg";

const OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleChange = (e, i) => {
    setOtp([...otp.map((data, index) => (index === i ? e.target.value : data))]);
    if (e.target.value.length === 1 && i < 5) {
      e.target.nextElementSibling.focus();
    }
    if (e.target.value.length === 0 && i > 0) {
      e.target.previousElementSibling.focus();
    }
  };

  const handleClick = async () => {
    if (otp.join("").length < 6) {
      toast.error("Please Enter the OTP");
      return;
    }
    toast.info("Verifying...");
    let temp = await postData("auth/verify-otp", { otp: otp.join("") , email });
    if(temp.status === "success"){
      localStorage.setItem("resetToken", temp.ResetToken);
      localStorage.removeItem("email");
      toast.success(temp.message);
      navigate("/reset-password");
    }else{
      toast.error("Something went wrong please try again");
    }
  }

  return (
    <section className="flex items-center justify-center px-6 py-20">
      <div className="md:flex items-stretch 2xl:items-center shadow-xl bg-white rounded-lg overflow-hidden">
        <div className="hidden basis-1/2 bg-primary p-8 md:flex items-center justify-normal">
          <img src={image} alt="" />
        </div>
        <div className="basis-1/2 p-8">
          <h1 className="text-2xl xl:text-3xl font-semibold text-center mb-8 text-secondary">Forgot Password</h1>
          <p className="mb-8 xl:mb-12 w-full md:w-[80%] xl:w-[60%] text-center xl:text-lg text-[#606060] mx-auto">Enter The OTP Sent To Your Email.</p>
          <div className="w-full md:w-[80%] xl:w-[60%] mx-auto flex items-center justify-center gap-[10px] lg:gap-[30px] mb-12">
            {otp.map((data, index) => (
              <input value={data} onChange={(e) => handleChange(e, index)} maxLength={1} className="w-[50px] p-2 text-center border-b-2 outline-none border-black text-xl text-black" key={index} type="password" />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-8">
          </div>
          <button onClick={handleClick} className="bg-secondary hover:bg-accent duration-200 text-white py-2 px-8 rounded-xl block mx-auto">
            Send
          </button>
        </div>
      </div>
    </section>
  )
}

export default OTP