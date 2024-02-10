"use client"
import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import  Label from "@/components/ui/label"
import { useRouter } from "next/navigation";
import PaymentSucess from "../../../components/Payment/PaymentSucess";

const Header = () => {

    const router = useRouter();


    return (

        <div>
            <header className="bg-gray-800 text-white p-4 flex items-center justify-between" >
                <div className="hidden sm:block">
                    <img src="/logo.svg" alt="Logo" className="h-8" />
                </div>
                <div>
                    <span className="text-lg font-semibold hover:underline cursor-pointer">Hotel</span>
                </div>
                <div className=" sm:flex space-x-4">
                    <Button className=" bg-cyan-600 hover:bg-gray-600" onClick={() => router.push('/login')}>Login</Button>
                    <Button className=" bg-orange-600 hover:bg-gray-600 sm:flex hidden" onClick={() => router.push('/signup')}>Signup</Button>
                </div>
            </header>
            <PaymentSucess />
        </div>
    )
}

export default Header;

