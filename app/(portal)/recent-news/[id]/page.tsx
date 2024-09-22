export const revalidate = 10;


import { getSingleNews, getRecentNews } from "../../_api";
import Image from "next/image";
import { relative_image_path } from "@/helper";
import Link from "next/link";


const Home = async ({ params }:any) => {
    const news = await getSingleNews(params.id);
    const recent_news = await getRecentNews();

    return (
      <section className="container mx-auto px-2 lg:px-4 pb-10 pt-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          <Image
            src={relative_image_path(news[0]?.image)}
            className="w-full h-[10] lg:h-[20em] pb-2"
            width={1000}
            height={1000}
            alt="Bangla"
          />
          <p className="text-gray-600 text-12 pb-2">{news[0]?.time}</p>
          <h3 className=" text-20 lg:text-24 font-bold">{news[0]?.title}</h3>
          <p className="text-14 lg:text-16 text-gray-500 text-justify">
            {news[0]?.description}
          </p>
        </div>
        <div>
          <h3 className="text-20 lg:text-24 font-medium">Related News</h3>
          <ul className="text-14 lg:text-16 text-gray-500 list-disc list-inside">
            {recent_news?.map((item:any, index:number) => (
              <li key={index}>
                <Link href={{
                  pathname: `/recent-news/${item?.id}`,
                }} className="hover:underline">
                  {
                    item?.title
                  }
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
};

export default Home;