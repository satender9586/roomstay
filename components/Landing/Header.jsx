"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import roomstayLogo from "../../assests/official/roomstay.png"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Header = () => {
    const router = useRouter();
<<<<<<< HEAD
    const isAdmin = useSelector((state) => state?.user?.isAdmin)
    console.log(isAdmin, "admin");
=======
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWQ2MzJlZjgzOTYyMGU0MTQ1ZjM0MiIsImlhdCI6MTcxMDY3MDE1MCwiZXhwIjoxNzEwNzU2NTUwfQ.JokOZ_MZiz9GqYC3GhQocM7-736PgrgPBwBxY8YDN0w"

>>>>>>> 02778c1 (room: room info page and and room listin page)
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
                </div>
            </header>
        </div>
    )
}

export default Header;

