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
import { auth, db, getUser } from "../../../../firebase";
import { User, onAuthStateChanged } from "firebase/auth";

export default function Item({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    return  getUser(user => setUser(user))
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

  const handleAddToCart = async () => {
    try {
      const q = query(
        collection(db, "cart"),
        where("UserId", "==", user?.uid),
        where("ItemId", "==", params.id)
      );
      const d = await getDocs(q);
      if (!d.empty) {
        if( d.docs.length > 2){
          console.log("multiple document error");
        }
        else{
          await updateDoc(doc(db, 'cart', d.docs[0].id), {
            Quantity: increment(quantity)
          })
        }
      } else {
        await addDoc(collection(db, "cart"), {
          UserId: user?.uid,
          ItemId: params.id,
          ItemName: data?.Name,
          Quantity: quantity,
          price: data?.Price,
        });
      }
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className="w-full md:min-h-screen flex flex-col">
      <div className="w-full h-full flex md:flex-row flex-col  md:px-10 justify-center item-center">
        <div className="md:w-[50%] md:h-full h-[50%] flex justify-center items-center mx-auto my-auto  overflow-hidden">
          <div>
            <Image
              src={data?.ImageUrl}
              alt="Item01"
              width={600}
              height={800}
              className="flex md:w-[500px] w-[300px]  justify-center h-[600px] object-fit "
            />
          </div>
        </div>
        <div className="flex flex-col md:w-[50%] h-full justify-center overflow-hidden p-4">
          <div className="md:w-[80%] h-full md:h-fit ">
            <div className="md:text-xl  font-light">Flowers</div>
            <div className="text-4xl font-text">{data?.Name}</div>
            <div className="text-xl font-light mt-5">{data?.Desc}</div>
            <div className="flex flex-col py-5 font-light">
              <div className="text-3xl  py-2">Quantity</div>

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
              ${data?.Price}
            </div>
            <div className="group md:mx-0 mx-auto md:w-[60%] md:h-[60px] w-[90%] h-[50px] bg-black rounded-md hover:border-[1px] border-black hover:bg-white transition-all">
              <button className="flex w-full h-full justify-center items-center text-white group-hover:text-black ">
                Book Now
              </button>
            </div>
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
    </div>
  );
}
