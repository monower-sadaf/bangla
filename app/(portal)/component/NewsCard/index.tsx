import Image from "next/image";
import Link from "next/link";


const NewsCard = () => (
  <div className="bg-white w-[80%] lg:w-[28%] border border-gray-500">
    <Image
      className="w-full h-[10em] lg:h-[15.375em]"
      height={1000}
      width={1000}
      src={"/images/dummy_image1.jpg"}
      alt="Bangla"
    />
    <div className="pb-2 lg:pb-6 pt-2 px-3 lg:px-7 flex flex-col gap-2 lg:gap-4">
      <small className="text-10 lg:text-13 text-[#797676]">
        March 03, 2024
      </small>
      <p className="text-13 lg:text-15 font-bold text-[#EF4036]">
        অ্যাপ্লিকেশন
      </p>
      <Link
        href={{
          pathname: "/recent-news/1",
        }}
        shallow
        className="text-18 lg:text-24 font-bold underline"
      >
        BCC Purno Bangla Font
      </Link>
    </div>
  </div>
);


export default NewsCard;