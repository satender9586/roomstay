"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CustomTextArea from '../Tools/CustomTextArea'
import CustomCheckbox from '../Tools/CustomCheckbox'
import CustomSelect from '../Tools/CustomSelect'
import { amenitiesArr, roomNoArr, roomTypeArr } from '../../utils/constants'
import { createRoomApi } from '../../api/room'
import { useSearchParams } from 'next/navigation'

const CreateRoomModal = ({ handleSuccess = false }) => {
    const searchParams = useSearchParams()
    const hotelId = searchParams.get("hotelId") || false
    const [isMounted, setIsMounted] = useState(false)
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({ hotel: hotelId, roomNo: "", roomType: "", price: "", description: "" })

    const [checkBoxForm, setCheckBoxForm] = useState({ wifi: false, tv: false, cctv: false, parking: false, geyser: false })

    const handleFormChange = (e) => {
        const { name, value } = e?.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleDropDown = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }

    const handleCheckBox = ({ name, value }) => {
        setCheckBoxForm((prev) => ({ ...prev, [name]: value }))
    }


    const clearForm = () => {
        setForm({ hotel: form?.hotel, roomNo: "", roomType: "", price: "", description: "" })
        setCheckBoxForm({ wifi: false, tv: false, cctv: false, parking: false, geyser: false })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const apiData = {
                hotelId: form?.hotel,
                roomNumber: form?.roomNo,
                roomType: form?.roomType,
                price: form?.price,
                description: form?.description,
                amenities: checkBoxForm

            }
            const response = await createRoomApi(apiData)
            if (response?.success) {
                console.log(response)
                setOpen(false)
                if (handleSuccess) {
                    handleSuccess()
                }
            }
        } catch (error) {
            console.log(error)
        } finally {
            clearForm()
        }
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (hotelId) {
            setForm({ ...form, hotel: hotelId })
        }
    }, [hotelId])

    if (!isMounted) {
        return null
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Create Room</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>

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
                            <Input id="name" name={"hotel"} disabled value={form?.hotel} onChange={handleFormChange} placeholder="Enter name" className="col-span-3" />
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
                            <Input id="name" type="number" name={"price"} value={form?.price} onChange={handleFormChange} placeholder="Enter name" className="col-span-3" />
                        </div>


                        <div className="grid grid-cols-4 items-center gap-4">
                            <div className='h-full'>
                                <Label htmlFor="name" className="text-right">
                                    Amenities
                                </Label>
                            </div>
                            <div className='col-span-3 flex flex-wrap gap-3 gap-y-4'>
                                <CustomCheckBoxList checkBoxForm={checkBoxForm} handleCheckBox={handleCheckBox} listArr={amenitiesArr} />
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
                        <Button type="submit">Create</Button>
                    </DialogFooter>

                </form>
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