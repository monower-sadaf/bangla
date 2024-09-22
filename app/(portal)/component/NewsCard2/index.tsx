import Image from "next/image";
// import { relative_image_path } from "@/helper";
import { relative_image_path } from "../../../../helper";
import Link from "next/link";

const NewsCard2 = ({id,title,description,image,time}: any) => {
  return (
    <div className="w-full">
      <Link
        href={{
          pathname: `/recent-news/${id}`,
        }}
      >
        <Image
          src={relative_image_path(image)}
          className="w-full h-[10em]  hover:scale-x-110 transition-all duration-300"
          width={1000}
          height={1000}
          alt="Bangla"
        />
      </Link>
      <div className="bg-slate-200 px-6 pb-6 pt-4 group">
        <Link
          href={{
            pathname: `/recent-news/${id}`,
          }}
          className="text-20 font-bold hover:underline hover:text-gray-700"
        >
          {title}
        </Link>
        <div className="py-2 overflow-hidden h-0 group-[&:hover]:h-20  opacity-0 group-[&:hover]:opacity-100 transition-all duration-500">
          <p className="text-gray-600 text-14 line-clamp-3 text-justify">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-14 inline-flex items-center gap-2">
            <span>
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
            </span>
            <span>{time}</span>
          </p>
          <Link
            href={{
              pathname: `/recent-news/${id}`,
            }}
            title="বিস্তারিত পড়ুন"
          >
            <svg
              className="w-4 h-4 fill-gray-500 hover:fill-gray-700 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard2;
