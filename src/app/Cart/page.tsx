"use client"
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { auth, db } from "../../../firebase";
import { useRouter, redirect } from "next/navigation";
import { User, onAuthStateChanged } from "firebase/auth";
import { DocumentData, collection, onSnapshot, query, where } from "firebase/firestore";

export default function Cart() {
  
  const [user,setUser] = useState<User | null>(null)
  const [cartItems, setCartItems] = useState<DocumentData>([])

  const { push } = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user)  push("/")
      else setUser(user);
    })
    return unsubscribe;
  }, [user])
  

  useEffect(() => {
    const unsubscribe = () => {
      try{
        if (!user) return
        const q = query(collection(db, "cart"), where("UserId", "==", user?.uid))
        return onSnapshot(q, (snapshot)=>{
          setCartItems(snapshot.docs.map((doc) => {
            console.log(doc.data());
            return doc.data();
          }))
        })
      }
      catch(e){
        console.log(e);
      }
    }
    return unsubscribe();
  }, [user])


  return (
    <main className="flex w-full h-full min-h-screen flex-col bg-slate-50 ">
      {/* Desktop Warning for Customers Hidden in Mobile View */}      
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

          {/* 
            cartItems = {UserId, Name, Price, Quantity}
          */}
            {/* <ul>
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
            </ul> */}
          </div>
        )}
      </section>
    </main>
  );
}
