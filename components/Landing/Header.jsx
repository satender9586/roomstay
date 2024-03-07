"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import roomstayLogo from "../../assests/official/roomstay.png"
import { useRouter } from "next/navigation";
import { setToken } from "../../utils/auth";

const Header = () => {
    const router = useRouter();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZmNjkxNmNmZjI3ZjEzZjE4M2EyNyIsImlhdCI6MTcwOTgwMzcwNSwiZXhwIjoxNzA5ODkwMTA1fQ.BS0oQcHipvrVAzd-OWOpI1bkHKiNP1eMUse_LVKQfRM"

    return (

        <div className="bg-[#265fe5]">
            <header className="container text-white p-4 flex items-center justify-between" >
                <div className="flex gap-4 items-center">
                    <Image src={roomstayLogo} alt="Logo" width={32} height={32} className="size-8" />
                    <span className="text-xl cursor-pointer">RoomStay</span>
                </div>
                <div className=" sm:flex space-x-4">
                    <div className="flex items-center mr-2 cursor-pointer" onClick={() => { router.push('/dashboard'); setToken(token) }}>Dashboard</div>
                    <Button variant="secondary" onClick={() => router.push('/login')}>Login</Button>
                    <Button onClick={() => router.push('/signup')}>Signup</Button>
                </div>
            </header>
        </div>
    )
}

export default Header;

