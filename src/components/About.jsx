import { useEffect } from "react";

import heroImage from "/assets/aboutHero.jpg";
import about1 from "/assets/about1.jpg";

const About = () => {

  useEffect(() => {
    document.title = `Nearest Shops | About Us`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto px-4 py-24">
        <h1 className="text-center font-bold text-6xl mb-6 text-accent">About</h1>
        <p className="text-center font-bold md:w-[60%] xl:w-[40%] mx-auto">Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
      </section>
      <section className="mb-12 bg-center bg-cover lg:bg-fixed mx-6 lg:mx-16 text-white relative py-[40px] md:py-[200px] px-4 lg:px-16 xl:px-[200px] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 text-center lg:text-left" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute w-full h-full bg-black opacity-60 top-0 left-0" />
        <div className="relative lg:basis-1/2">
          <h5 className="font-[200] mb-2">The Mission</h5>
          <p className="text-2xl lg:text-4xl font-semibold mb-6">At the heart of everything, we set out to offer the best quality.</p>
          <div className="h-[2px] w-[80px] bg-white" />
        </div>
        <div className="relative lg:basis-1/2">
          <p className="mb-6 font-semibold text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Aenean placerat facilisis ex, eu laoreet lorem convallis.</p>
          <p className="font-semibold text-xl">Fusce gravida justo a lectus tempus lacinia. Ut mollis scelerisque ultricies. Aenean facilisis efficitur magna, at feugiat massa bibendum at. Etiam ut venenatis urna</p>
        </div>
      </section>
      <section className="container mx-auto lg:px-24 py-12">
        <h1 className="text-center font-semibold text-4xl mb-6 text-accent">How It Started</h1>
        <p className="text-center md:w-[60%] xl:w-[40%] mx-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="bg-primary basis-1/2 px-16 py-16 xl:py-[120px] text-center md:text-left">
            <h4 className="font-bold text-3xl mb-6">Vel mauris molestie dignissim</h4>
            <p className="font-semibold w-[80%] mx-auto md:mx-0 mb-6">Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
            <p className="text-[#0009] text-sm">Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia.</p>
          </div>
          <div className="basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${about1})` }} />
        </div>
      </section>
    </>
  );
};

export default About;
