"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const { push } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  onAuthStateChanged(auth, (user) => {
    if(user) {
      push("/")
    }
  })

  const handleLogin = () => {
    const user = auth.currentUser
    console.log(user);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <section className="w-full h-full min-h-screen flex flex-col justify-center items-center">
        <Navbar></Navbar>
        <div className="flex flex-col justify-center items-center my-[50px] w-full ">
          <div className="text-[50px] font-text text-center my-5">Login</div>
          <div className="flex flex-col w-full md:w-[30%] mx-auto items-center justify-center ">
            <div className="flex w-[70%] text-[25px] font-extralight justify-start my-2">
              Email
            </div>
            <input
              className="flex-1 border border-black w-[70%]  p-3"
              id="email"
              type="email"
              aria-label="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex w-[70%] justify-between">
              <div className="flex  text-[25px] font-extralight justify-start my-2">
                Password
              </div>
              <div className="flex  justify-end text-[16px] font-extralight pt-4">
                Forgot Password?
              </div>
            </div>
            <input
              className=" p-3 flex-1 border border-black w-[70%]"
              id="email"
              type="password"
              aria-label="email address"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-[70%]  bg-black m-4 p-3 text-white text-[20px] font-light text-center " onClick={handleLogin}>
              SIGN IN
            </button>
            <a className="font-light my-2 text-[17px]" href="/SignUp">Create Account</a>
          </div>
        </div>

     
      </section>
    </div>
  );
}
