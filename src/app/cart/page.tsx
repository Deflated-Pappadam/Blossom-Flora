"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
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
import LoadingScreen from "../loading";
import Image from "next/image";

export default function Cart() {
  const [user, setUser] = useState<User | null>(null);
  const [cartItems, setCartItems] = useState<DocumentData | null>(null);

  const { push } = useRouter();
  useEffect(() => {
    return getUser((user) => {
      if (!user) push("/login");
      else setUser(user);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const removecart = async (id: null) => {
    try {
      if (!user) return;
      const q = query(
        collection(db, "cart"),
        where("UserId", "==", user?.uid),
        where("ItemId", "==", id),
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
          where("UserId", "==", user?.uid),
        );
        return onSnapshot(q, (snapshot) => {
          setCartItems(
            snapshot.docs.map((doc) => {
              console.log(doc.data());
              return doc.data();
            }),
          );
        });
      } catch (e) {
        console.log(e);
      }
    };
    return unsubscribe();
  }, [user]);

  if (!cartItems) {
    return <LoadingScreen />;
  }

  return (
    <main className="flex h-full min-h-screen w-full flex-col bg-slate-50 font-poppins">
      <Navbar />
      {/* Desktop Warning for Customers Hidden in Mobile View */}
      <section
        id="cart"
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <div className="font-text flex  h-full w-full items-center justify-center text-[50px]">
          Cart
        </div>
        {cartItems.length === 0 ? (
          <div>
            <div className="flex h-full w-full items-center justify-center text-center text-2xl font-extralight tracking-[1px]">
              Your cart is currently empty.
            </div>
            <a
              href="/"
              className="flex h-full w-full items-center justify-center p-5 text-center text-xl font-extralight leading-6 tracking-wider underline"
            >
              Continue shopping
            </a>
          </div>
        ) : (
          <div className="flex w-full flex-col justify-between p-10 ">
            <div className="mx-auto hidden w-[70%] justify-between pb-5 font-caslon text-2xl md:flex">
              <div className="min-w-[45%] "></div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            <ul>
              {cartItems.map(
                (item: {
                  id: React.Key;
                  ItemId: null;
                  ItemName: string;
                  Quantity: null;
                  price: null | null | undefined;
                  ImageUrl: string;
                }) => (
                  <li
                    key={item.id}
                    className="flex w-full flex-col items-center justify-between  md:flex-row "
                  >
                    <div className="flex  md:mx-[200px] md:max-w-[45%]">
                      <Image
                        src={item.ImageUrl}
                        alt={item.ItemName}
                        width={100}
                        height={100}
                        className="h-[100px] w-[100px] object-cover"
                      />
                      <div>
                        <p className="poppins-light p-2">{item.ItemName}</p>
                        <button
                          className="m-2 h-fit w-fit rounded-lg bg-black p-2 text-white"
                          onClick={() => removecart(item.ItemId)}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col md:w-[45%] ">
                      <li key={item.id} className="">
                        <div className="mx-auto flex w-full justify-between p-2 font-caslon text-2xl md:mt-[10%] md:w-[70%]">
                          <div>{item.Quantity}</div>
                          <div>&#x20B9; {item.price}</div>
                        </div>
                      </li>
                    </div>
                  </li>
                ),
              )}
            </ul>
            <button>Checkout</button>
          </div>
        )}
      </section>
    </main>
  );
}
