'use client'

import { useState } from "react";
import Image from "next/image";
import { relative_image_path } from "@/helper";

const Home =  ({ params }) => {
    const [view,setView] = useState(0);
    const handleBuyService = async () => {
       const users = await fetch("http://localhost:8000/api/user/details", {
          cache: "no-store",
       })
       .then((res) => res.json())
       .then((data) => data)
       .then((err) => console.log(err));

       console.log(users)
    }
    
  
    return (
      <section className="min-h-screen py-10 container mx-auto px-2 lg:px-4 flex flex-col items-center">
        <div className="flex gap-4 pb-8">
          <Image
            className="w-48 h-44 rounded-sm"
            src={relative_image_path("voice_service.png")}
            height={1000}
            width={1000}
            alt="Bangla"
          />

          <div className="flex flex-col justify-evenly">
            <h3 className="text-48">সঠিক</h3>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              eligendi qui soluta molestias dolores cupiditate consequatur
            </p>
            <div className="flex gap-4">
              <button onClick={handleBuyService} className="bg-primary/50 hover:bg-primary transition-all duration-500 text-white px-4 py-1 rounded-sm">
                Buy Now
              </button>
              <button className="bg-primary/50 hover:bg-primary transition-all duration-500 text-white px-4 py-1 rounded-sm">
                Documentation
              </button>
              <button className="bg-primary/50 hover:bg-primary transition-all duration-500 text-white px-4 py-1 rounded-sm">
                Video Tutorial
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[57.7%] pb-5">
          <div className="flex gap-6">
            <button
              onClick={() => setView(0)}
              className={`pb-2 text-20 hover:border-b hover:border-red-400 ${
                view == 0 ? "border-b border-red-400" : ""
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setView(1)}
              className={`pb-2 text-20 hover:border-b hover:border-red-400 ${
                view == 1 ? "border-b border-red-400" : ""
              }`}
            >
              Support
            </button>
            <button
              onClick={() => setView(2)}
              className={`pb-2 text-20 hover:border-b hover:border-red-400 ${
                view == 2 ? "border-b border-red-400" : ""
              }`}
            >
              Review
            </button>
          </div>
        </div>
        {view == 0 && (
          <div className="lg:w-[57.7%]">
            <p className="text-justify text-[#424242] text-18">
              ‘সঠিক’ বানান সংশোধক হলো বাংলা ভাষার বা শব্দ, বাক্য কৃত্রিম
              বুদ্ধিমত্তার সাহায্যে সম্পাদনা করার সফটওয়্যার। এই সফটওয়্যার কেবল
              ভুল বানান চিহ্নিত করবে তা নয়, বরং স্বয়ংক্রিয়ভাবে সংশোধনের
              পরামর্শ দেবে। বানান সংশোধক ও পরীক্ষক সফটওয়্যারটি বাংলা একাডেমির
              প্রমিত বানানবিধি ও প্রমিত বানান অভিধানকে অনুসরণ করছে। প্রাথমিকভাবে
              স্পেল চেকার ভার্সনে ০৫  ধরনের ভুল নিয়ে পর্যবেক্ষণ দেবে। তবে
              গ্রামারসহ চূড়ান্ত ভার্সনে নিম্নে উল্লিখিত ১৩ ধরনের ভুল চিহ্নিত
              করবে এবং সংশোধন পরামর্শ দেবে। সফটওয়্যারটি বিভিন্ন ধরনের  ভুল বা
              এরর যেমন, নন-ওয়ার্ড  এরর, রিয়েল ওয়ার্ড এরর চিহ্নিত করতে পারে।
              এছাড়াও প্রায়শ যেসব বানান ভুল হয় সেসব বানানসহ অসতর্কতা বশত লেখা
              ‘টাইপো’  দ্রুত চিহ্নিত করতে পারে। তবে একটি শব্দের বানান শুদ্ধ হলেও
              ওই পরিস্থিতি  শব্দটি ভুল হলে অ্যাপ্লিকেশন একে ভুল হিসেবে  চিহ্নিত
              করবে।  কৃত্রিম বুদ্ধিমত্তা প্রযুক্তির মাধ্যমে তৈরি হওয়ায় এর
              রয়েছে কনটেক্সচুয়াল ইরর চেকিংসহ বেশ কয়েকটি আকর্ষণীয় ফিচার, যা
              একাডেমি, প্রকাশনা ও মুদ্রণজগতসহ অনলাইনে শুদ্ধ বানানে লেখার
              অভিজ্ঞতা বদলে দেবে।   সঠিক সফটওয়্যারটি লেখালেখির সঙ্গে সম্পর্কিত
              কম্পিউটার জগতের গুরুত্বপূর্ণ সকল মাধ্যমে ব্যবহার করা যাবে। এর
              রয়েছে মাইক্রোসফট ওয়ার্ড অ্যাড-ইন  ফলে কম্পোজের সময় বানান
              পরীক্ষা ও সংশোধন করা যাবে। রয়েছে ক্রোম, ফায়ারফক্স, সাফারি ও এইজ
              ব্রাউজারের জন্য এক্সটেনশন। এছাড়াও প্রচলিত মোবাইলে কিবোর্ড
              অ্যাপগুলোতে  সংযুক্ত করার সুযোগ রয়েছে। সঠিক সফটওয়্যারটি অন্য
              ডেভেলপাররা যাতে ব্যবহার করতে পারে সেজন্য রয়েছে এপিআই। এছাড়াও সকল
              ফিচারসহ সঠিকের একটি উইন্ডোজ স্ট্যান্ড-অ্যালোন ভার্সন রয়েছে।  
              সঠিক সফটওয়্যারটি ইউনিকোড ভিত্তিক হলেও এটি আসকি/আনসিতেও কাজ করবে।
              এর রয়েছে  অ্যাড টু ডিকশনারি বা অভিধানে যুক্ত করুন ফিচার। যদি কোনো
              শব্দ ভুল চিহ্নিত করে কিন্তু প্রকৃত অর্থে শব্দটি সঠিক তাহলে অ্যাড
              টু ডিকশনারি বাটন চাপতে হবে। ফলে মূল সার্ভারে আলাদা করে এই শব্দগুলো
              সংরক্ষণ করা হবে। পরবর্তী সংস্করণে  তা যুক্ত করা হবে। ইনলাইন এডিটিং
              ও সাইডবার এডিটিং ভিন্ন রকম ইউজার এক্সপেরিয়েন্স পাওয়া যাবে।
              বর্তমানে পরীক্ষামূলক সংস্করণ প্রকাশ করা হয়েছে। এর এখনো বেশ কিছু
              সীমাবদ্ধতা রয়েছে। এর ডিটেকশন ক্ষমতা সন্তোষজনক হলেও কখনো কখনো
              যথাযথ সাজেশন দিতে পারে না। রিয়েল ওয়ার্ড ইররের ক্ষেত্রে এমন দেখা
              যায়। আশা করা যাচ্ছে, ব্যবহাকারীদের মতামত নিয়ে একে আরও উন্নত ও
              নির্ভুল করে পূর্ণাঙ্গ ভার্সন প্রকাশ করা হবে। গ্রামার চেকার ভার্সনে
              সাজেশন ক্ষমতা বেড়ে যাবে। ওয়েব অ্যাপ্লিকেশন ছাড়াও
              অ্যাপ্লিকেশনটির একটি এমএস ওয়ার্ড প্লাগ ইন তৈরি  করা হয়েছে।
              প্লাগইনসহ সকল রিলিজকৃত রিসোর্স, লিংক ও ডকুমেন্টশেন পেতে নিচের
              কিউআর কোড স্ক্যান করুন। সফটওয়্যারটি ব্যবহার করার পর  ফিডব্যাক
              দেওয়ার ঠিকানা:
            </p>
          </div>
        )}

        {view == 1 && (
          <div className="lg:w-[57.7%]">
            <p className="text-justify text-[#424242] text-18">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              aliquid magnam quaerat dolorum officia! Saepe nostrum fugiat
              repudiandae nisi officiis, quas nam odit ullam asperiores labore,
              itaque illo ipsam animi?
            </p>
          </div>
        )}

        {view == 2 && (
          <div className="lg:w-[57.7%]">
            <p className="text-justify text-[#424242] text-18">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              aliquid magnam quaerat dolorum officia! Saepe nostrum fugiat
              repudiandae nisi officiis, quas nam odit ullam asperiores labore,
              itaque illo ipsam animi?
            </p>
          </div>
        )}
      </section>
    );
};

export default Home;