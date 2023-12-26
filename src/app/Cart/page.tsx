import React from "react";
import Navbar from "@/components/Navbar";

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
  ];

  return (
    <main className="flex w-full h-full min-h-screen flex-col bg-slate-50 ">
      {/* Desktop Warning for Customers Hidden in Mobile View */}
      <div className="w-full font-light text-lg border-b-2 justify-start p-2 hidden md:flex">
        <div className="w-[80%] mx-auto">
          oi guys we dont have all kerala delivery and order 2 days before.
        </div>
      </div>

      <Navbar />

      <section
        id="cart"
        className="flex flex-col w-full h-full justify-center items-center"
      >
        <div className="flex h-full  w-full justify-center items-center text-[50px] font-text">
          Cart
        </div>
        {cartItems.length === 0 ? (
          <div>
            <div className="flex w-full h-full justify-center items-center text-center font-extralight text-2xl tracking-[1px]">
              Your cart is currently empty.
            </div>
            <a
              href="/"
              className="flex w-full h-full justify-center items-center text-center font-extralight text-xl underline p-5 tracking-wider leading-6"
            >
              Continue shopping
            </a>
          </div>
        ) : (
          <div className="flex flex-col w-full justify-between p-10 ">
           
           
           <div className="w-[70%] mx-auto flex justify-between text-2xl font-caslon pb-5">
              <div>Quantity</div>
              <div>Total</div>
            </div>

          
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex w-full justify-between ">
                  <div className="flex  w-[45%] ">img placeholder</div>
                  <div className="flex flex-col w-[45%] ">
                    <li key={item.id} className="">
                      <div className="w-[70%] mx-auto flex justify-between text-2xl font-caslon mt-[10%]">
                        <div>1</div>
                        <div>₱1,500.00</div>
                      </div>
                    </li>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
