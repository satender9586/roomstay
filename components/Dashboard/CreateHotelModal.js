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
import CityJson from "../../utils/cities"
import CustomTextArea from '../Tools/CustomTextArea'
import CustomSelect from '../Tools/CustomSelect'
import { createHotelApi } from '../../api/hotel'

const CreateHotelModal = () => {
    const [open,setOpen]=useState(false)
    const [form, setForm] = useState({ name: "", location: "", image: "", description: "" })

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleDropDown = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }

    const clearForm = () => {
        setForm({ name: "", location: "", image: "", description: "" })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const apiData = {
                "name": form?.name,
                "location": form?.location,
                "image": [form?.image],
                "description": form?.description

            }
            const response = await createHotelApi(apiData)
            if (response?.success) {
                setOpen(false)
            }
        } catch (error) {
            console.log(error)
        } finally {
            clearForm()
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Create Hotel</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>

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
                                <CustomSelect listArr={CityJson} name="location" value={form?.location} handleChange={handleDropDown} placeholder="Select one city" selectLabel="Choose any city" />
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
                        <Button type="submit">Create</Button>
                    </DialogFooter>

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateHotelModal;

