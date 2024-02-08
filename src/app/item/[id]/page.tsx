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

export default function Item({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState<User | null>(null);
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
  }, []);

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
    router.push("/Cart")
  };

  const handleAddToCart = async () => {
    try {
      const q = query(
        collection(db, "cart"),
        where("UserId", "==", user?.uid),
        where("ItemId", "==", params.id)
      );
      const d = await getDocs(q);
      if (!d.empty) {
        if (d.docs.length > 2) {
          console.log("multiple document error");
        } else {
          await updateDoc(doc(db, "cart", d.docs[0].id), {
            Quantity: increment(quantity),
            price:increment(data?.Price*quantity)
          });
        }
      } else {
        await addDoc(collection(db, "cart"), {
          UserId: user?.uid,
          ItemId: params.id,
          ItemName: data?.Name,
          Quantity: quantity,
          price: data?.Price*quantity,
          ImageUrl: data?.ImageUrl,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full md:min-h-screen flex flex-col justify-between items-center ">
      <Navbar />
      <div className="w-full h-full flex md:flex-row flex-col  md:px-10 justify-center item-center">
        <div className=" max-h-[500px] md:h-full  flex justify-center items-center mx-auto my-auto  overflow-hidden">
          <Image
            src={data?.ImageUrl}
            alt="Item01"
            width={600}
            height={800}
            className="flex md:w-[500px] w-[300px]  justify-center h-[600px] object-cover "
          />
        </div>
        <div className="flex flex-col md:w-[50%] h-full justify-center overflow-hidden p-4">
          <div className="md:w-[80%] h-full md:h-fit ">
            <div className="md:text-xl  font-light">Flowers</div>
            <div className="text-4xl pathway-extreme">{data?.Name}</div>
            <div className="text-xl poppins-light mt-5">{data?.Desc}</div>
            <div className="flex flex-col py-5 font-light">
              <div className="text-3xl pathway-extreme  py-2">Quantity</div>

              <div className="flex items-center space-x-2">
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <input
                  title="test"
                  type="number"
                  className="w-20 px-4 py-2 border text-center"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-3xl text-gray-800 md:mx-0 my-5 mx-5">
              ${data?.Price * quantity}
            </div>

            {user && (
              <div className="group md:mx-0 mx-auto md:w-[60%] md:h-[60px] w-[90%] h-[50px] bg-black rounded-md hover:border-[1px] border-black hover:bg-white transition-all">
                <button
                  onClick={handleBooking}
                  className="flex w-full h-full justify-center items-center text-white group-hover:text-black "
                >
                  Book Now ( vinu fix this)
                </button>
              </div>
            )}
            {user && (
              <div className="group md:mx-0 mx-auto md:w-[60%] md:h-[60px] w-[90%] h-[50px] bg-black rounded-md hover:border-[1px] border-black hover:bg-white transition-all my-5">
                <button
                  className="flex w-full h-full justify-center items-center text-white group-hover:text-black "
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
