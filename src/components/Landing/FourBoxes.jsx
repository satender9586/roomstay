import React from 'react';
import arrowIcon from "../../../assests/Icons/arrowIcon.svg";
import graphIcon from "../../../assests/Icons/graphIcon.svg";
import tabsIcon from "../../../assests/Icons/tabsIcon.svg";
import paperEyeIcon from "../../../assests/Icons/paperEyeIcon.svg";
import Image from 'next/image';
import { ChevronRightIcon } from '@radix-ui/react-icons';

const FourBoxes = () => {
    return (
        <div className=''>
            <div className='container py-12 md:py-20'>
                <h2 className='font-heading font-medium text-3xl md:text-4xl lg:text-6xl mb-8 lg:mb-14 text-center'>
                    Get Booking Advantage
                </h2>

                <div className='flex flex-col lg:flex-row flex-wrap items-center gap-8 lg:gap-4 justify-center'>
                    <Box colorHex={"bg-[#FFE599]"} icon={arrowIcon} heading='Easy Booking Process' title='Say goodbye to complicated booking procedures. With our user-friendly interface, booking a room is as easy as a few clicks.' />
                    <Box colorHex={"bg-[#FFCCE2]"} icon={paperEyeIcon} heading='Real-Time Availability' title='No more last-minute surprises! Our system provides real-time updates on room availability.' />
                    <Box colorHex={"bg-[#BCF5D7]"} icon={tabsIcon} heading='Secure Payment Options' title='Your security is our top priority. We offer a variety of secure payment options to choose from.' />
                    <Box colorHex={"bg-[#D4BBF6]"} icon={graphIcon} heading='24/7 Customer Support' title='Our dedicated customer support team is available round-the-clock to address any queries or concerns you may have.' />
                </div>
            </div>
        </div>
    );
};

export default FourBoxes;

const Box = ({ colorHex = "bg-[#FFE599]", icon = arrowIcon, heading = "", title = "" }) => {
    return (
        <div className={`rounded-lg flex-[0.2] px-6 py-8 flex flex-col  md:grid md:grid-cols-1  hover:scale-105 ease-in-out duration-500 md:grid-rows-[100px_1fr_auto_auto] ${colorHex} w-full sm:w-5/6 lg:w-[22%] `} >
            <h3 className='font-heading font-medium text-4xl lg:text-3xl'>{heading}</h3>
            <p className='font-body text-base lg:text-xl mt-4 font-serif'>{title}</p>
            <Image src={icon} alt='icon' height={120} width={150} className='mt-4' />
            <div className='flex justify-end mt-auto'>
                <div className='bg-[#070425] rounded-full p-2'>
                    <ChevronRightIcon width={36} height={36} color='white' />
                </div>
            </div>
        </div>
    );
};
