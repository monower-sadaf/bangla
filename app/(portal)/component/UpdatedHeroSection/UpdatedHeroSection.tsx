import AppSlider from "@/app/_components/Appslider";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { getAllSliderApi } from "../../_api";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { FaFileWord } from "react-icons/fa6";

const UpdatedHeroSection = async () => {
  const getAllSlider = await getAllSliderApi();
  // console.log("getAllSlider", getAllSlider);

  return (
    <>
      <section className="flex flex-col lg:flex-row w-full gap-4 px-4 lg:px-24">
        <div className="w-full lg:w-[68%] container mx-auto  inset-0 flex flex-col lg:flex-row gap-4 lg:justify-between items-center py-5 !rounded-lg">
          <div className="w-full h-auto app-and-news-slider !rounded">
            <AppSlider slider={getAllSlider?.data} />
          </div>
        </div>
        <div className="w-full lg:w-[32%]   border-2 rounded-xl my-5 flex items-center justify-center px-5 py-4 lg:py-2">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-16 font-semibold text-black">
            কৃত্রিম বুদ্ধিমত্তায় বাংলা স্পেল চেকিং
            </h1>
            <p className="text-black text-14 text-justify">
              কৃত্রিম বুদ্ধিমত্তা প্রযুক্তি মোবাইলে বাংলা স্পেল চেকিং ও ভয়েস
              টাইপিংয়ের কাজ করা জন্য বাংলা কিবোর্ড ডাউনলোড করুন। এমএস ওয়ার্ডে
              বাংলা স্পেল চেক করতে প্লাগইন ডাউনলোড করুন।
            </p>
            {/* <ul>
              <li className="flex gap-3 items-center">
                <FaCheckCircle className="w-4 h-4 text-black" />
                <span className=" text-12 lg:text-14">
                  ২০টি পাবলিক ফেসিং সার্ভিস
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <FaCheckCircle className="w-4 h-4 text-black" />
                <span className=" text-12 lg:text-14">
                  ০৮+ স্ট্যান্ডার্ডস ও গাইডলাইন
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <FaCheckCircle className="w-4 h-4 text-black" />
                <span className=" text-12 lg:text-14">১৬+ রিসার্চ টুলস</span>
              </li>
            </ul> */}
            <button className="border border-gray-300 text-white px-9 py-1 rounded-md flex items-center gap-2 text-14 bg-black">
              <span>
                <IoLogoGooglePlaystore className="w-4 h-4" />
              </span>
              Spell Checking Keyboard
            </button>
            <button className="border border-gray-300 text-white px-8 py-1 rounded-md  flex items-center gap-2 text-14 bg-blue-900">
              <span>
                <FaFileWord className="w-4 h-4" />
              </span>
              MS Word Spell Checker
              <span className="text-orange-500">0+</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdatedHeroSection;
