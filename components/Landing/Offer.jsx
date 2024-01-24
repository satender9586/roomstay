import React from 'react'
import Image from 'next/image'
import telegramImg from "../../assests/Icons/telegram.webp"

const Offer = () => {
    return (
        <section className='bg-[#050033]'>
            <div className='container | font-heading | flex | relative | py-14 md:py-18 '>


                <div className=' text-white | text-3xl md:text-8xl font-normal | pb-24 w-[90%]'>
                    <span className='text-cyan-300 leading-10'>
                        Ready to power
                    </span>
                    <span className='ml-2 leading-10'>
                        your content marketing lifecycle?
                    </span>
                </div>




                <div className='relative'>
                <Image src={telegramImg} unoptimized alt='telegram' height={489} width={157} className='' style={{ width: "auto", height: "auto" }} />
                </div>


            </div>
        </section>
    )
}

export default Offer