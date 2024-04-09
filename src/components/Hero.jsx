import { Link } from "react-router-dom"

import heroImage from "/assets/hero.png"

const Hero = () => {
  return (
    <section className='bg-primary'>
      <div className='container mx-auto px-4 py-4 md:py-0 flex items-center justify-center gap-[100px] xl:gap-[200px]'>
        <div className="text-center md:text-left">
          <span className="font-[300] text-secondary">Fashion</span>
          <h1 className="mt-2 mb-6 font-black text-4xl xl:text-6xl">Slick. Modern. <br /> Awesome.</h1>
          <Link to="/collection" className="bg-secondary hover:bg-accent duration-200 text-white py-3 px-7 block w-fit mx-auto md:mx-[0px]">Shop Collection</Link>
        </div>
        <div className="hidden md:block max-w-[400px] xl:max-w-[600px] relative">
          <img className="relative z-[2]" src={heroImage} alt="" />
          <div className="size-[500px] rounded-full bg-white absolute top-0 right-0" />
          <div className="size-[300px] rounded-full bg-white absolute bottom-0 left-0" />
        </div>
      </div>
    </section>
  )
}

export default Hero