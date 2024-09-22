import Card1 from "@/app/_components/Service/Card1";
import Link from "next/link";
import { getServices } from "../../_api";
const Servicesection = async () => {
  const services = await getServices();

  
  return (
    <>
      <section className="container mx-auto px-2 flex flex-wrap justify-center  gap-2 pb-5">
        {services?.length > 0 &&
          services?.slice(0,8)?.map((item: any, index: number) => (
            <Card1
              key={index}
              id={item?.id}
              title={item?.name}
              image={item?.img}
              description={item?.des}
              // bgFrom={item?.bgFrom}
              // bgTo={item?.bgTo}
            />
          ))}
      </section>
      <div className="flex justify-center items-center pb-10">
        <Link href={{
          pathname: "/services", 
        }} shallow className="bg-primary text-white px-5 py-2 rounded-sm">
          আরো সেবা
        </Link>
      </div>
    </>
  );
};
export default Servicesection;