"use client"
import { Button } from '@/components/ui/button'
import Dashboard from '../../../components/Dashboard/Dashboard'
import visaImg from "../../../assests/Images/visa.png"
import React from 'react'
import Image from 'next/image'
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CustomTextArea from '../../../components/Tools/CustomTextArea'
import CityJson from "../../../utils/cities"
import CustomCheckbox from '../../../components/Tools/CustomCheckbox'

const Billing = () => {
  return (
    <>
      <Dashboard>
        <div>
          <div className="text-indigo-950 text-[32px] font-bold">Billing</div>

          <div className='mt-10 flex'>
            <div className='flex-[0.6] '>



              <div className='mb-8'>
                <div className="text-indigo-950 text-base font-bold">Order History</div>
                <div className="text-slate-500 text-sm font-normal">Manage billing information and view receips</div>
              </div>

              <Table />

              <div className='mt-16'>
                <div className="text-indigo-950 text-base font-bold">Payment Method</div>
                <div className="text-slate-500 text-sm font-normal">Manage billing information and view receips</div>

                <div className=' w-[90%] mt-6 | flex items-center justify-between'>

                  <div>
                    <Image src={visaImg} alt="visa" width={67} height={38} />
                  </div>
                  <div className="flex-[0.7] text-indigo-950 text-base font-normal ">Visa ending in 2255</div>
                  <div className='flex-[0.2]'>

                    <Button variant="outline" className="text-indigo-950 text-base font-medium ">
                      Remove
                    </Button>
                  </div>
                </div>


              </div>

            </div>
            <div className='flex-[0.4]'>

              <div className="w-[265px] h-[221px] p-8 bg-[#EE4D37] rounded-2xl shadow || flex flex-col justify-start items-start gap-4">
                <div className="text-white text-base font-normal">Your plan</div>

                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="text-white text-2xl font-bold">Pro Annual</div>
                  <div className="text-white text-sm font-normal">Renews on  Nov. 2021</div>
                </div>


                <div className="px-4 py-2 rounded-lg border border-white border-opacity-50 justify-start items-start gap-2.5 inline-flex hover:bg-red-600 cursor-pointer">
                  <div className="text-white text-base font-normal">Upgrade subscription</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Dashboard>
    </>
  )
}

export default Billing


const Table = () => {
  return (
    <div className='w-[90%] flex flex-col justify-center'>
      <div className='grid grid-cols-3'>
        <div className="text-slate-500 text-sm font-normal">Date</div>
        <div className=" text-slate-500 text-sm font-normal">Type</div>
        <div className="text-slate-500 text-sm font-normal">Receipt</div>
      </div>

      <div className='flex flex-col gap-3'>
        <TableRow />
        <TableRow />
        <TableRow />
      </div>

      <div className="text-red-500 text-base font-normal underline mt-4 cursor-pointer">Load more</div>


    </div>
  )
}

const TableRow = () => {
  return (
    <div className='grid grid-cols-3 py-2 rounded hover:shadow hover:scale-105 transition delay-75 duration-300 ease-in-out cursor-pointer '>
      <div className="text-indigo-950 text-base font-medium flex items-center">Oct. 21, 2021</div>
      <div className="  text-indigo-950 text-base font-medium flex items-center">Pro Annual</div>
      <div>
        <Button variant="outline" className="text-indigo-950 text-base font-medium ">
          Download
        </Button>
      </div>
    </div>
  )
}




// hotelid, floorid, roomNumber, roomType, price, maxPeople, description, amenities
const CreateRoomModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Room</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Create Room</DialogTitle>
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
              Room No
            </Label>
            <div className='col-span-3'>
              <RoomSelect roomArr={[1, 2, 3, 4]} />
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Room Type
            </Label>
            <div className='col-span-3'>
              <RoomTypeSelect roomArr={["Individual", "Couple", "Family"]} />
            </div>
          </div>


          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Price
            </Label>
            <Input id="name" value="" placeholder="Enter name" className="col-span-3" />
          </div>

        


          <div className="grid grid-cols-4 items-center gap-4">
            <div className='h-full'>
              <Label htmlFor="name" className="text-right">
                Amenities
              </Label>
            </div>
            <div className='col-span-3 flex flex-wrap gap-3 gap-y-4'>
              <CustomCheckbox title="Tv" labelText='follower' />
              <CustomCheckbox title="Ac" labelText='post' />
              <CustomCheckbox title="Free Wifi" labelText='test' />
              <CustomCheckbox title="Power backup" labelText='dddd' />
              <CustomCheckbox title="Geyser" labelText='ytggt' />
              <CustomCheckbox title="CCTV" labelText='gdgdg' />
              <CustomCheckbox title="Parking" labelText='gdddgdg' />
              {/* <CustomCheckbox title="Elevator" labelText='afsdgf' /> */}
            </div>
          </div>


          <div className="grid grid-cols-4 items-center gap-4">
            <div className='h-full'>
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
            </div>
            <CustomTextArea placeholder='Enter Description' />
          </div>


        </div>
        <DialogFooter>
          <Button type="submit" className="">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
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


const CreateHotelModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Hotel</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Create Hotel</DialogTitle>
          <DialogDescription>
            Host your hotel with Roomstay
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="" placeholder="Enter name" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Location
            </Label>
            <div className='col-span-3'>
              <CitySelect cityArr={CityJson} />
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Image
            </Label>
            <Input placeholder="Enter image url" id="username" value="" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <div className='h-full'>
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
            </div>
            <CustomTextArea placeholder='Enter Description' />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


const RoomSelect = ({ roomArr = [] }) => {
  return (
    <Select>
      <SelectTrigger className="min-w-[180px]">
        <SelectValue placeholder="Select room" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>Select new room</SelectLabel>
          {
            roomArr?.map((obj) => {
              return <SelectItem key={obj} value={obj}>{obj}</SelectItem>
            })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const RoomTypeSelect = ({ roomArr = [] }) => {
  return (
    <Select>
      <SelectTrigger className="min-w-[180px]">
        <SelectValue placeholder="Select room" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>Select new room</SelectLabel>
          {
            roomArr?.map((obj) => {
              return <SelectItem key={obj} value={obj}>{obj}</SelectItem>
            })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
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

const CitySelect = ({ cityArr = [] }) => {
  return (
    <Select>
      <SelectTrigger className="min-w-[180px]">
        <SelectValue placeholder="Select city" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>Create New Hotel</SelectLabel>
          {
            cityArr?.map((obj) => {
              return <SelectItem key={obj?.id} value={obj?.name}>{obj?.name}</SelectItem>
            })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
