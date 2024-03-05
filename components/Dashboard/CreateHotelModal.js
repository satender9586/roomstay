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
import CityJson from "../../utils/cities"
import CustomTextArea from '../Tools/CustomTextArea'


const CreateHotelModal = () => {
    const [form, setForm] = useState({ name: "", location: "", image: "", description: "" })

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleDropDown = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }

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
                        <Input name="name" value={form?.name} onChange={handleFormChange} id="name" placeholder="Enter name" className="col-span-3" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Location
                        </Label>
                        <div className='col-span-3'>
                            <CitySelect cityArr={CityJson} name="location" value={form?.location} handleChange={handleDropDown} />
                        </div>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Image
                        </Label>
                        <Input name="image" value={form?.image} onChange={handleFormChange} placeholder="Enter image url" id="username" className="col-span-3" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <div className='h-full'>
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                        </div>
                        <CustomTextArea name="description" value={form?.description} onChange={handleFormChange} placeholder='Enter Description' />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateHotelModal;

const CitySelect = ({ cityArr = [], name, value, handleChange }) => {

    return (
        <Select value={value} onValueChange={(value) => handleChange({ name, value })} name={name}>
            <SelectTrigger className="min-w-[180px]">
                <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup >
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
