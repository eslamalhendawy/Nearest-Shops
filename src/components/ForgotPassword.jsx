import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../Services/apiCalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/forgotPassword.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!email) {
      return toast.error("Please enter your email");
    }
    toast.info("Sending mail...");
    const response = await postData("auth/forgotpassword", { email });
    if (response.status === "success") {
      localStorage.setItem("email", email);
      toast.success("Mail sent successfully");
      navigate("/otp");
    }
  };

  return (
    <section className="flex items-center justify-center px-6 py-20">
      <div className="md:flex items-stretch 2xl:items-center shadow-xl bg-white rounded-lg overflow-hidden">
        <div className="hidden basis-1/2 bg-primary p-8 md:flex items-center justify-normal">
          <img src={image} alt="" />
        </div>
        <div className="basis-1/2 p-8">
          <h1 className="text-2xl xl:text-3xl font-semibold text-center mb-8 text-secondary">Forgot Password</h1>
          <p className="mb-8 xl:mb-12 w-full md:w-[80%] xl:w-[60%] text-center xl:text-lg text-[#606060] mx-auto">Enter your E-mail to send a mail to re-assign a new password for your account.</p>
          <div className="flex flex-col xl:w-[80%] 2xl:w-[70%] xl:mx-auto">
            <label className="text-secondary font-semibold text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)} className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="email" id="email" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-8"></div>
          <button onClick={handleClick} className="bg-secondary hover:bg-accent duration-200 text-white py-2 px-8 rounded-xl block mx-auto">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
