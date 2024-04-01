"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import DashboardContainer from '../../components/Dashboard/DashboardContainer'
import visaImg from "../../../assests/Images/visa.png"
import AdminPlanModal from '../../components/Modals/AdminPlanModal'
import { loadRazorpayScript } from '../../../utils/payment'
import { paymentInit } from '../../../api/paymentApi'
import { ROOMSTAY_LOGO } from '../../../utils/constants'
import { createOrder } from '../../../api/orderApi'
import { useSelector } from 'react-redux'

const Billing = () => {
  const userRedux = useSelector((state) => state?.user)

  const displayRazorpay = async ({ amountRupee, planId }) => {
    try {
      const res = await loadRazorpayScript();

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      // creating a new order
      const result = await paymentInit({ amount: Math.floor(amountRupee * 100) })

      if (!result) {
        alert("Server error, Are you online?");
        return;
      }

      const { amount, razorpayId, currency, KEY_ID, paymentId } = result.data;

      const options = {
        key: KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Roomstay Organization",
        description: "Test Transaction",
        image: ROOMSTAY_LOGO,
        order_id: razorpayId,
        handler: async function (response) {

          const data = {
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            paymentId: paymentId,
            plan: planId
          };

          try {
            const response = await createOrder(data)
          } catch (error) {
            console.log(error)
          }

        },
        prefill: {
          name: `${userRedux?.firstName} ${userRedux?.lastName}`,
          email: userRedux?.email || "abc@mail.com",
          contact: "9876543210",
        },
        notes: {
          address: "Roomstay Corporate",
        },
        theme: {
          color: "salmon",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error)
    }
  }

  const handlePayment = ({ amountRupee, planId }) => {
    displayRazorpay({ amountRupee, planId })
  }

  return (
    <DashboardContainer>
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

            <div className={` ${userRedux?.plan === "free" ? "bg-gradient-to-r from-cyan-400 to-blue-500" : userRedux?.plan === "silver" ? "bg-gradient-to-r from-neutral-500 to-gray-300" : "bg-gradient-to-r from-amber-400 to-orange-500"} w-[265px] h-[221px] p-8 rounded-2xl shadow-lg || flex flex-col justify-start items-start gap-4`}>
              <div className="text-white text-base font-normal">Your plan</div>

              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-white text-2xl font-bold capitalize">{userRedux?.plan || "Free"}</div>
                <div className="text-white text-sm font-normal">Renews on  Nov. 2021</div>
              </div>

              {
                userRedux?.plan === "free" ? (
                  <AdminPlanModal handleSuccess={handlePayment}>
                    <Button className="mt-2 py-5 px-8 rounded-full text-gray-600 font-medium text-md" variant="secondary">Upgrade Plan</Button>
                  </AdminPlanModal>
                ) : (
                  <div className='text-2xl mt-2 font-semibold text-white'>
                    180 Days Left
                  </div>
                )
              }

            </div>
          </div>

        </div>
      </div>
    </DashboardContainer>
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



