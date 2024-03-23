"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { login } from "../../../api/userApi"
import { setCredentials } from "../../../utils/cookies"
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons"
import { giveUserSliceObj } from "../../../utils/sliceMethod"
import { setUserSlice } from "../../../redux/reducers/userSlice"
import { useDispatch } from "react-redux"
import { Checkbox } from "@/components/ui/checkbox"
const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const newObject = { ...formValues, [name]: value }
    setFormValues({ ...newObject })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!(formValues.email && formValues.password)) {
      alert("Please fill all the fields")
      return
    }

    const apiData = {
      email: formValues.email,
      password: formValues.password,
    }

    try {
      const response = await login(apiData)
      if (response?.success) {
        // Set user details in redux ( User Slice )
        if (response?.user) {
          const userObj = giveUserSliceObj(response?.user)
          dispatch(setUserSlice(userObj))
        }

        const obj = {
          token: response.token,
        }
        setCredentials(obj)

        router.push("/dashboard")
      }
    } catch (error) {
      console.log(error)
    }
  }

  let arr = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className="w-full">
      <div className="flex justify-center w-[100%] relative">
        <div className="h-[180px] w-[10%] p-4 flex flex-col  gap-2  ">
          <div className="fixed shadow-lg h-[140px] flex flex-col  justify-center border rounded-2xl m-3 p-4 pr-6">
            <div className=" font-bold ">Filter -</div>
            <div className=" flex gap-2">
              <div>
                <Checkbox />
              </div>
              <div className="text-[14px] ">Confirmed</div>
            </div>
            <div className=" flex gap-2">
              <div>
                <Checkbox />
              </div>
              <div className="text-[14px]">Canceled</div>
            </div>
            <div className=" flex gap-2">
              <div>
                <Checkbox />
              </div>
              <div className="text-[14px]">Pending</div>
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          {arr.map((item) => (
            <div className="flex justify-center items-center p-2">
              <div className="w-[100%]  ">
                <div className="h-[130px] px-3  w-full border p-2 flex flex-1 gap-6 items-centershadow-lg rounded-lg">
                  <div className="flex gap-6 flex-[0.7] justify-center">
                    <div className="flex items-center  h-full">
                      <img
                        style={{ objectFit: "cover" }}
                        width={60}
                        height={60}
                        className="rounded-[8px] h-[100px] w-[250px]"
                        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                    </div>
                    <div className="h-[100px] flex  flex-col gap-2">
                      <div className="w-[100%] font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus beatae incidunt cupiditate accusamus
                        obcaecati quae nulla? Alias delectus id impedit ut et
                        pariatur accusantium ipsam fugiat neque nemo. Alias,
                        inventore.
                      </div>

                      <div className="w-[100%] text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.2] flex items-center gap-3 w-full  px-4 ">
                    <div className="text-blue-600 font-semibold">
                      Your item has been delivered
                    </div>
                  </div>
                  <div className="flex flex-[0.1] w-full items-center justify-center font-bold">
                    $2000
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="flex flex-col justify-center items-center p-5 bg-slate-50 h-[100dvh]">
    //     <div className=" flex flex-row  justify-center items-center w-full h-fill lg:w-[1110px] md:w-[800px] sm:w-[700px] p-10 bg-white border rounded-3xl shadow-sm  ">
    //         <div className=" w-full  flex-[1.3] flex flex-col items-center justify-center ">
    //             <form onSubmit={handleSubmit}>
    //                 <div className="flex flex-col justify-center gap-8  w-full h-full ">
    //                     <div className="text-3xl pb-4">
    //                         Login your account
    //                     </div>

    //                     <div>
    //                         <Label className=" font-semibold" >Email</Label>
    //                         <Input type="email" name={"email"} value={formValues.email} placeholder="Enter your email address" onChange={handleChange} className="h-[50px]" />
    //                     </div>

    //                     <div>
    //                         <Label className=" font-semibold" >Password</Label>

    //                         <div className="relative">
    //                             <Input type={showPassword ? "text" : "password"} name={"password"} value={formValues.password} placeholder="Enter password here" onChange={handleChange} className="h-[50px]" />

    //                             <div className="absolute h-full flex items-center right-0 top-0 px-4 cursor-pointer" onClick={() => { setShowPassword(!showPassword) }}>

    //                                 {
    //                                     showPassword ? (
    //                                         <EyeOpenIcon width={20} height={20} />
    //                                     ) : (
    //                                         <EyeClosedIcon width={20} height={20} />
    //                                     )
    //                                 }

    //                             </div>

    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="mt-10">
    //                     <Button className="w-[450px] h-[60px] rounded-xl bg-neutral-700 hover:bg-neutral-900">Login</Button>
    //                 </div>
    //             </form>

    //             <div className="pt-6 pb-4">
    //                 <div className=" cursor-pointer">
    //                     Don’t Have an Account ? <span className="text-green-500" onClick={() => { router.push("/signup") }}>Sign up</span>
    //                 </div>
    //             </div>

    //             <div className="flex items-start">
    //                 <div className=" cursor-pointer">
    //                     Forget Account ? <span className="text-green-500" onClick={() => { router.push("/forget") }}> Forget</span>
    //                 </div>
    //             </div>

    //         </div>
    //         <div className="h-[800px] w-full bg-[#1E8FD5] rounded-2xl flex flex-[0.7] p-20 bg-gradient-to-r from-red-500 to-orange-400" >
    //             <div className="flex flex-col gap-8 ">
    //                 <div className="flex flex-col w-[240px] gap-2">
    //                     <CheckCircledIcon color="white" width={32} height={32} />
    //                     <div className="text-xl text-white">Quick and free log-in</div>
    //                     <div className="text-sm text-white">Enter your email address to login an account.</div>
    //                 </div>
    //                 <div className="flex flex-col  w-[240px] gap-2">
    //                     <CheckCircledIcon color="white" width={32} height={32} />
    //                     <div className="text-xl text-white">Cross-platform soluation</div>
    //                     <div className="text-sm text-white">Preview your newsletters on any device before sending them out</div>
    //                 </div>

    //                 <div className="flex flex-col w-[240px] gap-2">
    //                     <CheckCircledIcon color="white" width={32} height={32} />
    //                     <div className="text-xl text-white">Start sending emails</div>
    //                     <div className="text-sm text-white">Use our API or pick our pre-built templates.</div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Login
