"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
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
import { getPlans } from "../../api/payment";


const AdminPlanModal = ({ handleSuccess = false, children }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ plan: "", amount: 0, duration: "" });
  const [allPlans, setAllPlans] = useState([]);

  const handleFormChange = ({ name, value }) => {
    const newForm = {
      ...form,
    };

    if (name == "plan") {
      const planId = value;
      const selectedPlan = allPlans?.find((obj) => {
        return obj?.id === planId;
      });
      newForm.amount = selectedPlan?.amount;
      newForm.duration = selectedPlan?.duration;
    }

    newForm[name] = value;
    setForm(newForm);
  };

  const clearForm = () => {
    setForm({ name: "", plan: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSuccess(form?.amount);
    setOpen(false);
    clearForm();
  };

  const fetchPlans = async () => {
    try {
      const response = await getPlans();
      if (response.success) {
        const allPlans = response?.plans?.map((obj) => {
          return { ...obj, id: obj?._id };
        });

        // Set free plan by default in state
        const freePlan = allPlans?.find((obj) => {
          return obj?.name === "free";
        });
        setForm({
          amount: 0,
          plan: freePlan?.id,
          duration: freePlan?.duration,
        });
        setAllPlans(allPlans);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
      }}
    >
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
                (₹) Amount
              </Label>
              <div className="col-span-3  h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors text-slate-600 cursor-not-allowed">
                {form?.amount || 0}
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                (Days) Duration
              </Label>
              <div className="col-span-3  h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors text-slate-600 cursor-not-allowed">
                {form?.duration || 0}
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Plan
              </Label>
              <div className="col-span-3">
                <CustomSelect
                  listArr={allPlans}
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
            <Button disabled={form?.amount === 0} type="submit">
              Buy Plan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPlanModal;
