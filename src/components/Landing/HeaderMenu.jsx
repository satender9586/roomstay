import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { PersonIcon } from "@radix-ui/react-icons"
import { clearAllCookies } from "../../../utils/cookies"
import { clearUserSlice } from "../../../redux/reducers/userSlice"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
const HeaderMenu = ({ firstName = "" }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogOut = () => {
    clearAllCookies()
    dispatch(clearUserSlice())
    router.push("/")
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className="rounded-full flex gap-3 items-center"
          >
            <PersonIcon /> {firstName}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-20">
          <DropdownMenuItem onClick={() => router.push("/order")}>
            Orders
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default HeaderMenu
