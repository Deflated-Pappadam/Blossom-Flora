import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function SignUp() {
    return (
        <div className="flex flex-col w-full h-full">
            <section className="w-full h-full min-h-screen flex flex-col justify-center items-center">
                <Navbar></Navbar>
                <div className="flex flex-col justify-center items-center my-[50px] w-full ">
                    <div className="text-[40px] font-text text-center my-5">Create Account</div>
                    <div className="flex flex-col w-[30%] mx-auto items-center justify-center">

                    <div className="flex w-[70%] text-[25px] font-extralight justify-start my-2">Name</div>
                        <input className='flex-1 border border-black w-[70%]  p-3' id='email' type='text' aria-label='email address' />
                        <div className="flex w-[70%] text-[25px] font-extralight justify-start my-2">Phone</div>
                        <input className='flex-1 border border-black w-[70%]  p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' id='email' type='number' aria-label='email address' />

                        <div className="flex w-[70%] text-[25px] font-extralight justify-start my-2">Email</div>
                        <input className='flex-1 border border-black w-[70%]  p-3' id='email' type='email' aria-label='email address' />
                        <div className="flex w-[70%] text-[25px] font-extralight justify-start my-2">Password</div>
                        <input className=' p-3 flex-1 border border-black w-[70%]' id='email' type='password' aria-label='email address' />
             
                        <div className="w-[70%] rounded-md bg-black  text-white text-[20px] font-light text-center my-4 p-4">CREATE</div>
                        <div className="font-light my-2 text-[17px]">Back To Sign In</div>
                    </div>
                </div>
            
            <footer
                className="flex flex-col w-full h-full   justify-end mt-auto"
            >
                <div className="flex md:flex-row flex-col justify-between mt-auto">
                    <div>
                        <div className="m-4 text-6xl text-black font-semibold">
                            Blossom Flora
                        </div>
                        <div className="m-4 text-3xl text-gray-500">
                            some great sayn by ritvik
                        </div>
                        <div className="m-4 text-2xl text-gray-500">
                            location, jksg kjf,dgdf
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="text-xl text-black font-semibold">Socials </div>
                        <a href="">
                            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                                twitter: ddgsd
                            </div>
                        </a>

                        <a href="">
                            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                                Insta : dsgsd
                            </div>
                        </a>
                        <a href="https://www.adithyakrishnan.com/">
                            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                                Website : fdhfd
                            </div>
                        </a>
                    </div>
                    <div className="mt-10">
                        <div className="text-xl text-black font-semibold">Contact Us</div>
                        <a href="">
                            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                                Phone:
                            </div>
                        </a>
                        <a href="">
                            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                                Adress 1
                            </div>
                        </a>
                        <a href="">
                            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                                adress 2
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
            </section>
        </div>
    )
}