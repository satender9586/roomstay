import React from 'react'
import userImg from "../../assests/Images/user.png"
import generalIcon from "../../assests/Icons/general.svg"
import passwordIcon from "../../assests/Icons/password.svg"
import invitationIcon from "../../assests/Icons/invitation.svg"
import billingIcon from "../../assests/Icons/billing.svg"
import appsIcon from "../../assests/Icons/apps.svg"
import Image from 'next/image'

const SideBar = () => {
    return (

        <div className='w-72 h-[100dvh] | px-6  bg-[#F7F7FF]'>

            <div className='flex py-8'>

                <div className='flex gap-4'>
                    <div>
                        <Image src={userImg} width={55} height={55} alt='user' />
                    </div>
                    <div>
                        <div className="text-indigo-950 text-base font-bold ">Ildiko Gaspar</div>
                        <div className="text-slate-500 text-sm font-normal">@igaspar</div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-1'>


                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer">
                    <HoverLine />
                    <Image src={generalIcon} width={26} height={26} alt='general' />
                    <div className="text-slate-500 text-sm font-normal">General</div>
                </div>


                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer">
                    <HoverLine />
                    <Image src={passwordIcon} width={26} height={26} alt='general' />
                    <div className="text-slate-500 text-sm font-normal">Password</div>
                </div>

                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer">
                    <HoverLine />
                    <Image src={invitationIcon} width={26} height={26} alt='general' />
                    <div className="text-slate-500 text-sm font-normal">Invitations</div>
                </div>

                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer">
                    <HoverLine />
                    <Image src={billingIcon} width={26} height={26} alt='general' />
                    <div className="text-slate-500 text-sm font-normal">Billing</div>
                </div>

                <div className="h-12 pr-2 py-2 | flex justify-start items-center gap-2.5 | group | cursor-pointer">
                    <HoverLine />
                    <Image src={appsIcon} width={26} height={26} alt='general' />
                    <div className="text-slate-500 text-sm font-normal">Apps</div>
                </div>

            </div>

        </div>
    )
}

const HoverLine = () => {
    return (
        <div className={`w-1.5 h-12  rounded-3xl group-hover:bg-red-500`} />
    )
}


export default SideBar