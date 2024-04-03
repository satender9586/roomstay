"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import messageIcon from "../../assests/Icons/message.svg"
import Image from "next/image"
import bellIcon from "../../assests/Icons/bell.svg"

function NotificationMenu() {
    const [position, setPosition] = useState("bottom")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="icon" className="bg-[#0C0E41] rounded-full h-12 cursor-pointer transition  duration-300 ease-in-out">
                <Image src={bellIcon} width={18} height={18} alt="message"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[28rem] pb-3">
                <DropdownMenuLabel>You have 1 new message</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">
                        <Message date={"Feb 12"} message="If you like what we do, please tell your friends and share."/>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="top">
                        <Message date={"Mar 23"} message="If you like what we do, please tell your friends and share."/>
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NotificationMenu;

const Message=({date="Fef 12",message=""})=>{
    return(
        <div className="h-[60px] | flex gap-4 w-full | cursor-pointer">
            <div className="flex-[0.2] flex items-center justify-center | bg-[#FFE8F1]">
                <Image src={messageIcon} width={38} height={38} alt="message"/>
            </div>

            <div className="flex-[0.8] flex items-center">
                <div className="flex flex-col gap-2">
            <div className="text-slate-900 text-sm font-semibold">{date}</div>
            <div className="text-slate-900 text-xs font-normal">{message}</div>
                </div>
            </div>
        </div>
    )
}

// <div className=" h-[89px] justify-start items-center gap-6 inline-flex">
//                             <div className=" h-[89px] relative">
//                                 <div className="h-[89px] left-0 top-0 absolute bg-pink-100 rounded-lg" />
//                                 <div className="w-11 h-11 left-[23px] top-[23px] absolute" />
//                             </div>
//                             <div className="flex-col justify-start items-start gap-2 inline-flex">
//                                 <div className="text-slate-900 text-base font-semibold font-['Poppins']">Feb 22</div>
//                                 <div className="text-slate-900 text-lg font-normal font-['Poppins']">If you like what we do, please tell your friends and share.</div>
//                             </div>
//                         </div>