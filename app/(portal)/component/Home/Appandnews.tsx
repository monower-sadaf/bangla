import Image from "next/image";
import AppSlider from "@/app/_components/Appslider/index.jsx";
import Link from "next/link";
import NewsCard2 from "../NewsCard2";
import Card1 from "@/app/_components/Service/Card1";
import { getRecentNews, getServices } from "../../_api";
const Appandnews = async () => {
  const services = await getServices().catch((err) => console.log(err));
  const news = await getRecentNews().catch((err) => console.log(err));
  return (
    <>
      {/* <section className="relative">
        <Image
          className="w-full min-h-[130vh] lg:min-h-screen"
          loading="lazy"
          src={"/images/home_bg.jpeg"}
          height={1000}
          width={1000}
          alt="Bangla"
        />
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto absolute inset-0 flex flex-col lg:flex-row gap-4 lg:justify-between items-center py-10 px-2 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {services?.slice(0, 4)?.map((item: any, index: number) => (
              <Card1
                key={index}
                id={item?.id}
                title={item?.title}
                image={item?.image}
                description={item?.description}
                bgFrom={item?.bgFrom}
                bgTo={item?.bgTo}
              />
            ))}
          </div>
          <div className="w-[90%] lg:w-[50%] h-[30vh] lg:h-auto app-and-news-slider">
            <AppSlider />
          </div>
        </div>
      </section> */}
      {/* <section className="relative">
        <Image
          className="w-full min-h-[185vh] lg:min-h-screen"
          loading="lazy"
          src={"/images/home_bg.jpeg"}
          height={1000}
          width={1000}
          alt="Bangla"
        />
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-2 lg:px-0 absolute inset-0  py-10 pt-20">
          <h3 className="text-20 lg:text-26 font-semibold text-center pb-8">
            RECENT NEWS
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 lg:min-h-[52vh]">
            {news?.slice(0, 4)?.map((item: any, index: number) => (
              <div
                key={index}
                className="w-[18em] rounded-t-2xl overflow-hidden"
              >
                <NewsCard2
                  id={item?.id}
                  title={item?.title}
                  description={item?.description}
                  image={item?.image}
                  time={item?.time}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center pt-10 lg:pt-0">
            <Link
              href={{
                pathname: "/recent-news",
              }}
              shallow
              className="bg-primary text-white px-5 py-2 rounded-sm"
            >
              আরো দেখুন
            </Link>
          </div>
        </div>
      </section> */}
      <Image
        className="w-full"
        loading="lazy"
        width={1000}
        height={1000}
        src={"/images/home_footer.png"}
        alt="Bangla"
      />
    </>
  );
};

export default Appandnews;
