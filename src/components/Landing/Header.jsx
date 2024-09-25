"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import roomstayLogo from "../../../assests/official/roomstay.png"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { PersonIcon } from "@radix-ui/react-icons"
import HeaderMenu from "./HeaderMenu"
import { FaDoo, FaDoorClosed } from "react-icons/fa"
const Header = () => {
  const router = useRouter();
  const { isAdmin, isLoggedIn, firstName } = useSelector(
    (state) => state?.user
  );
  return (
    <div className="bg-[#265fe5]">
      <header className="container text-white p-4 flex items-center justify-between">
        <div
          className="flex gap-4 items-center"
          onClick={() => router.push("/")}
        >
          <Image
            src={roomstayLogo}
            alt="Logo"
            width={32}
            height={32}
            className="size-8 hover:scale-105 ease-in-out duration-500"
          />
          <span className="text-xl font-bold cursor-pointer hidden sm:block">RoomStay</span>
        </div>
        <div className=" sm:flex space-x-4 flex items-center cursor-pointer ">
          <div className="flex gap-1 hover:text-gray-200 rounded-lg border px-4 p-[2px]">
            <FaDoorClosed className="w-6 h-6" />

            <div
              className=" font-semibold"
              onClick={() => {
                router.push("/rooms")
              }}
            >
              Rooms
            </div>
          </div>

          {isAdmin ? (
            <Button
              className="rounded-full"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </Button>
          ) : (
            <>
              {isLoggedIn ? (
                <HeaderMenu firstName={firstName} />
              ) : (
                <>
                  <Button
                    variant="secondary"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </Button>
                  <Button onClick={() => router.push("/signup")}>Signup</Button>
                </>
              )}
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
