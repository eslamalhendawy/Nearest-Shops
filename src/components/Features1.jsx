import { Link } from "react-router-dom";
import image1 from "/assets/collection-02.jpg";
import image2 from "/assets/sectionImage.jpg";

const Features1 = () => {
  return (
    <section className="container mx-auto px-4 pb-16 flex flex-col md:flex-row justify-center gap-6">
      <div>
        <div className="mb-10">
          <img src={image1} alt="" />
        </div>
        <h3 className="text-center font-semibold text-3xl xl:text-4xl max-w-[560px] mx-auto mb-10">The base collection - Ideal every day.</h3>
        <Link to="/collection" className="bg-secondary hover:bg-accent duration-200 text-white py-3 px-7 block w-fit mx-auto">Shop Now</Link>
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
    </section>
  )
}

export default Features1