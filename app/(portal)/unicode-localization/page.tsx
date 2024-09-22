import Image from "next/image";
import { relative_image_path } from "@/helper";

const Home = async () => {
    return (
      <section className="min-h-screen container mx-auto px-2 lg:px-4 gap-4 py-5 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-8">
          <div>
            <Image
              src={relative_image_path("unicode1.png")}
              className="lg:h-[33.125em]"
              width={1000}
              height={1000}
              alt="Bangla"
            />
            <p className="text-14 lg:text-16 text-gray-500">
              Meeting with Unicode Secretary at ICANN64, Kobe
            </p>
          </div>
          <div>
            <Image
              src={relative_image_path("unicode2.png")}
              className="lg:h-[33.125em]"
              width={1000}
              height={1000}
              alt="Bangla"
            />
            <p className="text-14 lg:text-16 text-gray-500">
              Bangla Langauge Panel
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Image
            src={relative_image_path("unicode3.png")}
            className="order-2 lg:order-1"
            width={1000}
            height={1000}
            alt="Bangla"
          />
          <div className="lg:col-span-3 order-1 lg:order-2">
            <h3 className="text-24 font-mono font-bold pb-3 lg:pb-5">
              ইউনিকোড ও সিএলডিআর
            </h3>
            <p className="text-14 lg:text-16 font-mono text-gray-500 pb-5 text-justify">
              ইউনিকোড হলো লিপিসমূহের কম্পিউটারে ব্যবহার করার জন্য
              আন্তর্জাতিকভাবে স্বীকৃত একটি সর্বগ্রাহ্য মান। এই মান্ নির্ধারণ করে
              ইউনিকোড কনসোর্টিয়াম, যা তথ্যপ্রযুক্তি বিষয়ক কোম্পানিগুলো
              নিয়ন্ত্রণ করে । এ কম্পোনেন্টের মাধ্যমে বাংলাদেশের পক্ষে বাংলা
              ভাষা ও অন্যান্য ভাষার মান নিধারণে সকল প্রকার সমর্থন প্রদান করা
              হবে। বাংলা ছাড়াও বাংলাদেশের অন্যান্য ভাষার ইউনিকোড মানের সম্ভাব্য
              যাচাই, প্রণয়ন ও প্রকাশ করা হবে এই কম্পোনেন্টের মাধ্যমে। সিএলডিআরর
              হলো একটি দেশের সাংস্কৃতিক ও ভাষিক তথ্য বিষয়ক ভাণ্ডার, এই ভান্ডার
              মূলত কোম্পানিসমূহ তাদের সফটওয়্যারের আন্তর্জাতিকায়নে ও
              স্থানীয়করণে ব্যবহার করে থাকে। বাংলা ভাষার ক্ষেত্রেও এই
              কম্পোনেন্টের মাধ্যমে সিএলডিআর উন্নয়ন করা হবে। একই সঙ্গে এর
              মাধ্যমে ইউনিকোড ও সিএলডিআর প্রমিতকরণ, জমাকরণ ও রক্ষণাবেক্ষণের জন্য
              প্রয়োজনীয় ব্যবস্থা গ্রহণ করছে।
            </p>
          </div>
        </div>
      </section>
    );
};


export default Home;