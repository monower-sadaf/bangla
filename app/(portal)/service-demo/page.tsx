"use client";
import { FaRegEdit } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import { useRef, useState } from "react";

const demoPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isArrow, setIsArrow] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSelectedNav, setIsSelectedNav] = useState<string>("text");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imageInputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isCount, setIsCount] = useState(0);

  console.log("count:", isCount);
  const handleCount = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="pb-16">
        <div className="w-full    py-10 px-4 lg:px-20  2xl:px-32">
          <div className="flex items-center gap-5 pb-3">
            <span
              onClick={() => setIsSelectedNav("text")}
              className={`border border-gray-500 text-12 lg:text-15 rounded-lg py-1 px-2 flex items-center gap-2 cursor-pointer ${
                isSelectedNav === "text" ? "bg-green-100" : ""
              }`}
            >
              <FaRegEdit className="text-gray-500 w-4 h-4 lg:w-6 lg:h-6" />
              টেক্সট
            </span>
            <span
              onClick={() => setIsSelectedNav("document")}
              className={`border  border-gray-500 text-12 lg:text-15 rounded-lg py-1 px-2 flex items-center gap-2 cursor-pointer ${
                isSelectedNav === "document" ? "bg-green-100" : ""
              }`}
            >
              <HiDocument className="text-gray-500 w-4 h-4 lg:w-6 lg:h-6" />
              ডকুমেন্ট
            </span>
            <span className="border border-gray-500 rounded-lg py-1 px-2">
              Text
            </span>
          </div>
          <div className="w-full   border border-gray-400 shadow  pt-2">
            <div className="pb-1 px-4 relative w-full">
              <div className="flex items-center justify-between">
                <div className="hidden lg:flex items-center md:gap-7 lg:gap-20 xl:gap-44">
                  {isArrow ? (
                    <>
                      {" "}
                      <select
                        name=""
                        id=""
                        className="w-40  border border-gray-400 rounded focus:outline-none px-4 py-1 text-12 lg:text-15"
                      >
                        <option value=""> ইউটিএফ-৮ </option>
                      </select>
                      <h2 className="text-12 lg:text-15">ইউনিকোড </h2>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <select
                        name=""
                        id=""
                        className="w-40  border border-gray-400 rounded focus:outline-none px-4 py-1"
                      >
                        <option value="">সুতন্নীএমজে</option>
                        <option value="">বৈশাখী</option>
                        <option value="">লেখনী</option>
                      </select>
                      <h2>প্রচলিত বাংলা</h2>
                    </>
                  )}
                </div>
                <div className="hidden lg:flex items-center md:gap-7 lg:gap-20 xl:gap-44">
                  {isArrow ? (
                    <>
                      <h2 className="text-15">প্রচলিত বাংলা</h2>
                      <select
                        name=""
                        id=""
                        className="w-40  border border-gray-400 rounded focus:outline-none px-4 py-1"
                      >
                        <option value="">সুতন্নীএমজে</option>
                        <option value="">বৈশাখী</option>
                        <option value="">লেখনী</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <h2 className="text-15">ইউনিকোড </h2>
                      <select
                        name=""
                        id=""
                        className="w-40  border border-gray-400 rounded focus:outline-none px-4 py-1"
                      >
                        <option value=""> ইউটিএফ-৮ </option>
                      </select>
                    </>
                  )}
                </div>
              </div>

              <span className="absolute top-0 right-[49%]">
                <FaArrowRightArrowLeft
                  onClick={() => setIsArrow(!isArrow)}
                  className="text-gray-400 w-6 h-6 cursor-pointer"
                />
              </span>
            </div>

            <div className="flex flex-col lg:flex-row h-[270px]">
              <div className="w-full lg:w-[50%] h-full">
                {isSelectedNav === "text" && (
                  <textarea
                    name="textInfo"
                    id=""
                    // onChange={() => handleCount(e.currentTarget)}
                    className="w-full h-full border border-gray-400 focus:outline-none pb-5 pt-2 px-2 resize-none select-none"
                    placeholder={`${
                      isArrow
                        ? "ইউনিকোডে লেখা এখানে পেস্ট করুন"
                        : "প্রচলিত বাংলা লেখা এখানে পেস্ট করুন"
                    }`}
                  ></textarea>
                )}
                {isSelectedNav === "document" && (
                  <div className="flex flex-col justify-center items-center gap-2  h-full border border-gray-400">
                    <input
                      hidden={true}
                      type="file"
                      className="border border-gray-400 px-2 py-1 rounded"
                      ref={imageInputRef}
                    />
                    <h3 className="text-14">
                      ফাইল আপলোড (Docx, xlsx এবং text)
                    </h3>
                    <button
                      onClick={() => imageInputRef?.current?.click()}
                      className="bg-primary text-white px-2 py-1  rounded flex items-center gap-2"
                    >
                      Upload <FaUpload className="text-white w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
              <div className="w-full lg:w-[50%] h-full">
                {isSelectedNav === "text" && (
                  <textarea
                    name=""
                    id=""
                    className="w-full h-full border border-gray-400 focus:outline-none pb-5 pt-2 px-2 resize-none select-none"
                  ></textarea>
                )}
                {isSelectedNav === "document" && (
                  <div className="flex flex-col justify-center items-center gap-2  h-full border border-gray-400">
                    <input
                      hidden={true}
                      type="file"
                      className="border border-gray-400 px-2 py-1 rounded"
                    />
                    <button className="bg-green-500 px-2 py-1 text-white rounded">
                      Upload
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="pt-8 pb-9">
          <button className="bg-primary text-white text-12 lg:text-15 px-4 py-2 rounded flex items-center gap-3 pb-2">
              <span>
                <IoMdDownload className="w-7 h-7 text-white" />
              </span>
               ডাউনলোড ডকুমেন্টস
            </button>
            <div className="flex flex-col lg:flex-row justify-between gap-2 pt-4">
              <div className="w-full lg:w-[48%]">
                <div className="w-full">
                  <div className="bg-gray-200 border flex items-center px-2 py-4 rounded-sm">
                    <h1 className="w-[20%] text-12 lg:text-15">Platform</h1>
                    <div className="flex items-center justify-between w-[80%]">
                      <h1 className="text-12 lg:text-15">
                        Android Studio Package
                      </h1>
                      <h1 className="text-12 lg:text-15">Size</h1>
                    </div>
                  </div>
                  <div className=" flex items-center px-2 py-4 rounded-sm  border-b border-gray-300">
                    <div className="w-[20%]">
                      <h1 className="text-12 lg:text-15">Windows</h1>
                      <span className="text-12 lg:text-15">(64 bit)</span>
                    </div>
                    <div className="flex items-center justify-between w-[80%]">
                      <div>
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.unity3d.player.UnityPlayerActivity"
                          className="text-blue-500 text-12 lg:text-15"
                        >
                          andorid-studio-2024.1.1.13.windows.exe.file
                        </Link>
                        <h1 className="text-red-500 text-12 lg:text-15">
                          Recomended
                        </h1>
                      </div>
                      <h1 className="text-12 lg:text-15">1.2 MB</h1>
                    </div>
                  </div>
                  <div className=" flex items-center px-2 py-4 rounded-sm  border-b border-gray-300">
                    <div className="w-[20%]">
                      <h1 className="text-12 lg:text-15">Windows</h1>
                      <span className="text-12 lg:text-15">(64 bit)</span>
                    </div>
                    <div className="flex items-center justify-between w-[80%]">
                      <div>
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.unity3d.player.UnityPlayerActivity"
                          className="text-blue-500 text-12 lg:text-15"
                        >
                          andorid-studio-2024.1.1.13.windows.exe.file
                        </Link>
                        <h1 className="text-red-500 text-12 lg:text-15">
                          Recomended
                        </h1>
                      </div>
                      <h1 className="text-12 lg:text-15">1.2 MB</h1>
                    </div>
                  </div>
                  <div className=" flex items-center px-2 py-4 rounded-sm  border-b border-gray-300">
                    <div className="w-[20%]">
                      <h1 className="text-12 lg:text-15">Windows</h1>
                      <span className="text-12 lg:text-15">(64 bit)</span>
                    </div>
                    <div className="flex items-center justify-between w-[80%]">
                      <div>
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.unity3d.player.UnityPlayerActivity"
                          className="text-blue-500 text-12 lg:text-15"
                        >
                          andorid-studio-2024.1.1.13.windows.exe.file
                        </Link>
                        <h1 className="text-red-500 text-12 lg:text-15">
                          Recomended
                        </h1>
                      </div>
                      <h1 className="text-12 lg:text-15">1.2 MB</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[48%]">
                <div className="w-full">
                  <div className="bg-gray-200 border flex items-center px-2 py-4 rounded-sm">
                    <h1 className="w-[20%] text-12 lg:text-15">Platform</h1>
                    <div className="flex items-center justify-between w-[80%]">
                      <h1 className="text-12 lg:text-15">
                        Android Studio Package
                      </h1>
                      <h1 className="text-12 lg:text-15">Size</h1>
                    </div>
                  </div>
                  <div className=" flex items-center px-2 py-4 rounded-sm  border-b border-gray-300">
                    <div className="w-[20%]">
                      <h1 className="text-12 lg:text-15">Windows</h1>
                      <span className="text-12 lg:text-15">(64 bit)</span>
                    </div>
                    <div className="flex items-center justify-between w-[80%]">
                      <div>
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.unity3d.player.UnityPlayerActivity"
                          className="text-blue-500 text-12 lg:text-15"
                        >
                          andorid-studio-2024.1.1.13.windows.exe.file
                        </Link>
                        <h1 className="text-red-500 text-12 lg:text-15">
                          Recomended
                        </h1>
                      </div>
                      <h1 className="text-12 lg:text-15">1.2 MB</h1>
                    </div>
                  </div>
                  <div className=" flex items-center px-2 py-4 rounded-sm  border-b border-gray-300">
                    <div className="w-[20%]">
                      <h1 className="text-12 lg:text-15">Windows</h1>
                      <span className="text-12 lg:text-15">(64 bit)</span>
                    </div>
                    <div className="flex items-center justify-between w-[80%]">
                      <div>
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.unity3d.player.UnityPlayerActivity"
                          className="text-blue-500 text-12 lg:text-15"
                        >
                          andorid-studio-2024.1.1.13.windows.exe.file
                        </Link>
                        <h1 className="text-red-500 text-12 lg:text-15">
                          Recomended
                        </h1>
                      </div>
                      <h1 className="text-12 lg:text-15">1.2 MB</h1>
                    </div>
                  </div>
                  <div className=" flex items-center px-2 py-4 rounded-sm  border-b border-gray-300">
                    <div className="w-[20%]">
                      <h1 className="text-12 lg:text-15">Windows</h1>
                      <span className="text-12 lg:text-15">(64 bit)</span>
                    </div>
                    <div className="flex items-center justify-between w-[80%]">
                      <div>
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.unity3d.player.UnityPlayerActivity"
                          className="text-blue-500 text-12 lg:text-15"
                        >
                          andorid-studio-2024.1.1.13.windows.exe.file
                        </Link>
                        <h1 className="text-red-500 text-12 lg:text-15">
                          Recomended
                        </h1>
                      </div>
                      <h1 className="text-12 lg:text-15">1.2 MB</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="bg-primary text-white text-12 lg:text-15 px-4 py-2 rounded flex items-center gap-3">
              <span>
                <FaBook className="w-7 h-7 text-white" />
              </span>
              ব্যবহার-নির্দেশিকা
            </button>
            <div className="flex flex-col lg:flex-row justify-between gap-2 pt-8 pb-9">
              <div className="w-full lg:w-[48%]">
                <p className="text-12 lg:text-15 text-justify">
                  বর্ণ’ ওসিআর সফটওয়্যারটির সাহায্যে পিডিএফ বা ছবিতে থাকা
                  অপরিবর্তনযোগ্য বাংলা লেখাকে এডিটেবল টেক্সটে রূপান্তর করা যায়।
                  ওসিআর হলো ছবি হিসেবে থাকা কোনো ডকুমেন্টের লেখাকে সার্চেবল ও
                  এডিটেবল লেখায় রূপান্তর করা। বর্ণ ওসিআর এর সাহায্যে পিডিএফ,
                  জেপিজি, পিএনজি, ফাইলে ছবি আকারে থাকা বাংলা লেখাকে কম্পোজকৃত
                  লেখার অনুরূপ এডিটেবল টেক্সটে রূপান্তর করা যায়। ‘সঠিক’ নামের এই
                  বানান পরীক্ষক ও সংশোধক সফটওয়্যারটির ডেল্টা ভার্সন প্রকাশিত
                  হয়েছে। এটি বাংলা শব্দ, বাক্য কৃত্রিম বুদ্ধিমত্তার সাহায্যে
                  সম্পাদনা করার সফটওয়্যার। এ কেবল ভুল বানান চিহ্নিত করবে তা
                  নয়, বরং স্বয়ংক্রিয়ভাবে সংশোধনের পরামর্শ দেবে।
                </p>
              </div>
              <div className="w-full lg:w-[48%]">
                <p className="text-12 lg:text-15 text-justify">
                  জনমত অ্যাপ্লিকেশনটি বাংলা টেক্সটের সেন্টিমেন্ট অ্যানালাইসিস
                  করতে পারে, যাতে ইনপুট হিসেবে কোনো বাক্য, অনুচ্ছেদ, ডকুমেন্ট
                  দিলে তার বক্তব্য ইতিবাচক, নেতিবাচক না নিরপেক্ষ- তা জানা যাবে।
                  এর মাধ্যমে বিভিন্ন টেক্সট, ওয়েবসাইটের মন্তব্য ও ফিডব্যাক
                  বিশ্লেষণ, বাজার-জরিপ, জনমত জরিপ করা, নির্বাচন উত্তর জনমত যাচাই
                  দ্রুত করা যাবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default demoPage;
