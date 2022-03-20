import React from "react";

import { Images } from "@constants";
import { Button, SvgIcons } from "@components";

const { Arrow } = SvgIcons;

const NftMarketplace = () => {
  return (
    <section className="px-5 md:px-10 mlx:px-14 xl:px-28 py-12 gap-x-5 xl:gap-x-0 flex flex-col-reverse md:flex-row items-center container-fluid">
      <div className="flex-1 flex flex-col items-center md:block text-center md:text-left mt-3 md:mt-0">
        <h1 className="font-inter font-bold text-custom-primary text-2xl mlx:text-3xl xl:text-4xl leading-normal mlx:!leading-[3rem]">
          Discover and buy extraordinary NFTs from Marketplace built on BSC, FTM
          and Polygon
        </h1>
        <Button className="bg-transparent border border-solid border-custom-primary gap-x-2 hover:cursor-pointer mt-12 md:mt-6 group">
          <h1 className="font-mont font-normal text-custom-primary text-base">
            Learn More
          </h1>
          <div className="transform transition-all delay-100 ease-linear group-hover:translate-x-[0.35rem]">
            <Arrow />
          </div>
        </Button>
      </div>
      <img
        src={Images.NftCards.src}
        alt="Marketplace built on BSC"
        className="w-5/6 md:w-1/2 xl:w-auto"
      />
    </section>
  );
};

export default NftMarketplace;
