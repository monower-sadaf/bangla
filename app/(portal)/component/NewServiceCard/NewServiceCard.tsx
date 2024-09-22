"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import ServiceOne from "@/public/images/service1.png";
import CounterSection from "../CounterSection/CounterSection";
import { getLazyLoadingServices, getServicesBySearch } from "../../_api";
import { set } from "react-hook-form";
import { FaGlobe } from "react-icons/fa";

const NewServiceCard = () => {
  const [loading, setLoading] = useState(false);
  const [limit, setLimits] = useState(3);
  const [services, getServices] = useState([]);
  const [totalServices, setTotalServices] = useState(0);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    const loadItemsBySearch = async () => {
      setLoading(true);
      try {
        const searchData: any = await getServicesBySearch(searchByName);
        getServices(searchData.data.data);
        // setTotalServices(searchData.total);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    };
    loadItemsBySearch();
  }, [searchByName]);

  useEffect(() => {
    const loadMoreItems = async () => {
      setLoading(true);
      try {
        const loadingData = await getLazyLoadingServices(limit);
        getServices(loadingData.data);
        setTotalServices(loadingData.total);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMoreItems();
  }, [limit]);

  const handleScroll = React.useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading
    ) {
      if (searchByName) return;
      if (limit >= totalServices) return;
      if (!searchByName) {
        setLimits(3);
      }
      setLimits(limit + 3);
    }
  }, [limit, loading, totalServices, searchByName]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, handleScroll]);

  console.log({ services });

  return (
    <>
      <CounterSection setSearchByName={setSearchByName} />
      <section className="w-full ps-12 lg:px-24 pb-9">
        {services?.length > 0 &&
          services?.map((service: any, index: number) => {
            const paidStatus = JSON.parse(service?.paid_status);
            return (
              <div key={index} className="bg-[#CDF4F5] my-5 pb-4 rounded-xl">
                <div className="flex items-center justify-end ">
                  {paidStatus?.free == 1 && (
                    <button className="bg-[#2F93DF] py-2 px-3 text-white  rounded-tr-xl ">
                     Free
                    </button>
                  )}
                  {paidStatus?.pro == 1 && (
                    <button className="bg-[#1AB17A] py-2 px-3 text-white  rounded-tr-xl ">
                      Pro
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-8 px-9 ">
                  <Image
                    src={
                      `${process.env.NEXT_PUBLIC_IMAGE_URL}${service?.logo}` ||
                      ""
                    }
                    className="mt-9"
                    width={140}
                    height={140}
                    alt="service"
                  />
                  <div>
                    <h1 className="text-[28px] font-medium text-black">
                      {service?.name || ""}
                    </h1>

                    <div className="flex  justify-between pt-3 pe-5">
                      <div className="w-[40%]">
                        <p className="text-16 text-red-500">
                          {service?.sub_title || ""}
                        </p>
                        <p className=" text-justify mt-2">
                          {service?.description || ""}
                        </p>
                      </div>

                      <ul className="w-[30%] ">
                        <li>
                          {" "}
                          Type: <span className="font-bold">Application</span>
                        </li>
                        <li className="flex items-center">
                          {" "}
                          Distribution:{" "}
                          <span className="font-bold flex items-center gap-2">
                            Web <FaGlobe className="w-4 h-4" />
                          </span>
                        </li>
                        <li> Production Status:Live v1.3 </li>
                        <li> Release Date: </li>
                        <li> Component: SD 14</li>
                      </ul>
                      <div className="w-[20%] flex flex-col gap-2">
                        <button className="bg-[#1CA5F2] w-full  px-4 py-2 text-white rounded">
                          Visit
                        </button>
                        <button className="bg-[#FD9D9D]  w-full px-4 py-2 text-white rounded">
                          Details Page
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {loading && (
          <div className="flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full animate-spin
          border-4 border-solid border-green-500 border-t-transparent shadow-md"
            ></div>
          </div>
        )}
      </section>
    </>
  );
};

export default NewServiceCard;
