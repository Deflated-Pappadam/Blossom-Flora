import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full h-full">
            <nav className="flex w-full md:w-[95%] mx-auto flex-col justify-between  rounded-[10px] py-[20px] md:p-0">
                <div className="flex w-[80%] mx-auto  justify-between  rounded-[10px]">
                    {/* Logo */}
                    <div className="md:flex pt-3 hidden justify-start">
                        <Image src="/logo.png" alt="Logo" width={120} height={120} />
                    </div>
                    <div className="md:hidden flex pt-3 justify-start">
                        <Image src="/menu.svg" alt="Logo" width={35} height={35} className="mb-2" />
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
                    <span className="group relative inline-block hover:cursor-pointer">
                        <span className="text-black py-2">Home</span>
                        <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                    </span>
                    <span className="group relative inline-block hover:cursor-pointer">
                        <span className="text-black py-2">About Us</span>
                        <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                    </span>
                    <span className="group relative inline-block hover:cursor-pointer">
                        <span className="text-black py-2">Shop</span>
                        <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                    </span>
                    <span className="group relative inline-block hover:cursor-pointer">
                        <span className="text-black py-2">Collection</span>
                        <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                    </span>
                    <span className="group relative inline-block hover:cursor-pointer">
                        <span className="text-black py-2">Contact Us</span>
                        <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                    </span>
                </div>
            </nav>
            <section className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center my-[50px] w-full ">
                    <div className="text-[60px] font-text text-center my-5">Login</div>
                    <div className="flex flex-col w-[30%] mx-auto items-center justify-center">
                        <div className="flex w-[70%] text-[25px] font-extralight justify-start my-2">Email</div>
                        <input className='rounded-l p-3 flex-1 border border-black w-[70%]' id='email' type='email' aria-label='email address' />
                        <div className="flex w-[70%] text-[25px] font-extralight justify-start my-2">Password</div>
                        <input className='rounded-l p-3 flex-1 border border-black w-[70%]' id='email' type='password' aria-label='email address' />
                        <div className="flex w-[70%] justify-end text-[20px] font-extralight py-2">Forgot Password</div>
                        <div className="w-[70%] rounded-md bg-black p-3 text-white text-[25px] font-text text-center">Sign In</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
