"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import CustomSelect from "../Tools/CustomSelect";
import { Input } from "@/components/ui/input";

const planJson = [
  {
    id: "free",
    name: "free",
    price: "0",
  },
  {
    id: "silver",
    name: "silver",
    price: "500",
  },
  {
    id: "gold",
    name: "gold",
    price: "1000",
  },
];

const AdminPlanModal = ({ handleSuccess = false, children }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    price: "0",
    plan: "free",
  });

  const handleFormChange = ({ name, value }) => {
    const newForm = {
      ...form,
    };
    if (name == "plan") {
      const selectedPlan = planJson?.find((obj) => {
        return obj?.name === value;
      });
      newForm["price"] = selectedPlan?.price;
    }
    newForm[name] = value;
    console.log(newForm);

    setForm(newForm);
  };

  const clearForm = () => {
    setForm({ name: "", plan: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSuccess(form?.price);
    clearForm();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? children : <Button variant="outline">Create Hotel</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-lg">Choose Your Plan</DialogTitle>
            <DialogDescription>
              Unlock new features with Roomstay
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                ₹ Price
              </Label>
              <Input
                name="price"
                value={form?.price}
                disabled
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
                id="name"
                placeholder="$0"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Plan
              </Label>
              <div className="col-span-3">
                <CustomSelect
                  listArr={planJson}
                  name="plan"
                  value={form?.plan}
                  handleChange={handleFormChange}
                  placeholder="Select any plan"
                  selectLabel="Choose one"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button disabled={form?.plan === "free"} type="submit">
              Buy
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPlanModal;
