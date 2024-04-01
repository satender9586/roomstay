"use client"
import React from 'react'
import { TbAirConditioning } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import Header from '@/components/Landing/Header';

const RoomListing = () => {
  const arryLength = Array.from({ length: 4 });

  return (
    <>
      <Header />
      <div className='container mb-16'>
        <div className='p-4 grid grid-cols-5 gap-4 '>
          <div className='col-span-1 mt-3'>
            <h1 className='font-md  text-sm md:text-[1.4rem]'>Filter</h1>
          </div>
          <div className='col-span-4 space-y-10'>
            {
              arryLength.map((data, index) => (
                <div className='grid grid-cols-5 gap-5 mt-3'>
                  <div className='col-span-2'>
                    <div>
                      <img
                        width={"100%"}
                        height={"auto"}
                        className="rounded-[20px] h-[210px]" src='https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <h1 className='text-[2rem] font-bold'>Flagship White Diamond</h1>
                    <h1 className='text-[1rem] font-bold '>opposite Shraddhanand college, Delhi</h1>
                    <h1 className='mt-[0.2rem]'>Rating <span>3.5</span> very good</h1>
                    <div className='mt-3 flex gap-10 '>
                      <div className='flex items-center gap-1'><TbAirConditioning className='size-6' /> <span>AC</span></div>
                      <div className='flex items-center gap-1'><TbAirConditioning className='size-6' /> <span>AC</span></div>
                      <div className='flex items-center gap-1'><TbAirConditioning className='size-6' /> <span>AC</span></div>
                    </div>
                    <div className=' flex justify-between mt-[1rem]' >
                      <div >
                        <h1 className='flex items-center gap-1 md:text-[1.5rem] '>450 <span className='flex items-center ' style={{ textDecoration: "line-through" }}><FaRupeeSign />434</span></h1>
                        {/* <h1 className='flex items-center md:text-[0.9rem]'>+<FaRupeeSign />434 taxes & free</h1> */}
                      </div>
                      <div className='flex items-center justify-center px-10 gap-3'>
                        <button className='p-[0.7rem] px-[1rem]  bg-white  text-md text-black ' style={{ border: "1px solid #E9E9E9" }}>view Details</button>
                        <button className='p-[0.7rem] px-[1rem]  bg-green-500  text-md text-white ' >Book Now</button>
                      </div>

                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default RoomListing
