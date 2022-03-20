import React from "react";

import { FEATURES } from "@mock";

const Features = () => {
  return (
    <section className="px-5 md:px-10 mlx:px-14 xl:px-28 py-10 md:py-32 mlx:py-40 flex flex-col md:flex-row flex-wrap justify-between container-fluid">
      {FEATURES.map((data, i) => (
        <FeaturesCard key={i} {...data} />
      ))}
    </section>
  );
};

export default Features;

type FeatureCardProps = {
  title: String;
  subTitle: String;
};

const FeaturesCard: React.FC<FeatureCardProps> = ({ title, subTitle }) => {
  return (
    <div className="text-center w-full mt-12 md:mt-0 md:w-[31%] px-2">
      <h1 className="font-poppins font-semibold text-custom-accent text-lg mlx:text-[1.375rem]">
        {title}
      </h1>
      <h1 className="font-poppins font-medium text-custom-grey2 text-sm mlx:text-base mt-4 mlx:mt-6">
        {subTitle}
      </h1>
    </div>
  );
};
