import React from 'react'
import arrowIcon from "../../assests/Icons/arrowIcon.svg"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-[#ffa436] py-12'>

            <div className='container | grid grid-cols-5 | py-4  sm:py-6 md:py-8 lg:py-10 xl:py-12'>

                <div className=' flex justify-center | text-white | row-span-2 md:row-span-1 col-span-5  sm:col-span-1'>
                    <Image src={arrowIcon} alt='arrowicon' height={190} width={250} style={{ width: "auto", height: "auto" }} className='w-[150px] xl:w-[250px]' />

                </div>
                <div className=' flex justify-center lg:justify-center | text-white py-4 sm:py-2  | col-span-5  sm:col-span-2 md:col-span-1'>
                    <div className=' flex flex-col gap-3 text-xs md:text-sm lg:text-lg xl:text-xl'>
                        <div>Jobs</div>
                        <div>Enquiry</div>
                        <div>Others</div>
                        <div>Terms</div>
                    </div>
                </div>
                <div className=' flex justify-center lg:justify-center | text-white py-4 sm:py-2 | col-span-5 sm:col-span-2 md:col-span-1'>
                    <div className=' flex flex-col gap-3 text-xs md:text-sm lg:text-lg xl:text-xl'>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Blog</div>
                        <div>Help</div>
                    </div>
                </div>

                <div className='flex md:hidden justify-center | text-white py-4 sm:py-2 | col-span-5 sm:col-span-2 md:col-span-2 '>
                    <div className=' flex flex-col gap-3 text-xs md:text-sm lg:text-lg xl:text-xl'>
                        <div className='leading-6'>Linked In</div>
                        <div className='leading-6'>Twitter</div>
                        <div className='leading-6'>Facebook</div>
                    </div>
                </div>

                <div className=' flex justify-center | text-white py-4 sm:py-2 | col-span-5 sm:col-span-2 md:col-span-2 '>
                    <div className=' flex flex-col gap-3 text-xs md:text-sm lg:text-lg xl:text-xl'>
                        <div className='leading-6'>Satender - sksatender59@gmail.com</div>
                        <div className='leading-6'>Jai Singh - jai.singh.corporate@gmail.com</div>
                        <div className='leading-6'>Suraj - suraj.kumar.corporate@gmail.com</div>
                    </div>
                </div>


            </div>


        </footer>
    )
}

export default Footer