import React from "react";

import { Images } from "@constants";

const Newsletter = (props) => {
  return (
    <div className="bg-transparent md:bg-custom-primary md:bg-opacity-10 rounded-radius35 flex items-center justify-between mlx:gap-x-12 xl:gap-x-24 px-5 md:px-14 xl:px-24 md:py-14">
      <img
        src={Images.Newsletter.src}
        alt="Join our newsletter"
        className="hidden mlx:block h-[260px] w-[400px] xl:h-[346px] xl:w-[470px]"
      />
      <div className="w-full flex flex-1 flex-col justify-center items-center text-center mlx:block mlx:text-left">
        <h1 className="font-mont font-bold text-[2.87rem] leading-[56px] text-custom-primary">
          Join our <br /> newsletter
        </h1>
        <h1 className="font-mont font-normal text-base text-custom-primary md:w-2/3 mt-5">
          No spam. Only latest Oneof news worth your attention.
        </h1>

        <div className="w-full md:w-3/4 mlx:w-auto bg-custom-grey3 h-[58px] rounded-radius16 mt-14 md:mt-10 flex">
          <input
            type="email"
            id="newsletter"
            name="newsletter"
            placeholder="Your Email"
            className="outline-none px-5 flex-1 h-full bg-transparent font-mont font-normal text-sm text-custom-primary"
          />
          <button className="w-[117px] h-full bg-custom-accent hover:bg-opacity-90 flex justify-center items-center rounded-tr-radius16 rounded-br-radius16">
            <h1 className="font-aventir text-sm text-custom-primary">
              Subscribe
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
