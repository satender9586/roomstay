import React from 'react'
import arrowIcon from "../../assests/Icons/arrowIcon.svg"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-slate-400'>

            <div className='container | bg-[#1a181e] | grid grid-cols-5'>
                <div className=' flex justify-end | py-12 text-white'>
                    <Image src={arrowIcon} alt='arrowicon' height={190} width={250} style={{ width: "auto", height: "auto" }} />

                </div>
                <div className=' flex justify-end | py-12 text-white'>
                    <div className=' flex flex-col gap-2'>
                        <div className='text-xl leading-6'>Business Tools</div>
                        <div className='text-xl leading-6'>Business Tools</div>
                        <div className='text-xl leading-6'>Business Tools</div>
                        <div className='text-xl leading-6'>Business Tools</div>
                        <div className='text-xl leading-6'>Business Tools</div>
                    </div>
                </div>
                <div className=' flex justify-end | py-12 text-white'>
                    <div className=' flex flex-col gap-2'>
                        <div className='text-xl leading-6'>Business Tools</div>
                        <div className='text-xl leading-6'>Business Tools</div>
                        <div className='text-xl leading-6'>Business Tools</div>
                        <div className='text-xl leading-6'>Business Tools</div>
                    </div>
                </div>
                <div className=' flex  justify-end | py-12 text-white col-span-2'>
                    <div className=' flex flex-col gap-2'>
                        <div className='text-xl leading-6'>Satender - sksatender59@gmail.com</div>
                        <div className='text-xl leading-6'>Jai Singh - jai.singh.corporate@gmail.com</div>
                        <div className='text-xl leading-6'>Suraj - suraj.kumar.corporate@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className='w-full text-white mb-16 h-1' />


        </footer>
    )
}

export default Footer