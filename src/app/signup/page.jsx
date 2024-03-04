"use client"
import { Button } from "@/components/ui/button"
// import Image from "next/image"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import checkCircleIcon from "../../../assests/Icons/checkcircleicon.png"
import Image from "next/image";
// import  Label from "@/components/ui/label"x
import { useRouter } from "next/navigation";
import { signup } from "../../../api/authentication";
import { useState } from "react";

const Signup = () => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({ name: '', email: '', password: '', confirmPassword: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        const newObject = { ...formValues, [name]: value };
        setFormValues({ ...newObject });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signup(formValues)

            if (response.status) {
                router.push("/otp")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="w-[100dvw] h-[100vh] flex flex-col justify-center items-center bg-gray-200 p-5">
            <div className=" flex flex-row  justify-center items-center w-full h-fill lg:w-[1110px] md:w-[800px] sm:w-[700px] p-10 bg-white rounded-3xl shadow-lg  ">
                <div className="h-[800px] w-full rounded-2xl flex flex-[0.7] p-20"
                    style={{ background: "linear-gradient(#B78FE8, rgb(139,92,246)" }}
                >
                    <div className="flex flex-col gap-8 ">
                        <div className="flex flex-col w-[240px] gap-2">
                            <Image src={checkCircleIcon} alt="email" width={32} height={32} className="bg-white rounded-full p-[1px] " />
                            <div className="text-xl text-white">Quick and free log-in</div>
                            <div className="text-sm text-white">Enter your email address to login an account.</div>
                        </div>
                        <div className="flex flex-col  w-[240px] gap-2">
                            <Image src={checkCircleIcon} alt="email" width={32} height={32} className="bg-white rounded-full p-[1px]" />
                            <div className="text-xl text-white">Cross-platform soluation</div>
                            <div className="text-sm text-white">Preview your newsletters on any device before sending them out</div>
                        </div>

                        <div className="flex flex-col w-[240px] gap-2">
                            <Image src={checkCircleIcon} alt="email" width={32} height={32} className="bg-white rounded-full p-[1px]" />
                            <div className="text-xl text-white">Start sending emails</div>
                            <div className="text-sm text-white">Use our API or pick our pre-built templates.</div>
                        </div>
                    </div>
                </div>

                <div className=" w-full  flex-[1.3] flex flex-col items-center justify-center ">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center gap-8 p-16 w-full h-full ">
                            <div className="text-3xl pb-4">
                                Create your account
                            </div>

                            <div>
                                <Label className=" font-semibold" >Email</Label>
                                <Input type="email" placeholder="Enter your email address" className="h-[50px]"
                                    name='email'
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <Label className=" font-semibold" >Full name</Label>
                                <Input type="text" placeholder="Enter your full name" className="h-[50px]"
                                 name='name'
                                 value={formValues.name}
                                 onChange={handleChange}
                                />
                            </div>

                            <div>
                                <Label className=" font-semibold" >Full name</Label>
                                <Input type="text" placeholder="Enter your full name" className="h-[50px]"
                                 name='name'
                                 value={formValues.name}
                                 onChange={handleChange}
                                />
                            </div>

                            <div>
                                <Label className=" font-semibold" >Password</Label>
                                <Input type="password" placeholder="Enter password here" className="h-[50px]" 
                                 name='password'
                                 value={formValues.password}
                                 onChange={handleChange}
                                />
                            </div>

                            <div>
                                <Label className=" font-semibold" >Confirm Password</Label>
                                <Input type="password" placeholder="Enter confirm password here" className="h-[50px]" 
                                 name='confirmPassword'
                                 value={formValues.confirmPassword}
                                 onChange={handleChange}
                                />

                            </div>

                            <div className="flex items-center justify-start gap-2">
                                <input type="checkbox" className="size-6" />
                                <Label className=" font-semibold" >Get updates and notification about our product.</Label>

                            </div>
                        </div>
                        <Button className="w-[450px] h-[60px] rounded-xl  bg-neutral-700 hover:bg-neutral-900" onClick={handleSubmit}>Sign up</Button>
                    </form>
                    <div className=" py-4">
                        <div className=" cursor-pointer">
                            Already Have an Account ? <span className="text-green-500" onClick={() => { router.push("/login") }} >Login</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Signup;

