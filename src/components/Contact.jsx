import { useEffect } from "react";

const Contact = () => {
  
  useEffect(() => {
    document.title = `Nearest Shops | Contact Us`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container mx-auto px-4 py-24">
      <h1 className="text-center font-bold text-6xl mb-6 text-accent">Contact</h1>
      <p className="text-center font-bold md:w-[60%] xl:w-[40%] mx-auto mb-20">Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
      <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
        <div className="hidden lg:block absolute bg-primary h-[120%] w-[60%] left-0" />
        <div className="lg:basis-1/2 relative lg:pl-[100px] bg-primary lg:bg-transparent text-center lg:text-left p-6">
          <h3 className="mb-6 font-semibold text-4xl">Get in touch</h3>
          <p className="mb-6 w-[70%] text-sm text-[#0009] mx-auto lg:mx-[0px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
          <ul className="space-y-4">
            <li>
              <i className="fa-solid fa-location-dot mr-2"></i>
              <span className="underline">123 Fifth Avenue, New York, NY 10160</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot mr-2"></i>
              <span className="underline">123 Fifth Avenue, New York, NY 10160</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot mr-2"></i>
              <span className="underline">123 Fifth Avenue, New York, NY 10160</span>
            </li>
          </ul>
        </div>
        <div className="lg:basis-1/4 shadow-xl p-8 relative bg-white">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <input className="border py-2 px-1 outline-none" type="text" placeholder="First Name" />
            <input className="border py-2 px-1 outline-none" type="text" placeholder="Last Name" />
          </div>
          <div className="flex mb-4">
            <input className="border py-2 px-1 outline-none grow" type="text" placeholder="Your Email Address" />
          </div>
          <div className="flex">
            <textarea className="border py-2 px-1 outline-none grow resize-none h-[150px]" placeholder="Message"></textarea>
          </div>
          <button className="bg-secondary hover:bg-accent duration-200 text-white py-2 px-8 mt-4">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
