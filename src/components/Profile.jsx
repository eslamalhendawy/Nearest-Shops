import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { userData, setUserData } = useAppContext();
  const navigate = useNavigate();

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
  }

  return (
    <section className="minHeight">
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
      <p>{userData.height}</p>
      <p>{userData.weight}</p>
      <p>{userData.address}</p>
      <p>{userData.role}</p>
      <img src={userData.avatar} alt="" />
      <button className="p-4 bg-red-500 text-white" onClick={handleLogout}>Logout</button>
    </section>
  )
}

export default Profile