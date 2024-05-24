import { useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { userData, setUserData } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Nearest Shops | ${userData.name}`;
    console.log(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData({
      name: "",
      email: "",
      phone: "",
      height: "",
      weight: "",
      address: "",
      role: "",
      avatar: "",
      wishlist: [],
      loggedIn: false,
    });
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <section className="minHeight bg-[#f6f3ef] p-6">
      <div className="container max-w-[1000px] mx-auto p-8 bg-white rounded-xl">
        <h1 className="text-center md:text-left font-semibold text-3xl mb-6">Basic Info</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <img className="size-[100px]" src={userData.avatar} alt="" />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold ">{userData.name}</h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
              </div>
              <i className="fa-solid fa-pen hover:text-accent duration-200  cursor-pointer text-2xl"></i>
            </div>
          </div>
        </div>
        <hr className="h-[2px] bg-[#f6f3ef] mb-6" />
        <h1 className="text-center md:text-left font-semibold text-3xl mb-6">Address</h1>
        {userData.address === "None" ? (
          <button className="flex items-center gap-2 bg-[#f6f3ef] hover:bg-accent hover:text-white duration-200  py-2 px-4 w-fit mx-auto md:mx-0 mb-6">
            <i className="fa-solid fa-location-dot"></i>
            <p>Add Address</p>
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-[#f6f3ef] hover:bg-accent hover:text-white duration-200  py-2 px-4 w-fit mx-auto mb-6">
            <i className="fa-solid fa-location-dot"></i>
            <p>{userData.address}</p>
          </div>
        )}
        <hr className="h-[2px] bg-[#f6f3ef] mb-6" />
        <div className="flex flex-col md:flex-row justify-center md:justify-normal items-center gap-4 mb-6">
          <h1 className="text-center  font-semibold text-3xl ">User Measurements</h1>
          <i className="fa-solid fa-pen hover:text-accent duration-200  cursor-pointer text-2xl"></i>
        </div>
        <div className="flex items-center justify-center md:justify-normal gap-4 mb-6">
          <div className="flex items-center justify-center gap-2 bg-[#f6f3ef] hover:bg-accent hover:text-white duration-200 py-2 px-4 w-[100px] text-xl">
            <i className="fa-solid fa-location-dot"></i>
            <p>{userData.weight}</p>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#f6f3ef] hover:bg-accent hover:text-white duration-200 py-2 px-4 w-[100px] text-xl">
            <i className="fa-solid fa-location-dot"></i>
            <p>{userData.height}</p>
          </div>
        </div>
        <hr className="h-[2px] bg-[#f6f3ef] mb-6" />
        <h1 className="text-center md:text-left font-semibold text-3xl mb-6">Wishlist</h1>
        {userData.wishlist.length === 0 ? (<p className="mb-6">Wishlist Empty</p>) : ""}
        <hr className="h-[2px] bg-[#f6f3ef] mb-6" />
        <div className="flex justify-center">
          <button onClick={handleLogout} className="bg-[#B23B3B] hover:bg-[#6b1d1d] duration-200 text-white py-2 px-12 font-semibold text-xl">Logout</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
