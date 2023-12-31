"use client";

import { useEffect, useState } from "react";
import Carousal from "@/components/Carousal";
import Itembox from "@/components/Itembox";
import Image from "next/image";
import Thumbnails from "@/components/Thumbnails";
import ThumbMob from "@/components/ThumbMob";
import HomeCollections from "@/components/HomeCollections";
import Navbar from "@/components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex w-full h-full min-h-full flex-col bg-slate-50">
      {/* Desktop Warning for Customers Hidden in Mobile View */}

      {/* Carousal */}
      <section id="carousal" className="w-full h-full ">
        <Carousal />
      </section>
      <section id="bestSeller" className="w-full h-full">
        <div className="w-full h-full">
          <div className="w-full text-center text-3xl md:text-4xl font-caslon  my-10">
            Best Seller
          </div>
          <div className="flex w-[90%] md:w-[80%] mx-auto justify-between  overflow-x-scroll gap-2 no-scrollbar ">
            <Itembox
              url="/Item01.jpeg"
              name="Item 1"
              description="from : Ritvik parayum"
            />
            <Itembox
              url="/Item02.jpeg"
              name="Item 1"
              description="from : Ritvik parayum"
            />
            <Itembox
              url="/Item03.jpeg"
              name="Item 1"
              description="from : Ritvik parayum"
            />
            <Itembox
              url="/Item04.jpeg"
              name="Item 1"
              description="from : Ritvik parayum"
            />
          </div>
        </div>
      </section>

      <section id="aboutUs" className="mt-10 flex flex-col md:flex-row ">
        <div className="md:flex hidden justify-center w-[50%] h-full items-center p-10 ">
          <Thumbnails
            url1="/Item01.jpeg"
            url2="/Item02.jpeg"
            url3="/Item03.jpeg"
          />
        </div>
        <div className="md:hidden flex justify-center items-center p-2 ">
          <ThumbMob
            url1="/Item01.jpeg"
            url2="/Item02.jpeg"
            url3="/Item03.jpeg"
          />
        </div>
        <div className="flex flex-col items-center md:w-[50%]">
          <div className="md:my-[60px] text-black md:text-5xl text-3xl font-caslon">
            About Us
          </div>
          <div className=" text-lg md:text-2xl font-light items-center w-[90%] md:w-[80%] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            <br/>
            <br/>
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
            <br/>
            <br/>
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

      </section>
      <section id="collectionSection">
        <div className="mt-[80px] text-center text-black text-2xl md:text-5xl font-caslon">
          Collections
        </div>
        <div className="flex md:w-[75%] mx-auto p-5 justify-center gap-10  md:overflow-hidden overflow-scroll flex-wrap">
          <HomeCollections url="/Item01.jpg" name="Item name1" />
          <HomeCollections url="/Item02.jpg" name="Item name1" />
          <HomeCollections url="/Item03.jpg" name="Item name1" />
          <HomeCollections url="/Item04.jpg" name="Item name1" />
          <HomeCollections url="/Item01.jpg" name="Item name1" />
          <HomeCollections url="/Item02.jpg" name="Item name1" />
          <HomeCollections url="/Item03.jpg" name="Item name1" />
          <HomeCollections url="/Item04.jpg" name="Item name1" />
        </div>
      </section>
     <Footer/>
    </main>
  );
}
