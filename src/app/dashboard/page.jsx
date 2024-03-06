"use client"
import { Button } from '@/components/ui/button'
import DashboardContainer from '../../../components/Dashboard/DashboardContainer'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CreateHotelModal from '../../../components/Dashboard/CreateHotelModal'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { useEffect } from 'react'


const DashboardPage = () => {

    const fetchAllHotel = async () => {
        try {
            const response = await getAdminHotelsApi();
            console.log(response, "datatt")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllHotel()
    }, [])

    return (
        <DashboardContainer>
            <div>
                <div className="text-indigo-950 text-[32px] font-bold">Dashboard</div>

                <div className='my-8 flex gap-4'>
                    <CreateHotelModal />
                    {/* <CreateFloorModal /> */}
                    <CreateRoomModal />
                </div>
                <TableDemo />

            </div>
        </DashboardContainer>
    )
}

export default DashboardPage


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export function TableDemo() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Hotel</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead >Description</TableHead>
                    <TableHead className="text-right">Earning</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}




const CreateFloorModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Create Floor</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-lg">Create Floor</DialogTitle>
                    <DialogDescription>
                        You can create 3 floor for free
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Hotel
                        </Label>
                        <Input id="name" value="" placeholder="Enter name" className="col-span-3" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Floor No
                        </Label>
                        <div className='col-span-3'>
                            <FloorSelect floorArr={[1, 2, 3, 4]} />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}



const FloorSelect = ({ floorArr = [] }) => {
    return (
        <Select>
            <SelectTrigger className="min-w-[180px]">
                <SelectValue placeholder="Select floor" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>Select new floor</SelectLabel>
                    {
                        floorArr?.map((obj) => {
                            return <SelectItem key={obj} value={obj}>{obj}</SelectItem>
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


