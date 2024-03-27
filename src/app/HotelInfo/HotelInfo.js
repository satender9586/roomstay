import React from "react";
import { TbAirConditioning } from "react-icons/tb";
import { IoIosRadioButtonOff } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";

const HotelInfo = () => {
  return (
    <div className="container">
      {/* background image attached    */}
      <div>
        <img
          width={"100%"}
          height={"auto"}
          className="rounded-[0px] h-[400px]"
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 my-5">
        <div className="col-span-2">
          <div>
            <h1 className="font-bold  text-sm md:text-[2rem]">
              Flagship White Diamond
            </h1>
            <h1 className="mt-[15px] font-normal text-[#4C7F97] font-popplins text-sm md:text-[1.1rem]">
              Flagship White Diamond Saare Jaha Se Acha Hindustan Hamara Hum
              BullBulle hai uske
            </h1>
          </div>
          <div className="mt-[24px]">
            <h1 className="font-normal md:font-bold text-[#222222] font-popplins text-sm md:text-[1.3rem]">
              About this Room
            </h1>
            <h1 className="mt-[8px] leading-6 font-normal text-[#4C7F97] font-popplins text-sm md:text-[0.9rem]">
              Flagship White Diamond Saare Jaha Se Acha Hindustan Hamara Hum
              BullBulle hai uske Flagship White Diamond Saare Jaha Se Acha
              Hindustan Hamara Hum BullBulle hai uske Flagship White Diamond
              Saare Jaha Se Acha Hindustan Hamara Hum BullBulle hai uske
              Flagship White Diamond Saare Jaha Se Acha Hindustan Hamara Hum
              BullBulle hai uske
            </h1>
          </div>
          <div className="mt-[24px]">
            <h1 className="font-normal md:font-bold text-[#222222] font-popplins text-sm md:text-[1.3rem]">
              Amenities
            </h1>
            <div className="mt-3 grid grid-cols-3 gap-6">
              <div className="flex items-center gap-1">
                <TbAirConditioning className="size-6" /> <span>AC</span>
              </div>
              <div className="flex items-center gap-1">
                <TbAirConditioning className="size-6" /> <span>AC</span>
              </div>
              <div className="flex items-center gap-1">
                <TbAirConditioning className="size-6" /> <span>AC</span>
              </div>
              <div className="flex items-center gap-1">
                <TbAirConditioning className="size-6" /> <span>AC</span>
              </div>
              <div className="flex items-center gap-1">
                <TbAirConditioning className="size-6" /> <span>AC</span>
              </div>
              <div className="flex items-center gap-1">
                <TbAirConditioning className="size-6" /> <span>AC</span>
              </div>
            </div>
          </div>
          <div className="mt-[24px]">
            <h1 className="font-normal md:font-bold text-[#222222] font-popplins text-sm md:text-[1.3rem]">
              Hotel policies
            </h1>
            <div className="mt-[10px]">
              <h1 className="flex mt-1 items-center gap-2 font-normal text-[#4C7F97] font-popplins text-sm md:text-[0.9rem]">
                <IoIosRadioButtonOff /> Couples are welcome
              </h1>
              <h1 className="flex mt-1 items-center gap-2 font-normal text-[#4C7F97] font-popplins text-sm md:text-[0.9rem]">
                <IoIosRadioButtonOff /> Guests can check in using any local or
                outstation ID proof (PAN card not accepted).
              </h1>
              <h1 className="flex mt-1 items-center gap-2 font-normal text-[#4C7F97] font-popplins text-sm md:text-[0.9rem]">
                <IoIosRadioButtonOff /> As a complimentary benefit, your stay is
                now insured by Ack
              </h1>
              <h1 className="flex mt-1 items-center gap-2 font-normal text-[#4C7F97] font-popplins text-sm md:text-[0.9rem]">
                <IoIosRadioButtonOff />
                This hotel is serviced under the trade name of White Diamond as
                per quality standards of OYO
              </h1>
            </div>
          </div>
          <div className="mt-[24px] w-[80%]">
            <h1 className="font-normal md:font-bold text-[#222222] font-popplins text-sm md:text-[1.3rem]">
              Choose Your Room
            </h1>
            <div className="mt-[10px]">
              <div className="flex items-center gap-1 bg-[#B7B7C7] font-bold font-popplins text-[0.9rem] text-[#FBFAFC] pl-5">
                <FaRegStar className="text-[#FFDC64]" />{" "}
                <h1>SELECTED CATEGORY</h1>
              </div>
              <div
                className="p-4 flex justify-between"
                style={{ border: "1px solid #E9E9E9" }}
              >
                <div>
                  <h1 className="flex items-center  font-medium text-[1.5rem] ">
                    Classic{" "}
                    <span>
                      <GiConfirmed />
                    </span>
                  </h1>
                  <h1 className="flex items-center  font-medium text-[0.9rem]">
                    Room size: 100 sqft{" "}
                  </h1>
                  <div className="flex gap-5 mt-[30px]">
                    <div className="flex items-center gap-1">
                      <TbAirConditioning className="size-6" /> <span>AC</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TbAirConditioning className="size-6" /> <span>AC</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    width={"100%"}
                    height={"auto"}
                    className="rounded-[2px] h-[100px]"
                    src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </div>
              </div>
              <div
                className="p-4 flex justify-between"
                style={{ border: "1px solid #E9E9E9" }}
              >
                <div>
                  <h1 className="flex items-center gap-1 md:text-[0.9rem]">
                    450{" "}
                    <span
                      className="flex items-center "
                      style={{ textDecoration: "line-through" }}
                    >
                      <FaRupeeSign />
                      434
                    </span>
                  </h1>
                  <h1 className="flex items-center md:text-[0.9rem]">
                    +<FaRupeeSign />
                    434 taxes & free
                  </h1>
                </div>
                <div
                  className="flex items-center justify-center px-10"
                  style={{ border: "1px solid #E9E9E9" }}
                >
                  <h1 className="text-[0.9rem] flex items-center gap-1">
                    <GiConfirmed />
                    SELECT
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div
            className="bg-[#F5F5F5] px-5  py-8 rounded-md"
            style={{ border: "1px solid #E9E9E9" }}
          >
            <h1 className="font-normal md:font-[400] text-[#222222] font-popplins text-sm md:text-[1.3rem]">
              Individual Plan
            </h1>

            <div
              className="mt-[1.5rem]"
              style={{ borderTop: "1px solid #CBCDD4" }}
            ></div>
            <div className="mt-[2.5rem]">
              <div className="flex   mt-[1rem]">
                <h1 className="text-[14px]">Title</h1>
                <h1 className="text-[14px] ml-[5rem]">Basic Packag</h1>
              </div>
              <div className="flex   mt-[1rem]">
                <h1 className="text-[14px]">Description</h1>
                <h1 className="text-[14px] ml-[2.1rem]">Basic Packag</h1>
              </div>
              <div className="flex mt-[1rem]">
                <h1 className="text-[14px]">No Of Days</h1>
                <h1 className="text-[14px] ml-[2.1rem]">Basic Packag</h1>
              </div>
              <div className="flex  mt-[1rem]">
                <h1 className="text-[14px]">Revisions</h1>
                <h1 className="text-[14px] ml-[2.9rem]">Basic Packag</h1>
              </div>
            </div>
            <div className="mt-[2.5rem] flex item-center justify-center">
              <button className="p-[1.1rem] px-[2rem]  bg-green-500 rounded-full text-lg text-white ">
                Continue($500)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;