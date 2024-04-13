const Review = () => {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <h3 className="text-center font-semibold text-3xl mb-6">Reviews</h3>
      <p className="max-w-[600px] mx-auto font-bold underline mb-6">“ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”</p>
      <div className="flex items-center justify-center gap-1">
        <i className="fa-solid fa-star text-[#edad56]"></i>
        <i className="fa-solid fa-star text-[#edad56]"></i>
        <i className="fa-solid fa-star text-[#edad56]"></i>
        <i className="fa-solid fa-star text-[#edad56]"></i>
        <i className="fa-solid fa-star text-[#edad56]"></i>
      </div>
      <p className="text-center text-[14px] font-[300]">Jane Oliver</p>
    </section>
  );
};

export default Review;
