"use client";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CounterServiceAPi } from "../../_api/counterService/CounterService";

export type TCounter = {
  status: boolean;
  message: string;
  applications: number;
  apps: number;
  datasets: number;
  tools: number;
  papers: number;
  plugins?: number;
};

const CounterSection = ({ setSearchByName }: any) => {
  const [counter, setCounter] = useState<TCounter>();
  const [inputShow, setInputShow] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      const data = await CounterServiceAPi();
      setCounter(data);
    };
    loadData();
  }, []);

  // console.log({counter});

  return (
    <>
      <section
        className={`px-4 lg:px-24 pt-4 ${inputShow ? "pb-2" : "pb-10"}`}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-wrap bg-[#FFF276] px-5 py-3 w-full lg:w-[80%] rounded-l-xl rounded-tl-xl">
            <div className="w-[50%] lg:w-[16.5%]  flex flex-col items-center justify-center">
              <h1 className="text-24 font-semibold text-center ">
                {counter?.applications}
              </h1>
              <span className="text-16 font-medium text-center">
                Application
              </span>
            </div>
            <div className="w-[50%] lg:w-[16.5%]   border-l-2 border-gray-500 px-3 flex flex-col items-center justify-center">
              <h1 className="text-24 font-semibold text-center ">
                {counter?.plugins || 0}
              </h1>
              <span className="text-16 font-medium text-center">Plugins</span>
            </div>
            <div className="w-[50%] lg:w-[16.5%]  border-l-2 border-gray-500 px-3 flex flex-col items-center justify-center">
              <h1 className="text-[24px] font-semibold text-center">
                {counter?.apps}
              </h1>
              <span className="text-[16px] font-medium text-center">
                Mobile Apps
              </span>
            </div>

            <div className="w-[50%] lg:w-[16.5%]   border-l-2 border-gray-500 px-3 flex flex-col items-center justify-center">
              <h1 className="text-24 font-semibold text-center ">
                {counter?.datasets}
              </h1>
              <span className="text-16 font-medium text-center">Datasets</span>
            </div>
            <div className="w-[50%] lg:w-[16.5%]  border-l-2 border-gray-500 px-3 flex flex-col items-center justify-center">
              <h1 className="text-24 font-semibold text-center ">
                {counter?.tools}
              </h1>
              <span className="text-16 font-medium text-center">Tools</span>
            </div>
            <div className="w-[50%] lg:w-[16.5%]   border-l-2 border-gray-500 px-3 flex flex-col items-center justify-center">
              <h1 className="text-24 font-semibold text-center ">
                {counter?.papers}
              </h1>
              <span className="text-16 font-medium text-center">Papers</span>
            </div>
          </div>
          <div className="w-full lg:w-[20%] bg-[#CA5B5B] py-2 flex items-center justify-center mt-2 lg:mt-0 rounded-r-xl rounded-tr-xl">
            <CiSearch
              onClick={() => setInputShow(!inputShow)}
              className="w-12 h-12 hover:w-14 hover:h-14 transition-all text-white cursor-pointer"
            />
          </div>
        </div>
        {inputShow && (
          <div className="flex justify-end mt-3">
            <input
              onChange={(e) => setSearchByName(e.target.value)}
              type="text"
              className="w-[70%] lg:w-[40%] border-2 border-black rounded py-2 px-3 "
              placeholder="Search here....."
            />
          </div>
        )}
      </section>
    </>
  );
};

export default CounterSection;
