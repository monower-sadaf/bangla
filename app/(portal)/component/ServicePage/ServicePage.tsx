// "use client";
import { getServices } from "@/app/(portal)/_api";
import React, { use, useEffect, useState } from "react";
import Card1 from "../../../_components/Service/Card1";

export const ServicePage = async() => {
  // const [services, setServices] = useState<any>([]);
  const services = await getServices();
  
  // useEffect(() => {
  //   getServices()
  //     .then((data) => setServices(data))
  //     .catch((err) => console.log(err));
  // }, []);

  console.log("frontend : ", services);

  return (
    <div>
      <section className="min-h-screen container mx-auto px-2 lg:px-4 flex flex-wrap justify-center gap-4 py-10">
        {services?.map((item: any, index: number) => (
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
    </div>
  );
};
