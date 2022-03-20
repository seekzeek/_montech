import React from "react";

type NftSectiondProps = {
  imgSrc: string;
  titleH: string;
  titleOne: String;
  subTitleOne: String;
  titleTwo: String;
  subTitleTwo: String;
  reverse?: Boolean;
};

const NftSectioned: React.FC<NftSectiondProps> = ({
  imgSrc,
  titleH,
  titleOne,
  subTitleOne,
  titleTwo,
  subTitleTwo,
  reverse,
}) => {
  return (
    <section
      className={`px-5 md:px-10 mlx:px-14 xl:px-28 py-14 md:py-24 flex flex-col md:flex-col-reverse gap-x-20 xl:gap-x-28 items-start ${
        reverse ? "mlx:flex-row-reverse" : "mlx:flex-row"
      } container-fluid`}
    >
      <div className="w-full md:mt-20 mlx:mt-0 mlx:w-[55%] xl:w-[60%]">
        <img src={imgSrc} alt={titleH} className="w-full h-full" />
      </div>

      <div className="space-y-14 flex-1 text-center mlx:text-left mt-20 md:mt-0">
        <h1 className="font-inter font-bold text-2xl md:text-3xl xl:text-4xl leading-normal mlx:leading-snug xl:leading-[2.8rem] text-custom-primary md:px-24 mlx:px-0">
          {titleH}
        </h1>

        <div className="mlx:mt-14 flex flex-col md:flex-row items-center md:items-end gap-x-12 mlx:block">
          <div>
            <h1 className="font-mont font-semibold mlx:font-bold text-xl text-custom-accent mlx:text-custom-primary">
              {titleOne}
            </h1>
            <h1 className="font-mont font-normal text-lg text-custom-primary mt-6">
              {subTitleOne}
            </h1>
          </div>

          <div className="mt-10 mlx:mt-14">
            <h1 className="font-mont font-semibold mlx:font-bold text-xl text-custom-accent mlx:text-custom-primary">
              {titleTwo}
            </h1>
            <h1 className="font-mont font-normal text-lg text-custom-primary mt-6">
              {subTitleTwo}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftSectioned;
