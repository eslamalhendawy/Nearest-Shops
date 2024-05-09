import {Link} from "react-router-dom";
import image from "/assets/loginImage.svg";

const Login = () => {
  return (
    <section className="flex items-center justify-center px-6 py-20">
      <div className="md:flex items-stretch shadow-xl bg-white rounded-lg overflow-hidden">
        <div className="hidden basis-1/2 bg-primary p-8 md:flex items-center justify-normal">
          <img src={image} alt="" />
        </div>
        <div className="basis-1/2 p-8">
          <h1 className="text-2xl xl:text-3xl font-bold text-center mb-8 text-secondary">Welcome Back !</h1>
          <div className="flex flex-col">
            <label className="text-secondary font-semibold text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="email" id="email" />
          </div>
          <div className="flex flex-col">
            <label className="text-secondary font-semibold text-lg mb-2" htmlFor="password">
              Password
            </label>
            <input className="outline-none mb-4 bg-[#A69E97] text-secondary p-2 rounded-lg" type="password" id="password" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-8">
            <div>
              <input type="checkbox" id="remember" />
              <label className="text-secondary ml-2" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-secondary">
              Forgot Password?
            </a>
          </div>
          <button className="bg-secondary text-white py-2 px-8 rounded-xl block mx-auto">Login</button>
          <div className="mt-12">
            <p className="text-center">
              Don&apos;t have an account? <Link to="/sign-up" className="text-secondary">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
