"use client";

import BSBox from "@/app/components/BSBox";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import ThumbMob from "@/app/components/ThumbMob";
import Thumbnails from "@/app/components/Thumbnails";
import HomeCollections from "@/app/components/HomeCollections";
import Carousal from "./components/Carousel";
import {
  DocumentData,
  collection,
  onSnapshot,
  query,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase";

type CollectionData = {
  id: string;
  data: DocumentData;
};

function Page() {
  const [bestSellers, setBestSellers] = useState<CollectionData[]>([]);
  const [allCollections, setAllCollections] = useState<CollectionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all collections data
    const unsub = onSnapshot(collection(db, "collection"), (snapshot) => {
      const collectionsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setAllCollections(collectionsData);
      setBestSellers(collectionsData.slice(0, 5));
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <>
      <section id="heroSection" className="flex h-fit w-full md:max-h-[60vh]">
        <div className="flex w-full flex-col md:flex-row">
          <div className="md:order-0 bg-accent order-1 m-auto flex h-full w-full flex-col items-center justify-center  p-10 md:w-[50%]">
            <div className="text-primary flex flex-col justify-center text-2xl leading-none md:p-10 md:text-[3vw] ">
              SPECIALISTS IN THE CREATION, CURATION AND SUPPLY OF HIGH-QUALITY,
              STYLISH AND UNIQUE FLOWERS.
              <a
                href="/collections"
                className="bg-primary text-background my-5 h-fit w-fit p-2 px-4 text-lg"
              >
                COLLECTIONS
              </a>
            </div>
          </div>
          <div className="order-0 m-auto h-[80%] w-full md:order-1 md:h-full md:w-[50%]">
            <Carousal />
          </div>
        </div>
      </section>

      <section
        id="bestseller"
        className="flex flex-col items-center bg-[#fafafa]"
      >
        <div className="w-full max-w-7xl justify-center gap-8 p-2">
          <h2 className="p-5 font-caslon font-medium md:p-10">Best Sellers</h2>
          <section className="flex h-full w-full items-center justify-start gap-6 overflow-x-scroll py-4 md:overflow-x-hidden md:py-6">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[300px] min-w-[250px] animate-pulse rounded-lg bg-gray-200"
                  ></div>
                ))
              : bestSellers.map((item) => (
                  <BSBox
                    key={item.id}
                    ImageUrl={item.data.ImageUrl}
                    ItemId={item.id}
                    name={item.data.Name}
                    price={item.data.Price}
                    id={item.id}
                  />
                ))}
          </section>
        </div>
      </section>

      <section id="aboutUs" className="mt-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
          <div className="hidden h-full w-[50%] items-center justify-center p-10 md:flex ">
            <Thumbnails
              url1="/items/I (5).jpeg"
              url2="/items/I (4).jpeg"
              url3="/items/I (3).jpeg"
            />
          </div>
          <div className="flex items-center justify-center p-2 md:hidden ">
            <ThumbMob
              url1="/items/I (5).jpeg"
              url2="/items/I (4).jpeg"
              url3="/items/I (3).jpeg"
            />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-caslon text-black">About Us</h2>
            <div className="px-5 text-[1rem] font-light md:text-xl">
              Flowers are a special way to show someone you love and appreciate
              them. You can visit Blossom Flora to select flowers of your choice
              which can be arranged by us in an appealing way. We have a wide
              variety of options to make sure that you can find something
              appropriate for the occasion for which you need them.
              <br />
              <br />
              We also provide instructions to customers on how to take care of
              flowers and plants.
            </div>
          </div>
        </div>
      </section>

      <section
        id="collectionSection"
        className="mx-auto bg-white py-20 md:w-[80vw]"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 md:text-4xl">
              Our Collections
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Discover our carefully curated selection of premium flowers and
              arrangements
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square animate-pulse rounded-2xl bg-gray-200"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allCollections.slice(0, 6).map((item) => (
                <HomeCollections
                  key={item.id}
                  url={item.data.ImageUrl}
                  name={item.data.Name}
                  id={item.id}
                />
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <a
              href="/collections"
              className="bg-primary text-background my-5 h-fit w-fit p-2 px-4 text-lg"
            >
              View All Collections
              
            
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
