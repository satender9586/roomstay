import React from 'react'
import Image from 'next/image'
import arrowIcon from "../../assests/Icons/arrowIcon.svg"
import graphIcon from "../../assests/Icons/graphIcon.svg"
import tabsIcon from "../../assests/Icons/tabsIcon.svg"
import paperEyeIcon from "../../assests/Icons/paperEyeIcon.svg"
import { ChevronRightIcon } from '@radix-ui/react-icons'

const FourBoxes = () => {
    return (
        <div className='container'>

        <div className='p-4'>
            <h2 className='font-heading font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl | mb-12 lg:mb-14'>Get the Pepper Advantage</h2>

            <div className='grid grid-cols-4 gap-4 xl:gap-4'>
                <Box bgColorHex={"#FFE599"} icon={arrowIcon} heading='Scale content creation' title='Create content at scale with on-demand expertise and generative AI' />
                <Box  bgColorHex={"#BCF5D7"} icon={paperEyeIcon} heading='Reduced CAC' title='Grow your organic presence and reduce dependence on paid channels with optimised content' />
                <Box bgColorHex={"#BCF5D7"} icon={tabsIcon} heading='Increase productivity' title='Bring your content, data, and SEO teams on a single platform that powers your content marketing lifecycle' />
                <Box bgColorHex={"#D4BBF6"} icon={graphIcon} heading='Measure content RoI' title='Prove and improve your content RoI by using our AI-powered platform integrated with the best-in-class tools' />
            </div>


        </div>
        </div>
    )
}

export default FourBoxes


const Box = ({ bgColorHex = "#FFE599", icon = arrowIcon, heading = "", title = "" }) => {
    const bgColor=`bg-[${bgColorHex}]`
    return (
        <div className={`rounded-lg col-span-4 sm:col-span-2 xl:col-span-1 | px-6 py-8 | flex flex-col justify-between | ${bgColor} `}>
            <div className='flex flex-col gap-6 md:gap-6 xl:gap-8'>
                <h3 className='font-heading font-normal text-5xl sm:text-4xl  md:text-5xl xl:text-4xl | max-w-col-3 md:mr-1 '>{heading}</h3>
                <p className='description | font-body text-lg sm:text-lg md:text-xl xl:text-xl'>{title}</p>
            </div>
            <div>
            <Image src={icon} alt='arrowicon' height={190} width={250} className='mt-8' style={{width:"auto",height:"auto"}} />
            </div>
            <div className='flex justify-end mt-16 items-center'>
                <div className='bg-[#070425] rounded-full p-2 '>
                    <ChevronRightIcon width={56} height={56} color='white' className='' />
                </div>
            </div>
        </div>
    )
}