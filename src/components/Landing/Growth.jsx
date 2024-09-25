import React from "react";
import clockImg from "../../../assests/Icons/clock.svg";
import storeImg from "../../../assests/Icons/store.png";
import shoppingImg from "../../../assests/Icons/shoppingcart.png";
import accountingImg from "../../../assests/Icons/accounting.jpg";
import androidImg from "../../../assests/Icons/android.png";
import analyst from "../../../assests/Icons/analyst.png";
import Image from "next/image";
const Growth = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="flex flex-1 flex-col h-[100%]">
        <div className=" flex-[0.15]  ">
          <div className="w-full h-full flex flex-col items-center text-center justify-center gap-2 ">
            <div className=" font-bold text-5xl">
              E-commerce Simplified, Success Amplified
            </div>
            <div className="text-2xl">
              Empowering your oniline bussiness growth with all the essential
              tools.
            </div>
          </div>
        </div>
        <div className=" flex-[0.85]">
          <div className="container mx-auto mt-8">
            <div className="flex flex-wrap justify-center gap-5 w-[94%] ">
              {/* First Row */}
              <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center rounded-lg shadow-lg hover:bg-slate-100 hover:translate-y-2 transition">
                <div className="h-full flex flex-col items-center justify-center p-7 gap-2">
                  <Image src={clockImg} className="w-16 h-16" />
                  <div className="font-bold">Site Speed</div>
                  <div className="text-center text-sm font-semibold text-gray-950 ">
                    Fast storefronts, Do not take our word for it , start
                    selling online and see it for yourself!
                  </div>
                </div>
              </div>
              <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center rounded-lg shadow-lg hover:bg-slate-50 hover:translate-y-2 transition curs">
                <div className="h-full flex flex-col items-center justify-center p-7 gap-2">
                  <Image src={storeImg} className="w-16 h-16" />
                  <div className="font-bold">Multi-Warehouse</div>
                  <div className="text-center text-sm font-semibold text-gray-950 ">
                    One store, multilpe locations, Ship products drom multiple
                    warehouse across india.
                  </div>
                </div>
              </div>
              <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center rounded-lg shadow-lg hover:bg-slate-50 hover:translate-y-2 transition curs">
                <div className="h-full flex flex-col items-center justify-center p-7 gap-2">
                  <Image src={shoppingImg} className="w-16 h-16" />
                  <div className="font-bold">Optimized Checkouts</div>
                  <div className="text-center text-sm font-semibold text-gray-950 ">
                    Offer a seamless shopping expreince optimized for checkouts
                    and reduce abandonment rates.
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center rounded-lg shadow-lg hover:bg-slate-50 hover:translate-y-2 transition curs">
                <div className="h-full flex flex-col items-center justify-center p-7 gap-2">
                  <Image src={accountingImg} className="w-16 h-16" />
                  <div className="font-bold">Staff Accounts</div>
                  <div className="text-center text-sm font-semibold text-gray-950 ">
                    Add employees, colleagues and teammates to help you grow
                    your bussiness while managing accrose.
                  </div>
                </div>
              </div>
              <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center rounded-lg shadow-lg hover:bg-slate-50 hover:translate-y-2 transition curs">
                <div className="h-full flex flex-col items-center justify-center p-7 gap-2">
                  <Image src={androidImg} className="w-16 h-16" />
                  <div className="font-bold">Site Speed</div>
                  <div className="text-center text-sm font-semibold text-gray-950 ">
                    The world is mobile, It is time your store is too. Get more
                    loyal customers with your mobile app.
                  </div>
                </div>
              </div>
              <div className="mb-4 bg-white w-[370px] h-[280px] flex items-center justify-center rounded-lg shadow-lg hover:bg-slate-50 hover:translate-y-2 transition curs">
                <div className="h-full flex flex-col items-center justify-center p-7 gap-2">
                  <Image src={analyst} className="w-16 h-16" />
                  <div className="font-bold">Site Speed</div>
                  <div className="text-center text-sm font-semibold text-gray-950 ">
                    All the information about your sales, traffic, regions and
                    products, just a single click away.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
