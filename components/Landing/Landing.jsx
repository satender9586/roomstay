"use client"
import React from 'react'
import Footer from '../Footer/Footer'
import Offer from './Offer'
import FourBoxes from './FourBoxes'
import Pricing from './Pricing'
import Content from './Content'
import Cards from './Cards'
import Growth from './Growth'
import Header from './Header'
import { loadRazorpayScript } from '../../utils/payment'
// import { Button } from '@/components/ui/button'
import { paymentInit } from '../../api/payment'


const Landing = () => {

    const displayRazorpay = async () => {
        try {
            const res = await loadRazorpayScript();

            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }

            // creating a new order
            const result = await paymentInit({ amount: Math.floor(4000) })

            if (!result) {
                alert("Server error. Are you online?");
                return;
            }

            const { amount, order_id, currency, KEY_ID } = result.data;

            const options = {
                key: KEY_ID, // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: "Roomstay Organization",
                description: "Test Transaction",
                image: "https://roomstay.netlify.app/_ipx/w_32,q_75/%2F_next%2Fstatic%2Fmedia%2Froomstay.657192db.png?url=%2F_next%2Fstatic%2Fmedia%2Froomstay.657192db.png&w=32&q=75",
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };
                    try {
                        console.log("Rzaro padone", data)
                        // const response = await paymentSuccess(data)
                        // if (response.status) {
                        //     const apiData = {
                        //         cart: cart,
                        //         shippingAddress: shipping,
                        //         paymentId: response?.data?._id
                        //     }
                        //     const order = await createOrderApi(apiData)
                        //     if (order.status) {
                        //         navigate(`/order/${order?.orderId}`)
                        //         dispatch(clearCart())
                        //     }
                        // }
                    } catch (error) {
                        console.log(error)
                    }
                },
                prefill: {
                    name: "Suraj",
                    email: "suraj23@gmail.com",
                    contact: "1285887788",
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
    return (
        <>
            {/* <Button onClick={displayRazorpay}>Pay</Button> */}
            <Header />
            <Offer />
            <Pricing />
            <Content />
            <Growth />
            <Cards />
            <FourBoxes />
            <Footer />
        </>
    )
}

export default Landing