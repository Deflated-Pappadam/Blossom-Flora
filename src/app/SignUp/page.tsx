"use client";

import Navbar from "@/app/components/Navbar";
import { auth, db, getUser } from "../../../firebase";
import { User, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, setDoc} from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


export default function SignUp() {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter()

  async function createDoc (user: User) {
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      phone: phone
    })
  }

  useEffect(() => {
    return getUser(user => {
      if (user) push("/")
    })
  })
  
  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            const user = userCredential.user
            createDoc(user);
            toast.success("SignUp Success")
            push("/");
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        toast.error(`Failed : ${errorCode}`)
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
    });

  }

  return (
    <main className="flex flex-col w-full h-full justify-between ">
      <Toaster />
      
      <Navbar/>
      <section className="w-full h-full  flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center my-[50px] w-full ">
          <div className="text-[40px] font-text text-center my-5">
            Create Account
          </div>
          <div className="flex flex-col md:w-[30%] mx-auto items-center justify-center text-start">
            <div className="flex w-full md:w-[80%] text-[20px]  poppins-extralight justify-start uppercase tracking-widest  my-2">
              Name
            </div>
            <input
              className="flex-1 border border-black md:w-[80%] w-full  p-3"
              id="email"
              type="text"
              aria-label="email address"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex md:w-[80%] w-full  text-[20px] poppins-extralight uppercase tracking-widest justify-start my-2">
              Phone
            </div>
            <input
              className="flex-1 border border-black md:w-[80%] w-full  p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              id="email"
              type="number"
              aria-label="email address"
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="flex md:w-[80%] w-full text-[20px] poppins-extralight uppercase tracking-widest justify-start my-2">
              Email
            </div>
            <input
              className="flex-1 border border-black md:w-[80%] w-full  p-3"
              id="email"
              type="email"
              aria-label="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex md:w-[80%] w-full text-[20px] poppins-extralight uppercase tracking-widest justify-start my-2">
              Password
            </div>
            <input
              className=" p-3 flex-1 border border-black md:w-[80%] w-full"
              id="email"
              type="password"
              aria-label="email address"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="md:w-[80%] w-full rounded-md bg-black  text-white text-[20px] font-light text-center my-4 p-4" onClick={handleSignUp}>
              CREATE
            </button>
            <a className="font-light my-2 text-[17px]" href="/login">
              Back To Sign In
            </a>
          </div>
        </div>

       
      </section>
      <footer>
        A better footer?
       </footer>
    </main>
  );
}
