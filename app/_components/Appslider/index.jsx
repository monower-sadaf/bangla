"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { relative_image_path } from "../../../helper/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay, Grid } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const AppSlider = ({ slider }) => {
  return (
    <>
      {slider?.length > 0 ? (
        <Swiper
          className="2xl:container 2xl:mx-auto"
          slidesPerView={1}
          loop={true}
          grid={{
            rows: 1,
          }}
          // spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation, Grid]}
          style={{ borderRadius: "20px" }}
        >
          {slider?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative duration-700 ease-in-out !w-full !h-[300px]"
                style={{ borderRadius: "20px" }}
              >
                <Image
                  className="w-full hover:bg-gray-600 hover:opacity-65 "
                  width={500}
                  height={400}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.img}`}
                  alt="2nd Slider Image"
                  style={{ borderRadius: "20px" }}
                />
                <div className="absolute bottom-[10%] right-6 flex flex-col gap-2 px-3">
                  <Link
                    href={"/"}
                    className="text-16 text-white hover:text-[17px] transition-all"
                  >
                    ইউনিভার্সাল কিবোর্ড
                  </Link>
                  <div className="badge badge-primary !text-white border-none bg-orange-600 hover:text-14 cursor-pointer transition-all !rounded-md !px-4">
                    অ্যাপ্লিকেশন
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full h-[18vh] lg:h-[70vh] bg-gray-400 animate-pulse"></div>
      )}
    </>
  );
};

export default AppSlider;
