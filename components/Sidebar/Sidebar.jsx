"use client"
import React from 'react'
import userImg from "../../assests/Images/user.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { LockOpen1Icon, EnvelopeClosedIcon, HomeIcon, MixIcon } from '@radix-ui/react-icons'

const SideBar = () => {
    const router = useRouter()
    
    const handleRoute=(route="")=>{
        if(route)
        {
            router.push(route)
        }
    }
    return (

        <div className='w-72 h-[100dvh] | px-6  bg-[#ed4b35]'>

            <div className='flex py-8'>

                <div className='flex gap-4'>
                    <div className='ml-2'>
                        <Image src={userImg} width={55} height={55} alt='user' className='rounded-full' />
                    </div>
                    <div className='text-white flex flex-col justify-center'>
                        <div className="font-bold">OYO</div>
                        <div className="text-slate-100 text-base ">Ahirwar</div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-1 text-white text-lg'>


                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={()=>handleRoute("/dashboard")}>
                    <HoverLine />
                    <HomeIcon className="size-4"/>
                    <div className=" font-normal">Dashboard</div>
                </div>


                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={()=>handleRoute("/bill")}>
                    <HoverLine />
                    <LockOpen1Icon className="size-4"/>
                    <div className=" font-normal">Password</div>
                </div>

                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={()=>handleRoute("/settings")}>
                    <HoverLine />
                    <EnvelopeClosedIcon className="size-4"/>
                    <div className=" font-normal">Invitations</div>
                </div>

                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={()=>handleRoute("/bill")}>
                    <HoverLine />
                    <MixIcon className="size-4"/>
                    <div className=" font-normal">Billing</div>
                </div>
            </div>

        </div>
    )
}

const HoverLine = () => {
    return (
        <div className={`w-1.5 h-12  rounded-3xl group-hover:bg-white`} />
    )
}


export default SideBar