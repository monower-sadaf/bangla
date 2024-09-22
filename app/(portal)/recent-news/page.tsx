export const revalidate = 10;

import NewsCard2 from "../component/NewsCard2";


import { getRecentNews } from "../_api";


const Home = async () => {
  const news = await getRecentNews();
    return (
      <section className="min-h-screen container mx-auto px-2 lg:px-4 py-10">
        <h3 className="text-24 lg:text-32 font-mono font-bold text-[#151D48] text-center pb-5">
          সাম্প্রতিক খবর সমূহ
        </h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {news?.map((item:any, index:number) => (
            <div key={index} className="w-[18em] rounded-t-2xl overflow-hidden">
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
      </section>
    );
};


export default Home;