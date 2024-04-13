import { Link } from "react-router-dom";

import image from "/assets/features3.jpg";

const Features3 = () => {
  return (
    <section className="container mx-auto px-4 pb-16 flex flex-col-reverse md:flex-row md:items-center">
      <div className="bg-primary md:basis-1/2">
        <img className="md:w-[80%] xl:w-[70%]  md:translate-y-[-50px] xl:translate-x-[50px]" src={image} alt="" />
      </div>
      <div className="relative py-16 px-7 md:px-0 md:basis-1/2">
        <div className="absolute bg-primary w-[50%] h-full top-0 left-0 md:hidden" />
        <div className="relative md:translate-x-[-50px] xl:translate-x-[-100px]">
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-6">Spring Summer Collection</h3>
          <p className="mb-8 text-[#0009] text-sm lg:text-base font-[400] max-w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque.</p>
          <Link to="/collection" className="bg-secondary hover:bg-accent duration-200 text-white py-3 px-7 ">
            See Whole Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features3;
