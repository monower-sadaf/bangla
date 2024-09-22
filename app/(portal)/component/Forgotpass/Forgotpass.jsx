"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { relative_image_path } from "@/helper";
import { useRouter } from "next/navigation";
// import { ForgotpassType } from "@/types/portal/ForgotpassType";

const Forgotpass = () => {
    const router = useRouter();
    const [showPass, setShowPass] = useState(false);
    const [step, setStep] = useState(1);
    const [timer, setTimer] = useState(0);
    const [formInputs, setFormInputs] = useState({
      username: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    useEffect(() => {
      const interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [timer]);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="lg:w-[60%] border border-primary rounded-md bg-white shadow shadow-primary p-4 lg:p-8 flex flex-col justify-center items-center"
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

      {step == 1 && (
        <div className="w-full">
          <p className="font-medium text-[#0E1F1C] pb-3 lg:pb-6 text-center">
            পাসওয়ার্ড রিসেট করুন
          </p>
          <fieldset className="border border-[#979C9E] rounded-md flex items-center py-1 px-2 lg:py-2 lg:px-4 w-full mb-3 ">
            <input
              value={formInputs?.phone}
              onChange={(e) =>
                setFormInputs({ ...formInputs, phone: e.target.value })
              }
              type="text"
              name="phone"
              id="phone"
              className="outline-none rounded-md w-full text-13 lg:text-15 placeholder:text-[#979C9E]"
              placeholder="নিবন্ধনকৃত ইমেইল অথবা মোবাইল নম্বর"
            />
            <label htmlFor="phone">
              <svg
                className="w-4 h-4 lg:w-6 lg:h-6 fill-[#7ECBA1]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
              </svg>
            </label>
          </fieldset>

          <button
            onClick={() => {
              setStep(2);
              setTimer(60);
            }}
            className="bg-primary rounded-md px-2 py-1 text-white flex items-center gap-2 float-end text-14 shadow-lg"
          >
            <span>পরবর্তী</span>
            <span>
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </span>
          </button>
        </div>
      )}

      {step == 2 && (
        <div className="w-full">
          <div className="pb-3 lg:pb-6 flex justify-between">
            <p className="font-medium text-[#0E1F1C] text-center text-14">
              আপনার মোবাইলে পাঠানো <br /> ওটিপি যাচাই করুন।
            </p>
            <div
              className="radial-progress text-12 font-bold text-red-500"
              style={{
                "--value": 100 - (timer / 10) * 100,
                "--size": "2.5rem",
              }}
              role="progressbar"
            >
              {timer}
            </div>
          </div>

          <div className="flex justify-center gap-4 pb-10">
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                if (e.target.value.length == 1) {
                  const nextInput = e.target.nextElementSibling;
                  if (nextInput) {
                    nextInput.focus();
                  }
                } else if (e.target.value.length < 1) {
                  const nextInput = e.target.previousElementSibling;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              className="border border-[#188754] outline-none w-12 h-12 rounded-md text-26 text-center"
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                if (e.target.value.length == 1) {
                  const nextInput = e.target.nextElementSibling;
                  if (nextInput) {
                    nextInput.focus();
                  }
                } else if (e.target.value.length < 1) {
                  const nextInput = e.target.previousElementSibling;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              className="border border-[#188754] outline-none w-12 h-12 rounded-md text-26 text-center"
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                if (e.target.value.length == 1) {
                  const nextInput = e.target.nextElementSibling;
                  if (nextInput) {
                    nextInput.focus();
                  }
                } else if (e.target.value.length < 1) {
                  const nextInput = e.target.previousElementSibling;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              className="border border-[#188754] outline-none w-12 h-12 rounded-md text-26 text-center"
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                if (e.target.value.length < 1) {
                  const nextInput = e.target.previousElementSibling;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              className="border border-[#188754] outline-none w-12 h-12 rounded-md text-26 text-center"
            />
          </div>
          <div className="flex justify-between gap-4 pb-5">
            <p className="text-14 text-[#767474]">আপনি কি ওটিপি পাচ্ছেন না?</p>
            <button
              onClick={() => setTimer(60)}
              className="text-[#178754] underline"
            >
              আবার পাঠান
            </button>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="bg-primary rounded-md px-2 py-1 text-white flex items-center gap-2 float-end text-14 shadow-lg"
            >
              পূর্ববর্তী
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-primary rounded-md px-2 py-1 text-white flex items-center gap-2 float-end text-14 shadow-lg"
            >
              পরবর্তী
            </button>
          </div>
        </div>
      )}

      {step == 3 && (
        <div className="w-full">
          {/* <fieldset className="border border-[#979C9E] rounded-md flex items-center py-1 px-2 lg:py-2 lg:px-4 w-full mb-3 lg:mb-6">
            <input
              value={formInputs.username}
              onChange={(e) =>
                setFormInputs({ ...formInputs, username: e.target.value })
              }
              type="text"
              name="username"
              id="username"
              className="outline-none rounded-md w-full text-13 lg:text-15 placeholder:text-[#979C9E]"
              placeholder="ব্যবহারকারীর নাম"
            />
            <label htmlFor="username">
              <svg
                className="w-4 h-4 lg:w-6 lg:h-6 fill-[#7ECBA1]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
              </svg>
            </label>
          </fieldset>
          <fieldset className="border border-[#979C9E] rounded-md flex items-center py-1 px-2 lg:py-2 lg:px-4 w-full mb-3 lg:mb-6">
            <input
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs({ ...formInputs, email: e.target.value })
              }
              type="email"
              name="email"
              id="email"
              className="outline-none rounded-md w-full text-13 lg:text-15 placeholder:text-[#979C9E]"
              placeholder="ইমেইল"
            />
            <label htmlFor="email">
              <svg
                className="w-4 h-4 lg:w-6 lg:h-6 fill-[#7ECBA1]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
              </svg>
            </label>
          </fieldset> */}
          <fieldset className="border border-[#979C9E] rounded-md flex items-center py-1 px-2 lg:py-2 lg:px-4 w-full mb-3 lg:mb-6">
            <input
              value={formInputs.password}
              onChange={(e) =>
                setFormInputs({ ...formInputs, password: e.target.value })
              }
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              className={`outline-none rounded-md w-full text-13 lg:text-15 placeholder:text-[#979C9E] ${
                !showPass && "text-primary"
              }`}
              placeholder="পাসওয়ার্ড"
            />
            <button
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {!showPass ? (
                <svg
                  className="w-4 h-4 lg:w-6 lg:h-6 fill-[#7ECBA1]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 lg:w-6 lg:h-6 fill-[#7ECBA1]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
              )}
            </button>
          </fieldset>
          <fieldset className="border border-[#979C9E] rounded-md flex items-center py-1 px-2 lg:py-2 lg:px-4 w-full mb-3 lg:mb-6">
            <input
              value={formInputs.confirmPassword}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  confirmPassword: e.target.value,
                })
              }
              type={showPass ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className={`outline-none rounded-md w-full text-13 lg:text-15 placeholder:text-[#979C9E] ${
                !showPass && "text-primary"
              }`}
              placeholder="পাসওয়ার্ড নিশ্চিত করুন "
            />
            <button
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {!showPass ? (
                <svg
                  className="w-4 h-4 lg:w-6 lg:h-6 fill-[#7ECBA1]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 lg:w-6 lg:h-6 fill-[#7ECBA1]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
              )}
            </button>
          </fieldset>

          <button
            type="submit"
            onClick={() => router.push("/signin")}
            className="bg-primary text-white px-2 py-1 mb-4 text-14 lg:text-16 lg:px-4 lg:py-2 rounded w-full"
          >
            সাবমিট
          </button>
        </div>
      )}
 

      <p className="text-[#72777A] text-12 lg:text-14 mb-1 mt-2">
        একটি অ্যাকাউন্ট আছে?
        <span className="ml-2">
          <Link
            href={{ pathname: "/signin" }}
            shallow
            className="text-primary underline"
          >
            লগইন
          </Link>
        </span>
      </p>
    </form>
  );
};

export default Forgotpass;
