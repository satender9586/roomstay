"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import roomstayLogo from "../../assests/official/roomstay.png"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { PersonIcon } from "@radix-ui/react-icons";
const Header = () => {
    const router = useRouter();
    const isAdmin = useSelector((state) => state?.user?.isAdmin)
    console.log(isAdmin, "admin");
    return (

        <div className="bg-[#265fe5]">
            <header className="container text-white p-4 flex items-center justify-between" >
                <div className="flex gap-4 items-center">
                    <Image src={roomstayLogo} alt="Logo" width={32} height={32} className="size-8" />
                    <span className="text-xl cursor-pointer">RoomStay</span>
                </div>
                <div className=" sm:flex space-x-4">

                    {
                        isAdmin ? (
                            <Button className="rounded-full" onClick={() => router.push('/dashboard')}>Dashboard</Button>
                        ) : (
                            <>
                                <Button variant="secondary" onClick={() => router.push('/login')}>Login</Button>
                                <Button onClick={() => router.push('/signup')}>Signup</Button>
                            </>
                        )
                    }

                    {
                        isAdmin ? (
                            <Button className="rounded-full" onClick={() => router.push('/dashboard')}>Dashboard</Button>
                        ) : (
                            <>
                                <Button variant="secondary" onClick={() => router.push('/order')} className="rounded-full"><PersonIcon/></Button>
                                <Button variant="secondary" onClick={() => router.push('/login')}>Login</Button>
                                <Button onClick={() => router.push('/signup')}>Signup</Button>
                            </>
                        )
                    }
                </div>
            </header>
        </div>
    )
}

export default Header;

