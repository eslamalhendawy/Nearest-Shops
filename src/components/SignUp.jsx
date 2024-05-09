import { Link } from "react-router-dom";
import image from "/assets/loginImage.svg";

const SignUp = () => {
  return (
    <section className="flex items-center justify-center px-6 py-20">
      <div className="lg:flex items-stretch shadow-xl bg-white rounded-lg overflow-hidden">
        <div className="hidden basis-1/2 bg-primary p-8 lg:flex items-center justify-normal">
          <img src={image} alt="" />
        </div>
        <div className="basis-1/2 p-8">
          <h1 className="text-2xl xl:text-3xl font-bold text-center mb-8 text-secondary">Welcome To Nearest Shops !</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col grow">
              <label className="text-secondary font-semibold text-lg mb-2" htmlFor="name">
                Name
              </label>
              <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="text" id="name" />
            </div>
            <div className="flex flex-col grow">
              <label className="text-secondary font-semibold text-lg mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="text" id="phone" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-secondary font-semibold text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="text" id="email" />
          </div>
          <div className="flex flex-col">
            <label className="text-secondary font-semibold text-lg mb-2" htmlFor="password">
              Password
            </label>
            <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="password" id="password" />
          </div>
          <div className="flex flex-col">
            <label className="text-secondary font-semibold text-lg mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="password" id="confirmPassword" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex flex-col grow">
              <label className="text-secondary font-semibold text-lg mb-2" htmlFor="height">
                Height <span className="text-sm font-[400]">(in cm)</span>
              </label>
              <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="text" id="height" />
            </div>
            <div className="flex flex-col grow">
              <label className="text-secondary font-semibold text-lg mb-2" htmlFor="weight">
                Weight <span className="text-sm font-[400]">(in kg)</span>
              </label>
              <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="text" id="weight" />
            </div>
          </div>
          <button className="bg-secondary hover:bg-accent duration-200 text-white py-2 px-8 rounded-xl block mx-auto">Sign Up</button>
          <div className="mt-12">
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-secondary">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
