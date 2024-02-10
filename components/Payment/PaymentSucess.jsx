import React from "react";

const PaymentSucess = () => {
    return (
        <div>
            {/* 1st */}
            {/* <div className="bg-white border-green-500 border-[2px] p-8 rounded-3xl hover:bg-green-50 hover:border-green-500 hover:border-[4px] cursor-pointer shadow-xl max-w-xl mx-auto mt-16">
                <div className="flex flex-col items-center">
                    <svg
                        className="h-10 w-10 bg-green-500 rounded-full text-white mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <p className="text-green-500 font-semibold text-[30px]">Payment successful!</p>
                </div>
                <p className="flex flex-col items-center font-semibold font-sans">Transaction Number: 12345678</p>
                <p className="text-gray-600 mt-2">Thank you for your payment. Your transaction was successful.</p>
            </div> */}

            {/* 2nd */}
            {/* <div className="bg-green-200 border-green-400 border p-8 rounded-md shadow-xl max-w-xl mx-auto mt-16">
                <div className="flex items-center">
                    <svg
                        className="h-6 w-6 text-green-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <p className="text-green-700 font-bold">Payment successful!</p>
                </div>
                <p className="text-gray-600 font-semibold">Thank you for your payment. Your transaction was successful.</p>
            </div> */}

            {/* 3rd */}
            {/* <div className="bg-green-200 border-green-500 border p-4 rounded-md shadow-md">
      <div className="flex items-center">
        <svg
          className="h-6 w-6 text-green-600 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-green-800 font-semibold">Payment successful!</p>
      </div>
      <p className="text-gray-600 mt-2">Thank you for your payment. Your transaction was successful.</p>
    </div> */}

            <div className=" border-red-500 border-[1px] hover:border-[3px] p-8 rounded-3xl hover:bg-red-100 bg-red-50 cursor-pointer shadow-xl max-w-xl mx-auto mt-16"> 
                <div className="flex flex-col items-center">
                    <svg
                        className="h-10 w-10 bg-red-500 rounded-full text-white mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    <p className="text-red-500  font-semibold text-[30px]">Payment cancelled!</p>
                </div>
                <p className="text-red-800 mt-2 flex flex-col items-center">Your payment has been cancelled.</p>
            </div>
        </div>
    )
}
export default PaymentSucess;