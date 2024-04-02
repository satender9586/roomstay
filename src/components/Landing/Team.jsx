import React from "react";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import jaiImage from "../../../assests/Images/jai.jpeg";
import surajImage from "../../../assests/Images/suraj.jpg";
import satenderImage from "../../../assests/Images/satender.jpg";
import Image from "next/image";

const Team = () => {
  return (
    <div
      id="team"
      className="section relative pt-20 pb-8 md:pt-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
            <span className="font-light">Our</span> Team
          </h2>
        </header>
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          <Profile
            name="Jai Singh"
            role="Frontend developer"
            image={jaiImage}
          />
          <Profile
            name="Suraj kumar"
            role="Frontend developer"
            image={surajImage}
          />
          <Profile
            name="Satender"
            role="Full stack developer"
            image={satenderImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;

const Profile = ({ name, role, image = "" }) => {
  return (
    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
      <div
        className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp visibility: visible; animation-duration: 1s; animation-name: fadeInUp"
        data-wow-duration="1s"
      >
        <div className="relative overflow-hidden px-6">
          <Image
            src={image}
            className="max-w-full h-auto mx-auto rounded-full bg-gray-50"
            alt="title image"
          />
        </div>
        <div className="pt-6 text-center">
          <p className="text-lg leading-normal font-bold mb-1">{name}</p>
          <p className="text-gray-500 leading-relaxed font-light">{role}</p>
          <div className="mt-2 mb-5 space-x-2 flex justify-center">
            <a
              className="hover:text-blue-700"
              aria-label="Twitter link"
              href="#"
            >
              <InstagramLogoIcon />
            </a>
            <a
              className="hover:text-blue-700"
              aria-label="Facebook link"
              href="#"
            >
              <LinkedInLogoIcon />
            </a>
            <a
              className="hover:text-blue-700"
              aria-label="Instagram link"
              href="#"
            >
              <DiscordLogoIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
