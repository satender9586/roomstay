"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { forget } from "../../../api/userApi";
import { setEmail } from "../../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";


const Forget = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({ email: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        const newObject = { ...formValues, [name]: value };
        setFormValues({ ...newObject });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!(formValues.email)) {
            alert("Please fill all the fields")
            return
        }

        const dummyData = {
            "email": formValues.email,
        }

        try {
            const response = await forget(dummyData);
            if (response.success) {
                dispatch(setEmail(formValues.email))
                router.push(`/otp?type=forget`);
            }
        } catch (error) {
            console.log(error)
        }

    }


    return (

        <div className="w-[100dvw] h-[100vh] flex flex-col justify-center items-center bg-gray-200 p-5">
            <div className=" flex flex-row  justify-center items-center w-full h-fill lg:w-[1110px] md:w-[800px] sm:w-[700px] p-10 bg-white rounded-3xl  shadow-lg  ">

                <div className="h-[800px] w-full rounded-2xl flex flex-[0.7] p-20" style={{ background: "linear-gradient(#B78FE8, rgb(139,92,246)" }}>
                    <div className="flex flex-col gap-8 ">
                        <div className="flex flex-col w-[240px] gap-2">
                            <CheckCircledIcon color="white" width={32} height={32} />
                            <div className="text-xl text-white">Quick and free log-in</div>
                            <div className="text-sm text-white">Enter your email address to login an account.</div>
                        </div>
                        <div className="flex flex-col  w-[240px] gap-2">
                            <CheckCircledIcon color="white" width={32} height={32} />

                            <div className="text-xl text-white">Cross-platform soluation</div>
                            <div className="text-sm text-white">Preview your newsletters on any device before sending them out</div>
                        </div>

                        <div className="flex flex-col w-[240px] gap-2">
                            <CheckCircledIcon color="white" width={32} height={32} />

                            <div className="text-xl text-white">Start sending emails</div>
                            <div className="text-sm text-white">Use our API or pick our pre-built templates.</div>
                        </div>
                    </div>
                </div>
                <div className=" w-full  flex-[1.3] flex flex-col items-center justify-center ">

                    <form onSubmit={handleSubmit}>

                        <div className="flex flex-col justify-center gap-8 my-8 w-full h-full ">
                            <div className="text-3xl pb-4">
                                Forget your account
                            </div>

                            <div>
                                <Label className=" font-semibold" >Email</Label>
                                <Input type="email" value={formValues.email} name="email" onChange={handleChange} placeholder="Enter your email address" className="h-[50px]" />
                            </div>


                        </div>
                        <Button className="w-[450px] h-[60px] rounded-xl bg-neutral-700 hover:bg-neutral-900" >Forget</Button>
                    </form>

                    <div className="py-10">
                        <div className=" cursor-pointer">
                            Have an Account ? <span className="text-green-500" onClick={() => { router.push("/login") }}>Login</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Forget;

