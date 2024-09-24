"use client"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import storeImg from "../../../assests/Icons/store.png"
import Image from "next/image"
import Header from "@/components/Landing/Header"

const Login = () => {
  let arr = [1]
  const [checkboxes, setCheckboxes] = useState({
    shade1: false,
    shade2: false,
    shade3: false,
  })

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }))
  }

  const handleCheckboxClick = (checkboxName) => {
    // Uncheck all checkboxes except the one being clicked
    const updatedCheckboxes = Object.keys(checkboxes).reduce((acc, name) => {
      acc[name] = name === checkboxName
      return acc
    }, {})

    setCheckboxes(updatedCheckboxes)
  }

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="flex justify-center w-[100%] relative">
          {/* <div className="h-[180px] w-[10%] p-4 flex flex-col  gap-2  ">
          <div className="fixed shadow-lg h-[140px] flex flex-col  justify-center border rounded-2xl m-3 p-4 pr-6">
            <div className=" font-semibold text-blue-700 font-sans mb-2">
              Filter -
            </div>
            <div className=" flex gap-2">
              <div>
                <Checkbox
                  checked={checkboxes.shade1}
                  onChange={() => handleCheckboxChange("shade1")}
                  onClick={() => handleCheckboxClick("shade1")}
                />
              </div>
              <div className="text-[14px] font-serif ">Confirmed</div>
            </div>
            <div className=" flex gap-2">
              <div>
                <Checkbox
                  checked={checkboxes.shade2}
                  onChange={() => handleCheckboxChange("shade2")}
                  onClick={() => handleCheckboxClick("shade2")}
                />
              </div>
              <div className="text-[14px] font-serif">Canceled</div>
            </div>
            <div className=" flex gap-2">
              <div>
                <Checkbox
                  checked={checkboxes.shade3}
                  onChange={() => handleCheckboxChange("shade3")}
                  onClick={() => handleCheckboxClick("shade3")}
                />
              </div>
              <div className="text-[14px] font-serif">Pending</div>
            </div>
          </div>
        </div> */}
          {/* <div className="w-[70%]">
            {arr.map((item, index) => (
              <div key={index} className="flex justify-center items-center p-2">
                <div className="w-[100%]  ">
                  <div className="h-[130px] px-3  w-full border p-2 flex flex-1 gap-6 items-centershadow-lg rounded-lg">
                    <div className="flex gap-6 flex-[0.7] justify-center">
                      <div className="flex items-center  h-full">
                        <Image
                          src={storeImg}
                          style={{ objectFit: "cover" }}
                          className="rounded-[8px] h-[100px] w-[250px]"
                        />
                      </div>
                      <div className="h-[100px] flex  flex-col gap-2">
                        <div className="w-[100%] font-bold">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ducimus beatae incidunt cupiditate accusamus
                          obcaecati quae nulla? Alias delectus 
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
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Login
