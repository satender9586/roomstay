"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import roomstayLogo from "../../assests/official/roomstay.png"
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    return (

        <div>
            <header className="bg-[#202142]  text-white p-4 flex items-center justify-between" >
                <div className="flex gap-4 items-center">
                    <Image src={roomstayLogo} alt="Logo" width={32} height={32} className="size-8" />
                    <span className="text-xl cursor-pointer">RoomStay</span>
                </div>
                <div className=" sm:flex space-x-4">
                    <Button variant="ghost" onClick={() => { router.push('/dashboard'); setToken() }}>Dashboard</Button>
                    <Button variant="secondary" onClick={() => router.push('/login')}>Login</Button>
                    <Button className="sm:flex hidden" onClick={() => router.push('/signup')}>Signup</Button>
                </div>
            </header>
        </div>
    )
}

export default Header;

