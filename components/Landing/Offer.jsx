import React from 'react'
import Image from 'next/image'
import telegramImg from "../../assests/Icons/telegram.webp"

const Offer = () => {
    return (
        <section className=' bg-[#265fe5]'>
            <div className='container | font-heading | flex | relative | py-16 md:py-18 xl:py-24 '>


                <div className=' text-white | text-4xl lg:text-6xl xl:text-8xl font-normal |  w-[45%]'>
                    <span className='text-cyan-300 leading-10'>
                        Ready to host{" "}
                    </span>
                    <span className='leading-10'>
                        your rooms with RoomStay
                    </span>
                </div>




                <div className='relative flex items-start md:items-center'>
                <Image src={telegramImg} unoptimized alt='telegram' height={489} width={157} className='w-full md:w[50%] lg:w-full' style={{ width: "auto", height: "auto" }} />
                </div>


            </div>
        </section>
    )
}

export default Offer