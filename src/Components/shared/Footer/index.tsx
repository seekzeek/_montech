import React from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <footer className="bg-custom-grey3">
      <div className="px-5 md:px-10 mlx:px-14 xl:px-24 pt-16 pb-3 md:pb-12 w-full bg-custom-grey3 mt-14 container-fluid">
        <div className="text-center md:w-[64%] mx-auto pb-8 md:pb-16">
          <h1 className="font-mont font-extrabold text-custom-primary text-lg md:text-[1.375rem] leading-7">
            ONE-OF-BUSINESS
          </h1>
          <h1 className="font-inter font-normal text-custom-primary text-sm mlx:text-base text-center mt-6 md:mt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio odio
            aliquet vulputate ac ipsum, duis. Et cursus lorem dui sit velit.
            Non, fames mauris egestas adipiscing. Molestie nibh turpis porttitor
            iaculis.
          </h1>
        </div>

        <div className="border-[0.1px] border-custom-grey2 h-0 w-full"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center py-6">
          <h1 className="font-mont font-normal text-[10px] md:text-[12px] mlx:text-sm text-custom-primary mt-12 md:mt-0">
            © {moment(new Date()).format("YYYY")} by Freedom. All rights
            reserved
          </h1>
          <div>
            <ul className="flex gap-x-5 mlx:gap-x-10 items-center">
              <FooterLink title="Terms of Service" />
              <FooterLink title="Privacy policy" />
              <FooterLink title="Cookie Policy" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLink = ({ title }) => {
  return (
    <li>
      <a className="font-aventir font-normal text-[12px] mlx:text-sm text-custom-primary">
        {title}
      </a>
    </li>
  );
};
