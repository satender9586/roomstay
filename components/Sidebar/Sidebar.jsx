"use client"
import React from 'react'
import userImg from "../../assests/Images/user.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PersonIcon, GearIcon, HomeIcon, MixIcon, ExitIcon } from '@radix-ui/react-icons'
import { clearAllCookies } from '../../utils/cookies'
import { useDispatch } from 'react-redux'
import { clearUserSlice } from '../../redux/reducers/userSlice'

const SideBar = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const handleRoute = (route = "") => {
        if (route) {
            router.push(route)
        }
    }

    const handleLogOut = () => {
        clearAllCookies()
        dispatch(clearUserSlice())
        router.push("/")
    }

    return (

        <div className='w-72 h-[100dvh] | px-6  bg-[#ff493c]'>

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


                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={() => handleRoute("/dashboard")}>
                    <HoverLine />
                    <HomeIcon className="size-4" />
                    <div className=" font-normal">Dashboard</div>
                </div>


                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={() => handleRoute("/profile")}>
                    <HoverLine />
                    <PersonIcon className="size-4" />
                    <div className=" font-normal">Account</div>
                </div>

                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={() => handleRoute("/bill")}>
                    <HoverLine />
                    <MixIcon className="size-4" />
                    <div className=" font-normal">Billing</div>
                </div>

                {/* <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={() => handleRoute("/settings")}>
                    <HoverLine />
                    <GearIcon className="size-4" />
                    <div className=" font-normal">Settings</div>
                </div> */}

                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer" onClick={handleLogOut}>
                    <HoverLine />
                    <ExitIcon className="size-4" />
                    <div className=" font-normal">Log out</div>
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