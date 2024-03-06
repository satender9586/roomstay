"use client"
import CreateHotelModal from '../../../components/Dashboard/CreateHotelModal'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CreateRoomModal from '../../../components/Dashboard/CreateRoomModal'
import { getAdminHotelsApi } from '../../../api/hotel'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { getAdminRoomByHotelApi } from '../../../api/room'

const DashboardPage = () => {



    return (
        <div>
            <div className="text-indigo-950 text-[32px] font-bold">Dashboard</div>

            <div className='my-8 flex gap-4'>
                <CreateHotelModal />
                <CreateRoomModal />
            </div>
            <TableDemo />

        </div>
    )
}

export default DashboardPage


export function TableDemo() {
    const searchParams = useSearchParams()
    const hotelId = searchParams.get("hotelId") || false
    const router = useRouter()
    const [hotelArr, setHotelArr] = useState([])
    const [roomArr, setRoomArr] = useState([])

    const fetchAllHotel = async () => {
        try {
            const response = await getAdminHotelsApi();
            if (response.success) {
                setHotelArr(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchMyRooms = async (hotelId) => {
        try {
            const response = await getAdminRoomByHotelApi(hotelId);
            if (response.success) {
                setRoomArr(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleRoomRoute = (hotelId) => {
        router.push(`/dashboard?hotelId=${hotelId}`)
    }

    useEffect(() => {
        if (hotelId) {
            fetchMyRooms(hotelId)
        } else {
            fetchAllHotel()
        }
    }, [hotelId])

    return (
        <Table>
            <TableCaption>{hotelId?"A list of your rooms":"A list of your hotels"}</TableCaption>
            <TableHeader>
                <TableRow>

                    <TableHead className="w-[200px]">{hotelId ? "Room No" : "Hotel"}</TableHead>
                    <TableHead>{hotelId ? "Type" : "Location"}</TableHead>
                    <TableHead >Description</TableHead>
                    <TableHead className="text-right">Earning</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {hotelId ?
                    (
                        roomArr.map((obj) => (
                            <TableRow key={obj?._id} handleClick={() => { handleRoomRoute(obj?._id) }} className="cursor-pointer">
                                <TableCell className="font-medium" >{obj?.roomNumber}</TableCell>
                                <TableCell>{obj?.roomType}</TableCell>
                                <TableCell>
                                    {obj?.description.length > 100 ? `${obj?.description?.slice(0, 100)}...` : obj?.description}
                                </TableCell>
                                <TableCell className="text-right">₹ {obj?.price}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        hotelArr.map((obj) => (
                            <TableRow key={obj?._id} handleClick={() => { handleRoomRoute(obj?._id) }} className="cursor-pointer">
                                <TableCell className="font-medium" >{obj?.name}</TableCell>
                                <TableCell>{obj?.location}</TableCell>
                                <TableCell>
                                    {obj?.description.length > 100 ? `${obj?.description?.slice(0, 100)}...` : obj?.description}
                                </TableCell>
                                <TableCell className="text-right">{0}</TableCell>
                            </TableRow>
                        ))
                    )
                }

            </TableBody>


            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}






