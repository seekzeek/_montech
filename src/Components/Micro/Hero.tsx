import React, { useEffect, useState, Fragment } from "react";

import { Images } from "@constants";
import { Button } from "@components";

type Props = {
  accountAddress?: String;
  alertToggler?: () => void;
  getAccount?: () => void;
  isAlert: Boolean;
};

const Hero: React.FC<Props> = ({
  accountAddress,
  isAlert,
  getAccount,
  alertToggler,
}) => {
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    if (window.innerWidth && window.innerHeight) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  return (
    <Fragment>
      {isAlert && accountAddress && (
        <Alert {...{ accountAddress, alertToggler }} />
      )}

      <div className="w-full px-5 md:px-10 mlx:px-14 xl:px-28 pt-6 md:pt-12 text-center container-fluid">
        <h1 className="font-mont font-semibold text-custom-primary text-2xl sm:text-4xl mlx:text-6xl xl:text-7xl leading-relaxed md:leading-snug mlx:leading-[5rem] xl:leading-[5.5rem]">
          Reciprocal Interchange, <br /> Mutual Trading
        </h1>
        <h1 className="font-mont font-normal text-custom-primary text-sm md:text-base mlx:text-lg mt-6 mb-8 w-full md:w-2/4 mx-auto leading-loose md:leading-normal mlx:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis ut
          augue arcu, dui lacinia tempor, tristique morbi. Nunc velit
        </h1>
        <Button
          onClick={getAccount}
          className="bg-custom-accent hover:bg-opacity-90 transform transition-colors !h-[65px] mx-auto"
        >
          <h1 className="font-mont font-semibold text-custom-primary text-base">
            {!!accountAddress && innerWidth <= 960

              ? `${accountAddress.slice(0, 6)}...${accountAddress.slice(
                  35,
                  accountAddress.length - 1
                )}`
              : !!accountAddress && innerWidth >= 960
              ? "Connected"
              : "Connect Wallet"}
          </h1>
        </Button>
        <img
          src={innerWidth <= 640 ? Images.HeroImg.src : Images.HeroImage.src}
          alt="hero image"
          className="w-full h-[200px] md:w-auto md:h-auto mx-auto md:mt-7"
        />
      </div>
    </Fragment>
  );
};

export default Hero;

type AlertProps = {
  accountAddress?: String;
  alertToggler?: () => void;
};

const Alert: React.FC<AlertProps> = ({ accountAddress, alertToggler }) => {
  return (
    <div
      onClick={() => alertToggler()}
      className="w-3/4 md:w-[fit-content] mx-auto py-2 md:py-3 px-6 flex justify-center md:justify-between text-center gap-x-5 items-center bg-custom-primary rounded-radius16 md:rounded-radius35"
    >
      <h1 className="flex-1 font-inter font-medium text-custom-secondary text-[10px] md:text-base">
        <span className="hidden md:inline-block text-custom-green-color md:text-sm">
          Connected with &nbsp;
        </span>
        {accountAddress}
      </h1>

      <button className="hidden md:block">
        <div className="w-5 h-[2px] rounded-radius11 bg-custom-secondary ml-1 rotate-45 z-10">
          <div className=" ml-auto w-5 h-[2px] rounded-radius11 bg-custom-secondary rotate-90 z-30"></div>
        </div>
      </button>
    </div>
  );
};
