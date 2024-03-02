"use client"
import { Button } from '@/components/ui/button'
import Dashboard from '../../../components/Dashboard/Dashboard'
import visaImg from "../../../assests/Images/visa.png"
import React from 'react'
import Image from 'next/image'

const Billing = () => {
  return (
    <>
      <Dashboard>
        <div>
          <div className="text-indigo-950 text-[32px] font-bold">Billing</div>

          <div className='mt-10 flex'>
            <div className='flex-[0.6] '>



              <div className='mb-8'>
                <div className="text-indigo-950 text-base font-bold">Order History</div>
                <div className="text-slate-500 text-sm font-normal">Manage billing information and view receips</div>
              </div>

              <Table />

              <div className='mt-16'>
                <div className="text-indigo-950 text-base font-bold">Payment Method</div>
                <div className="text-slate-500 text-sm font-normal">Manage billing information and view receips</div>

                <div className=' w-[90%] mt-6 | flex items-center justify-between'>

                  <div>
                    <Image src={visaImg} alt="visa" width={67} height={38} />
                  </div>
                  <div className="flex-[0.7] text-indigo-950 text-base font-normal ">Visa ending in 2255</div>
                  <div className='flex-[0.2]'>

                    <Button variant="outline" className="text-indigo-950 text-base font-medium ">
                      Remove
                    </Button>
                  </div>
                </div>


              </div>

            </div>
            <div className='flex-[0.4]'>

              <div className="w-[265px] h-[221px] p-8 bg-[#EE4D37] rounded-2xl shadow || flex flex-col justify-start items-start gap-4">
                <div className="text-white text-base font-normal">Your plan</div>

                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="text-white text-2xl font-bold">Pro Annual</div>
                  <div className="text-white text-sm font-normal">Renews on  Nov. 2021</div>
                </div>


                <div className="px-4 py-2 rounded-lg border border-white border-opacity-50 justify-start items-start gap-2.5 inline-flex hover:bg-red-600 cursor-pointer">
                  <div className="text-white text-base font-normal">Upgrade subscription</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Dashboard>
    </>
  )
}

export default Billing


const Table = () => {
  return (
    <div className='w-[90%] flex flex-col justify-center'>
      <div className='grid grid-cols-3'>
        <div className="text-slate-500 text-sm font-normal">Date</div>
        <div className=" text-slate-500 text-sm font-normal">Type</div>
        <div className="text-slate-500 text-sm font-normal">Receipt</div>
      </div>

      <div className='flex flex-col gap-3'>
        <TableRow />
        <TableRow />
        <TableRow />
      </div>

      <div className="text-red-500 text-base font-normal underline mt-4 cursor-pointer">Load more</div>


    </div>
  )
}

const TableRow = () => {
  return (
    <div className='grid grid-cols-3 py-2 rounded hover:shadow hover:scale-105 transition delay-75 duration-300 ease-in-out cursor-pointer '>
      <div className="text-indigo-950 text-base font-medium flex items-center">Oct. 21, 2021</div>
      <div className="  text-indigo-950 text-base font-medium flex items-center">Pro Annual</div>
      <div>
        <Button variant="outline" className="text-indigo-950 text-base font-medium ">
          Download
        </Button>
      </div>
    </div>
  )
}



