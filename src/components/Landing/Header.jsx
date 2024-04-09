"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import roomstayLogo from "../../../assests/official/roomstay.png"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { PersonIcon } from "@radix-ui/react-icons";

const Header = () => {
    const router = useRouter();
    const { isAdmin, isLoggedIn, firstName } = useSelector((state) => state?.user)
    return (
        <div className="bg-[#265fe5]">
            <header className="container text-white p-4 flex items-center justify-between" >
                <div className="flex gap-4 items-center" onClick={() => router.push("/")}>
                    <Image src={roomstayLogo} alt="Logo" width={32} height={32} className="size-8" />
                    <span className="text-xl cursor-pointer">RoomStay</span>
                </div>
                <div className=" sm:flex space-x-4 flex items-center">
                    <div className="cursor-pointer" onClick={() => { router.push("/rooms") }}>Rooms</div>
                    {
                        isAdmin ? (
                            <Button className="rounded-full" onClick={() => router.push('/dashboard')}>Dashboard</Button>
                        ) : (
                            <>
                                {
                                    isLoggedIn ? (
                                        <Button variant="secondary" onClick={() => router.push('/order')} className="rounded-full flex gap-3 items-center"><PersonIcon /> {firstName}</Button>
                                    ) : (
                                        <>
                                            <Button variant="secondary" onClick={() => router.push('/login')}>Login</Button>
                                            <Button onClick={() => router.push('/signup')}>Signup</Button>
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </header>
        </div>
    )
}

export default Header;
