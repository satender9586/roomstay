"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WarningModal = ({
  title = "",
  description = "",
  buttonName = "",
  handleSuccess = false,
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? children : <Button variant="outline">{title}</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary" className="">
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            type="submit"
            onClick={() => {
              handleSuccess && handleSuccess();
            }}
          >
            {buttonName}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WarningModal;
