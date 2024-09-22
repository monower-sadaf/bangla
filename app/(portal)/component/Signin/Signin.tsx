"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { relative_image_path } from "@/helper";
import { useForm } from "react-hook-form";
import { loginApi } from "../../_api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Signin = () => { 
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (data:any) =>{
    const { username, password } = data;
    const loginData ={
      email:username,
      password
    }
    const resLogin = await loginApi(loginData);
    console.log(resLogin);
    if(resLogin.status){
      const token= resLogin.data.token;
      const user={
        id:resLogin.data.user.id,
        role:resLogin.data.user.role,
      }
      Cookies.set("token",token);
      Cookies.set("user",JSON.stringify(user));
      if(user.role === "admin"){
        window.location.href = "http://localhost:3000/admin";
        toast.success("Login Successful");
      }
      else{
        window.location.href = "http://localhost:3000/user";
        toast.success("Login Successful");
      }
    }
    
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="lg:w-[60%] border border-primary rounded-md bg-white shadow shadow-[#4D7200] p-4 lg:p-8 flex flex-col justify-center items-center"
      >
        <Image
          src={relative_image_path("logo.png")}
          className="w-[4em] h-[1.5em] lg:w-[7.625em] lg:h-[2.1875em] mb-3 lg:mb-6"
          height={1000}
          width={1000}
          alt="বাংলা"
        />
        <hr
          className="
               w-full text-[#348739] mb-2 lg:mb-4"
        />
        <p className="font-medium text-16 lg:text-20 text-[#0E1F1C] pb-3 lg:pb-6">
          লগইন
        </p>
   
          <div className="py-1 px-2 lg:px-4 w-full">
            <fieldset className="border border-[#979C9E] rounded-md flex items-center px-2 lg:pt-2 lg:pb-1 lg:px-4 w-full">
              <input
                {...register("username", { required: true })}
                type="text"
                // name="username"
                id="username"
                className="outline-none rounded-md w-full text-13 lg:text-15 placeholder:text-[#979C9E]"
                placeholder="নিবন্ধনকৃত ইমেইল / মোবাইল নম্বর"
              />
              <label htmlFor="username">
                <svg
                  className="w-4 h-4  fill-[#7ECBA1]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
                </svg>
              </label>
            </fieldset>
            {errors.username && (
              <p className="text-red-500 text-10 py-1 ps-2">
                user name field is required
              </p>
            )}
            {/* {!errors.username && (
            <p className="text-red-500 text-10 py-1">
              Password Has to be atleast 8 characters
            </p>
          )} */}
          </div>
          <div className="py-1 px-2 lg:py-2 lg:px-4 w-full mb-2">
            <fieldset className="border border-[#979C9E] rounded-md flex items-center px-2 lg:pt-2 lg:pb-1 lg:px-4 w-full">
              <input
               
                type={showPass ? "text" : "password"}
                // name="password"
                {...register("password", { required: true, minLength: 8 })}
                id="password"
                className={`outline-none rounded-md w-full text-13 lg:text-15 placeholder:text-[#979C9E] ${
                  !showPass && "text-primary"
                }`}
                placeholder="পাসওয়ার্ড"
              />
              <button
              type="button"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {!showPass ? (
                  <svg
                    className="w-4 h-4  fill-[#7ECBA1]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4  fill-[#7ECBA1]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                  </svg>
                )}
              </button>
            </fieldset>
            {errors.password && (
              <p className="text-red-500 text-10 py-1 ps-2">
                Password Has to be atleast 8 characters
              </p>
            )}
            {/* <p className="text-red-500 text-10">
            Password Has to be atleast 8 characters
          </p> */}
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-2 py-1 mb-4 text-14 lg:text-16 lg:px-4 lg:py-2 rounded w-full lg:mb-8"
          >
            লগইন
          </button>
        

        <p className="text-[#72777A] text-12 lg:text-14 mb-1">
          অ্যাকাউন্ট নেই?
          <span className="ml-2">
            <Link
              href={{ pathname: "/signup" }}
              shallow
              className="text-primary underline"
            >
              নিবন্ধন করুন
            </Link>
          </span>
        </p>

        <Link
          href={{
            pathname: "/forgot-password",
          }}
          shallow
          className="underline text-gray-500 hover:text-primary text-12 lg:text-14"
        >
          পাসওয়ার্ড ভুলে গেছেন?
        </Link>
      </form>
    </>
  );
};

export default Signin;
