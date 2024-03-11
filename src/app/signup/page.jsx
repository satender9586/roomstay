"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { signup } from "../../../api/userApi";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createAccount } from "../../../redux/reducers/userSlice";
import * as Yup from 'yup';

const Signup = () => {
    const router = useRouter();
    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState({ fName: '', lName: '', email: '', password: '', confirmPassword: '', isAdmin: "" });
    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object({
        fName: Yup.string().required("First Name is required"),
        lName: Yup.string().required("Last Name is required"),
        email: Yup.string().required("Email is required").email("Invalid Email"),
        password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })

    const handleChecked = (e) => {
        setFormValues({ ...formValues, isAdmin: e.target.checked })
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiData = {
            "email": formValues.email,
            "password": formValues.password,
            "confirmPassword": formValues.confirmPassword,
            "firstName": formValues.fName,
            "lastName": formValues.lName,
            "isAdmin": formValues.isAdmin
        }
// Test@1234
        try {

            await validationSchema.validate(formValues, { abortEarly: false });
            console.log("Form Submitted", formValues);
            const response = await signup(apiData)

            if (response.success) {
                dispatch(createAccount(apiData))
                router.push("/otp")
                setErrors({})
            }
        } catch (error) {
            const newErrors = {};

            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });

            setErrors(newErrors);
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
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center gap-8 p-16 w-full h-full ">
                            <div className="text-3xl pb-4">
                                Create your account
                            </div>

                            <div className="flex gap-2 justify-evenly">
                                <div>
                                    <Label className=" font-semibold" >First name</Label>
                                    <Input type="text" placeholder="Enter your full name" className="h-[50px]"
                                        name='fName'
                                        value={formValues.fName}
                                        onChange={handleChange}
                                    />
                                    {errors.fName && <div className="error text-xs pl-1 pt-1 text-red-600 font-semibold">{errors.fName}</div>}
                                </div>

                                <div>
                                    <Label className=" font-semibold" >Last name</Label>
                                    <Input type="text" placeholder="Enter your full name" className="h-[50px]"
                                        name='lName'
                                        value={formValues.lName}
                                        onChange={handleChange}
                                    />
                                    {errors.lName && <div className="error text-xs pl-1 pt-1 text-red-600 font-semibold">{errors.lName}</div>}
                                </div>
                            </div>


                            <div>
                                <Label className=" font-semibold" >Email</Label>
                                <Input type="email" placeholder="Enter your email address" className="h-[50px]"
                                    name='email'
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="error text-xs pl-1 pt-1 text-red-600 font-semibold">{errors.email}</div>}
                            </div>

                            <div>
                                <Label className=" font-semibold" >Password</Label>
                                <Input type="password" placeholder="Enter password here" className="h-[50px]"
                                    name='password'
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <div className="error text-xs pl-1 pt-1 text-red-600 font-semibold">{errors.password}</div>}
                            </div>

                            <div>
                                <Label className=" font-semibold" >Confirm Password</Label>
                                <Input type="password" placeholder="Enter confirm password here" className="h-[50px]"
                                    name='confirmPassword'
                                    value={formValues.confirmPassword}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && <div className="error text-xs pl-1 pt-1 text-red-600 font-semibold">{errors.confirmPassword}</div>}
                            </div>

                            <div className="flex items-center justify-start gap-2">
                                <input type="checkbox" className="size-6" checked={formValues.isAdmin} name="isAdmin" onChange={handleChecked} />
                                <Label className=" font-semibold" >Join as property owner </Label>
                            </div>
                            <Button className="w-[450px] h-[60px] rounded-xl  bg-neutral-700 hover:bg-neutral-900" onClick={handleSubmit}>Sign up</Button>
                        </div>
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

