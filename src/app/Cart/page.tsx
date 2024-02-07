"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { auth, db, getUser } from "../../../firebase";
import { useRouter, redirect } from "next/navigation";
import { User } from "firebase/auth";
import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

export default function Cart() {
  const [user, setUser] = useState<User | null>(null);
  const [cartItems, setCartItems] = useState<DocumentData>([]);

  const { push } = useRouter();
  useEffect(() => {
    return getUser((user) => {
      if (!user) push("/");
      else setUser(user);
    });
  }, [user]);
  const removecart = async (id: null) => {
    try {
      if (!user) return;
      const q = query(
        collection(db, "cart"),
        where("UserId", "==", user?.uid),
        where("ItemId", "==", id)
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc1) => {
        const docRef = doc(db, "cart", doc1.id);
        deleteDoc(docRef);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    

    const unsubscribe = () => {
      try {
        if (!user) return;
        const q = query(
          collection(db, "cart"),
          where("UserId", "==", user?.uid)
        );
        return onSnapshot(q, (snapshot) => {
          setCartItems(
            snapshot.docs.map((doc) => {
              console.log(doc.data());
              return doc.data();
            })
          );
        });
      } catch (e) {
        console.log(e);
      }
    };
    return unsubscribe();
  }, [user]);

  return (
    <main className="flex w-full h-full min-h-screen flex-col bg-slate-50 poppins-thin">
      <Navbar/>
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
            <div className="w-[70%] mx-auto md:flex hidden justify-between text-2xl font-caslon pb-5">
              <div className="min-w-[45%] "></div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            <ul>
              {cartItems.map(
                (item: {
                  id: React.Key;
                  ItemId: null;
                  ItemName: null;
                  Quantity: null;
                  price: null | null | undefined;
                }) => (
                  <li
                    key={item.id}
                    className="flex md:flex-row flex-col w-full justify-between  items-center "
                  >
                    <div className="flex  md:max-w-[45%] md:mx-[200px]">
                      <img
                        src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[100px] h-[100px] object-cover"
                      />
                      <div>
                        <div className="poppins-light p-2">{item.ItemName}</div>
                        <button className="w-fit h-fit p-2 bg-black m-2 text-white rounded-lg" onClick={() => removecart(item.ItemId)}
>
                          
                          REMOVE
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col md:w-[45%] ">
                      <li key={item.id} className="">
                        <div className="md:w-[70%] w-full mx-auto flex justify-between text-2xl font-caslon md:mt-[10%] p-2">
                          <div>{item.Quantity}</div>
                          <div>&#x20B9; {item.price}</div>
                        </div>
                      </li>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
