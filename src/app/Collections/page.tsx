"use client"

import React, { useEffect, useState } from "react";
import CollectionItem from "@/components/CollectionItem";
import Navbar from "@/components/Navbar";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

type data = {
  id: string
  data: DocumentData
}

function Collections() {
  const [allData, setAllData] = useState<data[]>([]);
  const checkBox = "mr-5  sm:w-[20px] sm:h-[20px]";

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "collection"), (snapshot) => {
      setAllData(
        snapshot.docs.map((doc) => {
          console.log(doc.data())
          return  {id: doc.id, data: doc.data()};
        })
      );
    });

    return () => unsub()
  }, [])

  return (
    <div className="w-full">
      <main className="flex w-full h-full min-h-full flex-col bg-slate-50">
        {/* Desktop Warning for Customers Hidden in Mobile View */}
        <div className="w-full font-light text-lg border-b-2 justify-start p-2 hidden md:flex">
          <div className="w-[80%] mx-auto">
            oi guys we dont have all kerala delivery and order 2 days before.
          </div>
        </div>

        <Navbar/>
        
        <section className="pt-2 flex max-[1200px]:flex-col max-[1200px]:items-center bg-white relative">
          <form className="min-[1200px]:pl-10 min-[1200px]:pr-2 w-[clamp(250px,375px,90%)]">
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
          </form>
        <div className="w-full mt-5 p-5 grid gap-[2.5em] md:grid-cols-[repeat(auto-fill,250px)] grid-cols-[repeat(auto-fill,200px)] md:justify-between justify-center">
            {
              allData.map((item) => {
                return <CollectionItem key={item.id} ImageUrl={item.data.ImageUrl} name={item.data.Name} price={item.data.Price} id={item.id}/>
              })
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default Collections;
