"use client"
import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import  Label from "@/components/ui/label"
import { useRouter } from "next/navigation";


const Header = () => {

    const router = useRouter();


    return (

        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center bg-[#F4F3FD] p-5">

            {/* header */}
            <div className="w-full flex justify-between ">
                <div>
                    logo
                </div>
                <div>
                    Hotel
                </div>
                <div className="flex items-center gap-2">
                    <div><Button>Signup</Button></div>
                    <div><Button>Login</Button></div>
                </div>
            </div>

        </div>
    )
}

export default Header;

