import React from "react";

import { Images } from "@constants";

const NftGreenPlatform = (props) => {
  return (
    <section className="px-5 md:px-20 mlx:px-28 xl:px-40 py-24 flex flex-col-reverse md:flex-row gap-x-14 items-center container-fluid">
      <div className="flex-1 text-center md:text-left mt-20 md:mt-0">
        <h1 className="font-mont font-semibold text-[1.375rem] text-custom-green-color">
          Built On Tezos
        </h1>
        <h1 className="font-mont font-semibold text-2xl mlx:text-4xl xl:text-[2.80rem] text-custom-primary xl:leading-[56px] mt-1">
          The Green NFT platform that connects artists and fans.
        </h1>
        <h1 className="font-mont font-normal text-sm mlx:text-base xl:text-lg text-custom-grey4 leading-6 mt-4 mlx:w-4/5">
          OneOf is built on the Tezos blockchain, an energy efficient
          proof-of-stake network. OneOf chose Tezos because of its energy
          efficient design as well as its unique ability to self-amend, allowing
          it to undergo regular upgrades that keep it at the cutting edge of
          innovation.
        </h1>
      </div>
      <div className="w-full flex items-center md:w-1/3 md:flex-col">
        <img
          src={Images.Gold.src}
          alt="Track all your reports, review sales and keep growing"
          className="w-1/3 md:w-full md:h-full -rotate-90 md:rotate-0"
        />
        <img
          src={Images.Diamond.src}
          alt="Track all your reports, review sales and keep growing"
          className="w-1/3 md:w-full md:h-full -rotate-90 md:rotate-0"
        />
        <img
          src={Images.Silver.src}
          alt="Track all your reports, review sales and keep growing"
          className="w-1/3 md:w-full md:h-full -rotate-90 md:rotate-0"
        />
      </div>
    </section>
  );
};

export default NftGreenPlatform;
