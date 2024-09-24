import React from "react";
import arrowIcon from "../../../assests/Icons/arrowIcon.svg";
import Image from "next/image";
import footerUmg from "../../../assests/Images/footerImg.jpg";
import { TbMail } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-[1px] relative w-full">
      {/* Image with content overlay */}
      <div className="relative hidden md:block">
        <Image
          src={footerUmg}
          alt="Footer Image"
          className="w-full sm:h-[500px] object-cover h-full "
        />
      </div>

      {/* Footer Columns */}
      <div className="absolute bg-center snap-center text-center sm:top-0 md:top-10 xl:top-28  self-center  w-full">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div className="flex justify-center gap-20">
            <div>
              <h3 className="text-lg font-semibold">Jobs</h3>
              <ul className="mt-4 space-y-2">
                <li className=" hover:scale-105 ease-in-out duration-500 cursor-pointer">Enquiry</li>
                <li className=" hover:scale-105 ease-in-out duration-500 cursor-pointer">Others</li>
                <li className=" hover:scale-105 ease-in-out duration-500 cursor-pointer">Terms</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="mt-4 space-y-2">
                <li className=" hover:scale-105 ease-in-out duration-500 cursor-pointer">Contact</li>
                <li className=" hover:scale-105 ease-in-out duration-500 cursor-pointer">Blog</li>
                <li className=" hover:scale-105 ease-in-out duration-500 cursor-pointer">Help</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex justify-center sm:justify-start items-center md:items-start flex-col w-full ">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="mt-4 space-y-2 flex flex-col items-start justify-center  ">
              <li className="leading-6">
                <div className="flex items-center gap-4  hover:scale-105 ease-in-out duration-500 cursor-pointer ">
                  <div className="flex items-center gap-[1px]">
                    <TbMail />
                    <p>suraj.kumar.corporate@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="leading-6">
                <div className="flex items-center gap-4  hover:scale-105 ease-in-out duration-500 cursor-pointer">
                  <div className="flex items-center gap-[1px]">
                    <TbMail />
                    <p>jai.singh.corporate@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="leading-6">
                <div className="flex items-center gap-4  hover:scale-105 ease-in-out duration-500 cursor-pointer">
                  <div className="flex items-center gap-[1px]">
                    <TbMail />
                    <p>sksatender59@gmail.com</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
