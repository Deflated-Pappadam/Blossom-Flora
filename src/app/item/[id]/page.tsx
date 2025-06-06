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
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          
          {/* Image Section */}
          <div className="relative w-[500px] h-[600px]">
            <div className="aspect-[2/4] overflow-hidden rounded-lg bg-gray-50 ">
              <Image
                src={data?.ImageUrl}
                alt={data?.Name || "Product Image"}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105 "
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            
            {/* Category */}
            <div className="text-sm font-medium tracking-wider text-gray-500 uppercase">
              Flowers
            </div>

            {/* Title */}
            <h1 className="text-3xl font-light tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              {data?.Name}
            </h1>

            {/* Description */}
            {data?.Desc && (
              <p className="text-lg leading-relaxed text-gray-600 max-w-lg">
                {data.Desc}
              </p>
            )}

            {/* Price */}
            {data?.Price && (
              <div className="text-2xl font-light text-gray-900">
                ₹{data.Price}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-4">
              <label className="text-sm font-medium tracking-wider text-gray-700 uppercase">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDecrease}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gray-400 hover:bg-gray-50"
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="w-12 text-center text-lg font-medium">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gray-400 hover:bg-gray-50"
                  disabled={quantity >= 999}
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            {data?.Price && (
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-600">Total</span>
                  <span className="text-2xl font-medium text-gray-900">
                    ₹{(data.Price * quantity).toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              
              {/* Book Now Button */}
              <a
                href={`https://wa.me/7592092057?text=${encodeURIComponent(`Hi, I'm interested in ${data?.Name}. Is it available? Quantity: ${quantity}`)}`}
                className="group relative block w-full overflow-hidden rounded-lg bg-black px-8 py-4 text-center transition-all duration-300 hover:bg-gray-800"
              >
                <span className="relative text-lg font-medium text-white">
                  Book Now via WhatsApp
                </span>
              </a>

              {/* Add to Cart Button (if user is logged in) */}
              {/* {user && (
                <button
                  onClick={handleAddToCart}
                  disabled={loading}
                  className="w-full rounded-lg border-2 border-gray-900 px-8 py-4 text-lg font-medium text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white disabled:opacity-50"
                >
                  {loading ? "Adding..." : "Add to Cart"}
                </button>
              )} */}
            </div>

            {/* Additional Info */}
            <div className="space-y-2 text-sm text-gray-500 border-t pt-6">
              <p>• Free consultation on flower care</p>
              <p>• Custom arrangements available</p>
              <p>• Contact us for bulk orders</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}