export const revalidate = 10;


import Image from "next/image";
import { relative_image_path } from "@/helper";

const Home = async () => {
  return (
    <section className="min-h-screen container mx-auto px-2 lg:px-4 gap-4 py-5 lg:py-10">
      <div className="flex flex-col items-center gap-4 pb-10">
        <p className="text-16 lg:text-20 font-semibold max-w-screen-lg text-justify">
          নএলপিতে দক্ষ জনশক্তির ব্যাপক চাহিদা রয়েছে। সেই কারণে, বিশ্বব্যাপী
          বিপুল সংখ্যক শিক্ষার্থীর জন্য NLP প্রধান আকর্ষণ। সেই আগ্রহকে কেন্দ্র
          করেই আয়োজন করা হয়েছে এনএলপি হ্যাকাথন। সারা বাংলাদেশের বিভিন্ন
          বিশ্ববিদ্যালয়ের শিক্ষার্থীরা এই হ্যাকাথনে অংশ নিচ্ছে।
        </p>
        <div>
          <Image
            src={relative_image_path("gallery1.png")}
            className="w-3xl"
            width={1000}
            height={1000}
            alt="Bangla"
          />
          <p>03 মার্চ, 2024</p>
        </div>
        <p className="text-16 lg:text-20 font-semibold text-justify">
          সারা বাংলাদেশের বিভিন্ন বিশ্ববিদ্যালয়ের শিক্ষার্থীরা এই হ্যাকাথনে অংশ
          নিচ্ছে।
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 [&>img]:h-[12em] [&>img]:lg:h-[18.4375em]">
        <Image
          src={relative_image_path("gallery2.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
        <Image
          src={relative_image_path("gallery3.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
        <Image
          src={relative_image_path("gallery4.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
        <Image
          src={relative_image_path("gallery5.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
        <Image
          src={relative_image_path("gallery6.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
        <Image
          src={relative_image_path("gallery7.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
        <Image
          src={relative_image_path("gallery8.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
        <Image
          src={relative_image_path("gallery9.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
        <Image
          src={relative_image_path("gallery10.png")}
          width={1000}
          height={1000}
          alt="Bangla"
        />
      </div>
    </section>
  );
};

export default Home;
