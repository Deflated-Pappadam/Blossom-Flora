"use client";

import {
  DocumentData,
  addDoc,
  collection,
  doc,
  getDocs,
  increment,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { db, getUser } from "../../../../firebase";
import { User } from "firebase/auth";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/app/loading";

export default function Item({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DocumentData>();
  const router = useRouter();

  useEffect(() => {
    return getUser((user) => setUser(user));
  }, [user]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "collection", params.id), (doc) => {
      setData(doc.data());
    });

    return () => unsub();
  }, [params.id]);

  const handleIncrease = () => {
    if (quantity < 999) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBooking = () => {
    addDoc(collection(db, "/history"), {
      Name: data?.Name,
      quantity: quantity,
      total: data?.Price * quantity,
    });
    updateDoc(doc(db, "/collection", params.id), {
      Stock: increment(quantity * -1),
    });
    router.push("/Cart");
  };

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "cart"),
        where("UserId", "==", user?.uid),
        where("ItemId", "==", params.id),
      );
      const d = await getDocs(q);
      if (!d.empty) {
        if (d.docs.length > 2) {
          console.log("multiple document error");
        } else {
          await updateDoc(doc(db, "cart", d.docs[0].id), {
            Quantity: increment(quantity),
            price: increment(data?.Price * quantity),
          });
        }
      } else {
        await addDoc(collection(db, "cart"), {
          UserId: user?.uid,
          ItemId: params.id,
          ItemName: data?.Name,
          Quantity: quantity,
          price: data?.Price * quantity,
          ImageUrl: data?.ImageUrl,
        });
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  if (!data || loading) return <LoadingScreen />;

  return (
    <div className="item-center flex h-full w-full flex-col  justify-center md:flex-row md:px-10">
      <div className=" mx-auto my-auto  flex max-h-[500px] items-center justify-center overflow-hidden  md:h-full">
        <Image
          src={data?.ImageUrl}
          alt="Item01"
          width={600}
          height={800}
          className="flex h-[600px] w-[300px]  justify-center object-cover md:w-[500px] "
        />
      </div>
      <div className="flex h-full flex-col justify-center overflow-hidden p-4 md:w-[50%]">
        <div className="h-full md:h-fit md:w-[80%] ">
          <div className="font-light  md:text-xl">Flowers</div>
          <div className="pathway-extreme text-4xl">{data?.Name}</div>
          <div className="poppins-light mt-5 text-xl">{data?.Desc}</div>
          {/* <div className="flex flex-col py-5 font-light">
              <div className="pathway-extreme py-2  text-3xl">Quantity</div>

              <div className="flex items-center space-x-2">
                <button
                  className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <input
                  title="test"
                  type="number"
                  className="w-20 border px-4 py-2 text-center"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button
                  className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mx-5 my-5 text-3xl text-gray-800 md:mx-0">
              ${data?.Price * quantity}
            </div> */}

          {/* {user && ( */}
          <div className="group mx-auto mt-5 h-[50px] w-[90%] rounded-md border-black bg-black transition-all hover:border-[1px] hover:bg-white md:mx-0 md:h-[60px] md:w-[60%]">
            <a
              href="https://wa.me/message/TWF43CZ5ANBTL1"
              // onClick={handleBooking}
              className="flex h-full w-full items-center justify-center text-white group-hover:text-black "
            >
              Book Now
            </a>
          </div>
          {/* )} */}
          {/* {user && (
              <div className="group mx-auto my-5 h-[50px] w-[90%] rounded-md border-black bg-black transition-all hover:border-[1px] hover:bg-white md:mx-0 md:h-[60px] md:w-[60%]">
                <button
                  className="flex w-full h-full justify-center items-center text-white group-hover:text-black "
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            )} */}
        </div>
      </div>
    </div>
  );
}
