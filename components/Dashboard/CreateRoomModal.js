"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CustomTextArea from '../Tools/CustomTextArea'
import CustomCheckbox from '../Tools/CustomCheckbox'
import CustomSelect from '../Tools/CustomSelect'

const listArr = [
    {
        title: "wifi",
        labelText: "Wifi"
    },
    {
        title: "ac",
        labelText: "Ac"
    },
    {
        title: "cctv",
        labelText: "CCTV"
    },
    {
        title: "parking",
        labelText: "Parking"
    },
    {
        title: "geyser",
        labelText: "Geyser"
    }
]

const roomTypeArr = [
    { id: "Individual", name: "Individual" },
    { id: "Couple", name: "Couple" },
    { id: "Family", name: "Family" }
]

const roomNoArr = [
    { id: "101", name: "101" },
    { id: "102", name: "102" },
    { id: "103", name: "103" }
]

const CreateRoomModal = () => {
    const [form, setForm] = useState({ hotel: "", roomNo: "", roomType: "", price: "", description: "" })
    const [checkBoxForm, setCheckBoxForm] = useState({ wifi: false, tv: false, cctv: false, parking: false, geyser: false })

    const handleFormChange = (e) => {
        const { name, value } = e?.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckBox = ({ name, value }) => {
        setCheckBoxForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleDropDown = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }

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
                        <Input id="name" name={"hotel"} value={form?.hotel} onChange={handleFormChange} placeholder="Enter name" className="col-span-3" />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Room No
                        </Label>
                        <div className='col-span-3'>
                            <CustomSelect listArr={roomNoArr} name="roomNo" value={form?.location} handleChange={handleDropDown} placeholder="Select room no" selectLabel="Select one room" />
                        </div>
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Room Type
                        </Label>
                        <div className='col-span-3'>
                            <CustomSelect listArr={roomTypeArr} name="roomType" value={form?.roomType} handleChange={handleDropDown} placeholder="Select room type" selectLabel="Select any type" />
                        </div>
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Price
                        </Label>
                        <Input id="name" name={"price"} value={form?.price} onChange={handleFormChange} placeholder="Enter name" className="col-span-3" />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <div className='h-full'>
                            <Label htmlFor="name" className="text-right">
                                Amenities
                            </Label>
                        </div>
                        <div className='col-span-3 flex flex-wrap gap-3 gap-y-4'>
                            <CustomCheckBoxList checkBoxForm={checkBoxForm} handleCheckBox={handleCheckBox} listArr={listArr} />
                        </div>
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <div className='h-full'>
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                        </div>
                        <CustomTextArea name='description' value={form?.description} onChange={handleFormChange} placeholder='Enter Description' />
                    </div>


                </div>
                <DialogFooter>
                    <Button type="submit" className="">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateRoomModal;





const CustomCheckBoxList = ({ checkBoxForm, handleCheckBox, listArr = [] }) => {
    return (
        <>
            {
                listArr?.map((obj) => {
                    return <CustomCheckbox key={obj?.title} title={obj?.title} name={obj?.title} labelText={obj?.labelText} value={checkBoxForm[obj?.title]} handleChange={handleCheckBox} />
                })
            }
        </>
    )
}