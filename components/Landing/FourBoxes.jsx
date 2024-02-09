import React from 'react'
import arrowIcon from "../../assests/Icons/arrowIcon.svg"
import graphIcon from "../../assests/Icons/graphIcon.svg"
import tabsIcon from "../../assests/Icons/tabsIcon.svg"
import paperEyeIcon from "../../assests/Icons/paperEyeIcon.svg"
import Image from 'next/image'
import { ChevronRightIcon } from '@radix-ui/react-icons'

const FourBoxes = () => {
    return (
        <div className='container my-10'>

        <div className='p-4'>
            <h2 className='font-heading font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl | mb-12 lg:mb-14'>Get the Pepper Advantage</h2>

            <div className='grid grid-cols-4 gap-4 xl:gap-4'>
                <Box bgColorHex={"bg-[#FFE599]"} icon={arrowIcon} heading='Scale content creation' title='Create content at scale with on-demand expertise and generative AI' />
                <Box  bgColorHex={"bg-[#FFCCE2]"} icon={paperEyeIcon} heading='Reduced CAC' title='Grow your organic presence and reduce dependence on paid channels with optimised content' />
                <Box bgColorHex={"bg-[#BCF5D7]"} icon={tabsIcon} heading='Increase productivity' title='Bring your content, data, and SEO teams on a single platform that powers your content marketing lifecycle' />
                <Box bgColorHex={"bg-[#D4BBF6]"} icon={graphIcon} heading='Measure content RoI' title='Prove and improve your content RoI by using our AI-powered platform integrated with the best-in-class tools' />
            </div>


        </div>
    )
}

export default FourBoxes


const Box = ({ colorHex = "#FFE599", icon = arrowIcon, heading = "", title = "" }) => {
    return (

        <div className={`rounded-lg | flex-[0.2] | px-6 py-8 | flex flex-col md:grid md:grid-cols-1 md:grid-rows-[100px_1fr_12rem_auto] gap-7 | bg-[#ffe599]`}>
            <h3 className='font-heading font-medium text-4xl | max-w-col-3 md:mr-1'>{heading}</h3>
            <p className='description | font-body text-xl'>{title}</p>
            <Image src={icon} alt='arrowicon' height={190} width={250} className='mt-8' />
            <div className='flex justify-end mt-16'>
                <div className='bg-[#070425] rounded-full p-2 '>
                    <ChevronRightIcon width={56} height={56} color='white' />
                </div>
            </div>
        </div>
    )
}