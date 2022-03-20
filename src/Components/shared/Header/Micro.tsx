import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button, SvgIcons } from "@components";

const { TwitterLogoIcon, DiscordLogoIcon } = SvgIcons;

type NavLinkProps = {
  title?: String;
  href?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ title, href }) => {
  const router = useRouter();

  return (
    <Link href={href ? href : "/"}>
      <li className="group list-none">
        <a
          className={`font-mont text-sm xl:text-base font-semibold tracking-[0.2px] capitalize group-hover:cursor-pointer group-hover:text-custom-accent ${
            router.asPath === href
              ? "text-custom-accent"
              : "text-custom-primary"
          }`}
        >
          {title}
        </a>
      </li>
    </Link>
  );
};

type MenuProps = {
  openMenu?: Boolean;
  accountAddress?: String;
  menuToggler?: () => void;
  getAccount?: () => void;
};

export const MobileMenu: React.FC<MenuProps> = ({
  menuToggler,
  getAccount,
  accountAddress,
  openMenu,
}) => {
  useEffect(() => {
    openMenu && (document.body.style.overflow = "hidden");

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [openMenu]);

  return (
    <div className="bg-custom-bg-color px-7 md:px-10 fixed top-0 left-0 z-50 w-full h-screen mlx:hidden">
      <div
        className="h-screen w-full relative overflow-y-auto no-scrollbar"
        style={{
          background: "url(/assets/images/bg_patterns.png) no-repeat",
          backgroundSize: "cover",
        }}
      >
        <header className="py-11 flex justify-between items-center">
          <Link href="/">
            <h1 className="font-mont font-extrabold text-custom-primary text-lg xl:text-[1.375rem] leading-7">
              ONE-OF-BUSINESS
            </h1>
          </Link>

          <button onClick={menuToggler}>
            <div className="w-7 h-[2px] rounded-radius11 bg-custom-accent ml-1 rotate-45 z-10">
              <div className="ml-auto w-7 h-[2px] rounded-radius11 bg-custom-accent rotate-90 z-30"></div>
            </div>
          </button>
        </header>

        <div className="flex flex-col items-center justify-between gap-y-12 mt-10">
          <MobileNavLink href="/" title="Home" onClick={menuToggler} />
          <MobileNavLink
            href="/features"
            title="Features"
            onClick={menuToggler}
          />
          <MobileNavLink href="/about" title="About Us" onClick={menuToggler} />

          <div className="flex gap-x-8 items-center">
            <button onClick={menuToggler} className="outline-none">
              <TwitterLogoIcon />
            </button>
            <button onClick={menuToggler} className="outline-none">
              <DiscordLogoIcon />
            </button>
          </div>

          <Button
            onClick={() => {
              getAccount();
              menuToggler();
            }}
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
      </div>
    </div>
  );
};

type MobileNavLinkProps = {
  title?: String;
  href?: string;
  onClick?: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  title,
  href,
  onClick,
}) => {
  const router = useRouter();

  return (
    <Link href={href ? href : "/"}>
      <li onClick={onClick} className="group list-none">
        <a
          className={`font-mont text-base md:text-xl md:uppercase font-semibold tracking-[0.2px] capitalize group-hover:cursor-pointer group-hover:text-custom-accent ${
            router.asPath === href
              ? "text-custom-accent"
              : "text-custom-primary"
          }`}
        >
          {title}
        </a>
      </li>
    </Link>
  );
};
