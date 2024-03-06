"use client"
import { Button } from '@/components/ui/button'
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
