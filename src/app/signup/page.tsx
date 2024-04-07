"use client";

import Navbar from "@/app/components/Navbar";
import { auth, db, getUser } from "../../../firebase";
import { User, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  async function createDoc(user: User) {
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      phone: phone,
    });
  }

  useEffect(() => {
    return getUser((user) => {
      if (user) push("/");
    });
  });

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        createDoc(user);
        toast.success("SignUp Success");
        push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(`Failed : ${errorCode}`);
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <>
      <Toaster />
      <section className="flex h-full  w-full flex-col items-center justify-center">
        <div className="my-[50px] flex w-full flex-col items-center justify-center ">
          <div className="font-text my-5 text-center text-3xl">
            Create Account
          </div>
          <div className="mx-auto flex flex-col items-center justify-center text-start md:w-[30%]">
            <div className="poppins-extralight my-2 flex w-full  justify-start text-lg uppercase tracking-widest  md:w-[90%]">
              Name
            </div>
            <input
              className="w-full flex-1 border border-black p-3  md:w-[90%]"
              id="name"
              type="text"
              aria-label="email address"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="poppins-extralight my-2 flex  w-full justify-start text-lg uppercase tracking-widest md:w-[90%]">
              Phone
            </div>
            <input
              className="flex w-full border border-black p-3  [appearance:textfield] md:w-[90%] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              id="phone"
              type="number"
              aria-label="email address"
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="poppins-extralight my-2 flex w-full justify-start text-lg uppercase tracking-widest md:w-[90%]">
              Email
            </div>
            <input
              className="flex w-full border border-black p-3  md:w-[90%]"
              id="email"
              type="email"
              aria-label="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="poppins-extralight my-2 flex w-full justify-start text-lg uppercase tracking-widest md:w-[90%]">
              Password
            </div>
            <input
              className="flex w-full border border-black p-3  md:w-[90%]"
              id="password"
              type="password"
              aria-label="email address"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="my-4 w-full rounded-md bg-black  p-3 text-center text-xl font-light text-white md:w-[90%]"
              onClick={handleSignUp}
            >
              CREATE
            </button>
            <a className="my-2 text-[17px] font-light" href="/Login">
              Back To Sign In
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
