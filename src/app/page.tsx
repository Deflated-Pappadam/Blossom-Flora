import Carousal from "@/components/Carousal";
import Itembox from "@/components/Itembox";
import Image from "next/image";
import Thumbnails from "@/components/Thumbnails";
import ThumbMob from "@/components/ThumbMob";

export default function Home() {
  return (
    <main className="flex w-full h-full min-h-full flex-col bg-slate-50">
      {/* Desktop Warning for Customers Hidden in Mobile View */}
      <div className="w-full font-light text-lg border-b-2 justify-start p-2 hidden md:flex">
        <div className="w-[80%] mx-auto">
          oi guys we dont have all kerala delivery and order 2 days before.
        </div>
      </div>

      <nav className="flex w-full md:w-[95%] mx-auto flex-col justify-between  rounded-[10px] py-[20px] md:p-0">
        <div className="flex w-[80%] mx-auto  justify-between  rounded-[10px]">
          {/* Logo */}
          <div className="md:flex pt-3 hidden justify-start">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>
          {/* Title */}
          <div className="flex flex-col md:w-full font-logo text-xl md:text-5xl text-center items-center justify-center ">
            <div className="md:flex hidden text-3xl ">The </div>Blossom Flora
          </div>
          {/* Icons */}
          <div className="flex md:gap-6 gap-2 items-center h-full my-auto md:pt-3">
            <Image src="/search.svg" alt="Logo" width={30} height={30} />
            <Image src="/cart.png" alt="Logo" width={30} height={30} />
          </div>
        </div>

        <div className="hidden md:flex w-full text-2xl font-extralight   items-center text-center justify-center gap-8  pb-5">
          <span className="group relative inline-block ">
            <span className="text-black py-2">Home</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block ">
            <span className="text-black py-2">About Us</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block ">
            <span className="text-black py-2">Shop</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block ">
            <span className="text-black py-2">Collection</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block ">
            <span className="text-black py-2">Contact Us</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
        </div>
      </nav>
      {/* Carousal */}
      <section id="carousal" className="w-full h-full ">
        <Carousal />
      </section>
      <section id="bestSeller" className="w-full h-full">
        <div className="w-full h-full">
          <div className="w-full text-center text-4xl font-caslon  my-10">
            Best Seller
          </div>
          <div className="flex w-[90%] md:w-[80%] mx-auto justify-between overflow-x-scroll gap-2 no-scrollbar ">
            <Itembox
              url="/Item01.jpg"
              name="Item 1"
              description="from : Ritvik parayum"
            />
            <Itembox
              url="/Item02.jpg"
              name="Item 1"
              description="from : Ritvik parayum"
            />
            <Itembox
              url="/Item03.jpg"
              name="Item 1"
              description="from : Ritvik parayum"
            />
            <Itembox
              url="/Item04.jpg"
              name="Item 1"
              description="from : Ritvik parayum"
            />
          </div>
        </div>
      </section>

      <section id="aboutUs" className="mt-10 flex flex-col md:flex-row ">
        <div className="md:flex hidden justify-center w-[50%] h-full items-center p-10 ">
          <Thumbnails
            url1="/Item01.jpg"
            url2="/Item02.jpg"
            url3="/Item03.jpg"
          />
        </div>
        <div className="md:hidden flex justify-center items-center p-2 ">
          <ThumbMob
            url1="/Item01.jpg"
            url2="/Item02.jpg"
            url3="/Item03.jpg"
          />
        </div>
        <div className="flex flex-col items-center md:w-[50%]">
          <div className="md:my-[50px] text-black md:text-6xl text-3xl font-caslon">
            About Us
          </div>
          <div className=" text-lg md:text-2xl font-light items-center w-[90%] md:w-[80%] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

      </section>

      
    </main>
  );
}
