import React from "react";

function Hero() {
  return (
    <section className="bg-[#edf2f4] px-20 py-10 sm:py-[10rem]">
      <div className="text-center align-middle">
        <h1 className="text-[#2b2d42] lg:text-[96pt] md:text-[66pt] text-[38pt] font-extrabold">
          Consistency
        </h1>
        <p className="sub-title text-lg md:text-2xl lg:text-3xl mt-1">
          The best kind of success is continuous, every day, not occasional
        </p>
      </div>
      <div className="text-center md:mt-20 sm:mt-[3rem] mt-[2rem]">
        <button className="rounded-md py-2 lg:text-xl md:text-md text-sm px-5 font-bold text-white bg-[#2b2d42] hover:text-[#2b2d42] hover:bg-white transition ease-in-out duration-150 hover:scale-110 hover:shadow-md">
          Let's Start
        </button>
      </div>
    </section>
  );
}

export default Hero;
