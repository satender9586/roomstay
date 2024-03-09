"use client"
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const WarningModal = ({title="",description="",buttonName="",handleSuccess=false}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Delete Account</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-lg">Delete Account</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary" className="">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" className="">Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default WarningModal