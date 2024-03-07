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
    const searchParams = useSearchParams()
    const hotelId = searchParams.get("hotelId") || false
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

    const fetchAllRooms = async () => {
        try {
            console.warn(hotelId,"hotel ki idd")
            const response = await getAdminRoomByHotelApi(hotelId);
            if (response.success) {
                setRoomArr(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (hotelId) {
            fetchAllRooms(hotelId)
        } else {
            fetchAllHotel()
        }
    }, [hotelId])

    return (
        <div>
            <div className="text-indigo-950 text-[32px] font-bold">Dashboard</div>

            <div className='my-8 flex gap-4 justify-end'>
                {
                    hotelId ? (
                        <CreateRoomModal handleSuccess={fetchAllRooms} />
                    ) : (
                        <CreateHotelModal handleSuccess={fetchAllHotel} />
                    )
                }
            </div>
            <TableDemo hotelId={hotelId} hotelArr={hotelArr} roomArr={roomArr} />

        </div>
    )
}

export default DashboardPage


export function TableDemo({ hotelArr, roomArr, hotelId }) {
    const router = useRouter()


    const handleRoomRoute = (hotelId) => {
        router.push(`/dashboard?hotelId=${hotelId}`)
    }



    return (
        <Table>
            <TableCaption>{hotelId ? "A list of your rooms" : "A list of your hotels"}</TableCaption>
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






