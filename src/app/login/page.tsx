"use client";
import { useEffect, useState } from "react";
import { auth, getUser } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return getUser((user) => {
      if (user) push("/");
    });
  });

  const handleLogin = () => {
    const user = auth.currentUser;
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

        toast.error(`Login Error  ${errorCode}`);
      });
  };

  return (
    <>
      <Toaster />
      <section className="flex h-full  w-full flex-col items-center justify-center ">
        <div className="my-[50px] flex w-full flex-col items-center justify-center ">
          <div className="font-text my-5 text-center font-caslon text-[50px]">
            Login
          </div>
          <div className="poppins-extralight mx-auto flex w-full flex-col items-center justify-center tracking-widest md:w-[30%] ">
            <div className="my-2 flex w-[90%] justify-start  text-[20px] uppercase">
              Email
            </div>
            <input
              className="w-[90%] flex-1 border border-black  p-3"
              id="email"
              type="email"
              aria-label="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex w-[90%] justify-between">
              <div className="my-2  flex justify-start  text-[20px] uppercase">
                Password
              </div>
              <div className="flex  justify-end pt-4 text-[16px]">
                Forgot Password?
              </div>
            </div>
            <input
              className=" w-[90%] flex-1 border border-black p-3"
              id="email"
              type="password"
              aria-label="email address"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="m-4  w-[90%] bg-black p-3 text-center text-[20px] font-light text-white "
              onClick={handleLogin}
            >
              SIGN IN
            </button>
            <a className="my-2 text-[17px] font-light" href="/signup">
              Create Account
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
