
import React from "react";
import Navbar from "@/components/Navbar";

export default function Cart() {
  return (
    <main className="flex w-full h-full min-h-full flex-col bg-slate-50">
      {/* Desktop Warning for Customers Hidden in Mobile View */}
      <div className="w-full font-light text-lg border-b-2 justify-start p-2 hidden md:flex">
        <div className="w-[80%] mx-auto">
          oi guys we dont have all kerala delivery and order 2 days before.
        </div>
      </div>

      <Navbar/>

     <section id="cart" className="flex flex-col w-full">
        <div className="flex  w-full justify-center items-center text-[50px] font-text">Cart</div>
        <div className="flex w-full justify-between p-10 ">
            <div className="flex  w-[45%] ">gap</div>
            <div className="flex flex-col w-[45%] ">
                <div className="w-[70%] mx-auto flex justify-between text-2xl font-caslon">
                    <div>Quantity</div>
                    <div>Total</div>
                </div>
                < div className="w-[70%] mx-auto flex justify-between text-2xl font-caslon mt-[10%]">
                    <div>1</div>
                    <div>₱1,500.00</div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
