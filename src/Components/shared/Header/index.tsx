import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";

import { Button, SvgIcons } from "@components";
import { MobileMenu, NavLink } from "./Micro";

const { TwitterLogoIcon, DiscordLogoIcon } = SvgIcons;

type Props = {
  accountAddress?: String;
  getAccount?: () => void;
};

const Header: React.FC<Props> = ({ accountAddress, getAccount }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuToggler = () => setOpenMenu(!openMenu);

  useEffect(() => {
    // getAccount();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>ONE-OF-BUSINESS</title>
      </Head>

      <header className="flex justify-between items-center px-5 md:px-10 mlx:px-14 xl:px-28 py-11 container-fluid">
        <h1 className="font-mont font-extrabold text-custom-primary text-lg xl:text-[1.375rem] leading-7">
          ONE-OF-BUSINESS
        </h1>

        <nav className="hidden mlx:block flex-1">
          <ul className="flex items-center justify-center gap-x-10 xl:gap-x-14">
            <NavLink href="/" title="Home" />
            <NavLink href="/features" title="Features" />
            <NavLink href="/about" title="About Us" />
          </ul>
        </nav>

        <div className="hidden mlx:flex items-center justify-between gap-x-7 xl:gap-x-9">
          <button className="outline-none">
            <TwitterLogoIcon />
          </button>
          <button className="outline-none">
            <DiscordLogoIcon />
          </button>
          <Button
            onClick={getAccount}
            className="bg-transparent border border-solid border-custom-primary"
          >
            <h1 className="font-mont font-normal text-custom-primary text-base">
              {!!accountAddress
                ? `${accountAddress.slice(0, 6)}...${accountAddress.slice(
                    35,
                    accountAddress.length - 1
                  )}`
                : "Connect Wallet"}
            </h1>
          </Button>
        </div>

        {/* harmburger menu */}
        <button onClick={menuToggler} className="mlx:hidden">
          <div className="w-7 h-[2px] rounded-radius11 bg-custom-accent"></div>
          <div className="mt-[6px] ml-auto w-5 h-[2px] rounded-radius11 bg-custom-accent"></div>
        </button>
      </header>

      {openMenu && (
        <MobileMenu
          {...{ menuToggler, openMenu, getAccount, accountAddress }}
        />
      )}
    </Fragment>
  );
};

export default Header;
