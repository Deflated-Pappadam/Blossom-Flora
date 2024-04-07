"use client";

import React, { useEffect, useState } from "react";
import CollectionItem from "@/app/components/CollectionItem";
import Navbar from "@/app/components/Navbar";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import LoadingScreen from "../loading";

type data = {
  id: string;
  data: DocumentData;
};

function Collections() {
  const [allData, setAllData] = useState<data[] | null>(null);
  const checkBox = "mr-5  sm:w-[20px] sm:h-[20px]";

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "collection"), (snapshot) => {
      setAllData(
        snapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        }),
      );
    });

    return () => unsub();
  }, []);

  if (!allData) return <LoadingScreen />;

  return (
    <div className="w-full">
      <main className="flex h-full min-h-full w-full flex-col bg-slate-50">
        {/* Desktop Warning for Customers Hidden in Mobile View */}

        <section className="relative flex justify-center bg-white pt-2 max-[1200px]:flex-col max-[1200px]:items-center">
          {/* <form className="min-[1200px]:pl-10 min-[1200px]:pr-2 w-[clamp(250px,375px,90%)]">
            <input type="search" placeholder="Search" className="my-6 w-full border-2 border-black md:py-3 py-2 rounded-lg px-2"/>
            <label htmlFor="filter" className="py-3 md:text-xl">
              Collections
            </label>
            <ul id="filter" className="ml-2 gap-3 max-[1200px]:flex">
              <li className="flex items-center mt-3">
                <input
                  id="input1"
                  type="checkbox"
                  className={checkBox}
                />
                <label htmlFor="input1" className="max-sm:text-sm">Flower</label>
              </li>
              <li className="flex items-center mt-3">
                <input id="input2" type="checkbox" className={checkBox} />
                <label htmlFor="input2" className="max-sm:text-sm">Flower</label>
              </li>
              <li className="flex items-center mt-3">
                <input id="input3" type="checkbox" className={checkBox} />
                <label htmlFor="input3" className="max-sm:text-sm">Flower</label>
              </li>
            </ul>
          </form> */}
          <div className="grid grid-cols-4 gap-2">
            {allData.map((item) => {
              return (
                <CollectionItem
                  key={item.id}
                  ImageUrl={item.data.ImageUrl}
                  name={item.data.Name}
                  desc={item.data.Desc}
                  price={item.data.Price}
                  id={item.id}
                />
              );
            })}
            {/* <div className="relative flex h-[400px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-md border text-center">
              <p className="font-caslon text-xl">More Coming Soon</p>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Collections;
