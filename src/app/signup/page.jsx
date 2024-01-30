import { Button } from "@/components/ui/button"
// import Image from "next/image"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import  Label from "@/components/ui/label"


const Signup = () => {
    return (

        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center bg-[#F4F3FD]">
            <div className=" flex flex-row  justify-center items-center w-full h-fill lg:w-[1110px] md:w-[800px] sm:w-[700px] p-10 bg-white  shadow-lg  ">
                <div className="h-[800px] w-full bg-violet-500 rounded-sm flex flex-[0.7] p-20">
                    <div className="flex flex-col gap-8 ">
                        <div className="flex flex-col w-[240px] gap-3">
                            <div className="text-xl text-white">Quick and free sign-up</div>
                            <div className="text-sm text-white">Enter your email address to create an account.</div>
                        </div>
                        <div className="flex flex-col  w-[240px] gap-3">
                            <div className="text-xl text-white">Cross-platform soluation</div>
                            <div className="text-sm text-white">Preview your newsletters on any device before sending them out</div>
                        </div>

                        <div className="flex flex-col w-[240px] gap-3">
                            <div className="text-xl text-white">Start sending emails</div>
                            <div className="text-sm text-white">Use our API or pick our pre-built templates.</div>
                        </div>
                    </div>
                </div>

                <div className=" w-full  flex-[1.3] flex flex-col items-center justify-center ">
                    <div className="flex flex-col justify-center gap-8 p-16 w-full h-full ">
                        <div className="text-3xl pb-4">
                            Create your account
                        </div>

                        <div>
                            <Label className=" font-semibold" >Email</Label>
                            <Input type="email" placeholder="Enter your email address" className="h-[50px]" />
                        </div>

                        <div>
                            <Label className=" font-semibold" >Full name</Label>
                            <Input type="text" placeholder="Enter your full name" className="h-[50px]" />
                        </div>

                        <div>
                            <Label className=" font-semibold" >Password</Label>
                            <Input type="password" placeholder="Enter password here" className="h-[50px]" />
                        </div>

                        <div>
                            <Label className=" font-semibold" >Confirm Password</Label>
                            <Input type="password" placeholder="Enter confirm password here" className="h-[50px]" />
                        </div>

                        <div className="flex items-center justify-start gap-2 pb-2">
                            <input type="checkbox" className="size-6"/>
                            <Label className=" font-semibold" >Get updates and notification about our product.</Label>

                        </div>
                    <Button className="w-[450px] h-[60px] rounded-xl">Sign up</Button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Signup;

