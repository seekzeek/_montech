import React from "react";

import { NFT_COLLECTIONS } from "@mock";
import Newsletter from "./Newsletter";

const NftCollections = (props) => {
  return (
    <section className="pt-20 md:pt-36 pb-28 w-full bg-img-nft">
      <div className="px-10 mlx:px-28 text-center container-fluid">
        <h1 className="font-mont font-semibold text-custom-primary text-4xl md:text-5xl leading-tight">
          Checkout Our NFT Collections
        </h1>
        <h1 className="font-poppins font-medium text-custom-grey1 text-base mt-7">
          Here are some of the top projects we’ve launched.
        </h1>
      </div>
      <div className="px-5 md:px-10 snap-x snap-mandatory pt-20 overflow-auto no-scrollbar flex gap-x-11 container-fluid">
        {NFT_COLLECTIONS.map((data, i) => (
          <NftCollectionCard key={i} {...data} />
        ))}
      </div>

      <div className=" md:px-14 xl:px-28 pt-44 md:pt-64 md:pb-7 container-fluid">
        <Newsletter />
      </div>
    </section>
  );
};

export default NftCollections;

type Props = {
  src: string;
  title: String;
  content: String;
};

const NftCollectionCard: React.FC<Props> = ({ src, title, content }) => {
  return (
    <div className="snap-center flex-shrink-0 w-full md:w-[390px] pb-9 rounded-radius16 bg-custom-primary bg-opacity-10 overflow-hidden">
      <div className="w-full relative">
        <img
          src={src}
          alt="music studio"
          className="w-full h-[180px] md:h-[160px] object-cover object-top"
        />
        <div className="w-[90px] h-[90px] rounded-[100px] bg-custom-primary bg-opacity-70 flex justify-center items-center absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <img
            src={src}
            alt="music studio"
            className="w-[65px] h-[65px] rounded-[100px] object-cover object-top"
          />
        </div>
      </div>
      <div className="text-center px-12 mt-14">
        <h1 className="font-mont font-bold text-xl md:text-2xl text-custom-primary">
          {title}
        </h1>
        <h1 className="font-poppins font-medium text-base md:text-lg text-custom-grey1 mt-5">
          {content}
        </h1>
      </div>
    </div>
  );
};
