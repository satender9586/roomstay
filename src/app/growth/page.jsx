import React from 'react'
import { TimerIcon } from '@radix-ui/react-icons'
import clockImg from "../../../public/assets/clock.svg"
import Image from 'next/image'
const Growth = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-yellow-50' style={{backgroundColor:"#FEF8EB"}}>
            <div className='flex flex-1 flex-col h-[100%]'>
                <div className=' flex-[0.15]  '>
                    <div className='w-full h-full flex flex-col items-center text-center justify-center '>
                        <div className=" font-bold text-3xl">E-commerce Simplified, Success Amplified</div>
                        <div className=" ">Empowering your oniline bussiness growth with all the essential tools.</div>
                    </div>
                </div>
                <div className=' flex-[0.85]'>
                    <div className="container mx-auto mt-8">
                        <div className="flex flex-wrap justify-center gap-5 w-[94%] ">

                            {/* First Row */}
                            <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center">
                                {/* Your content for the first div in the first row */}
                                <div className='h-full flex flex-col items-center justify-center p-7 gap-2'>
                                    <Image src={clockImg} className='w-16 h-16'/>
                                    <div className='font-bold'>Site Speed</div>
                                    <div className='text-center'>Sisha siasas ai sasias a si iaisias iaisi asiias iaisia siia siahishi aisi ased</div>
                                </div>
                            </div>
                            <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center">
                                {/* Your content for the second div in the first row */}
                            </div>
                            <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center">
                                {/* Your content for the third div in the first row */}
                            </div>

                            {/* Second Row */}
                            <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center">
                                {/* Your content for the first div in the second row */}
                            </div>
                            <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center">
                                {/* Your content for the second div in the second row */}
                            </div>
                            <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center">
                                {/* Your content for the third div in the second row */}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Growth