"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
// import { relative_image_path } from "@/helper";
import { ServiceType } from "@/types/ServiceType";

import { useRef } from "react";
import { getFeaturesByServiceId, getSingleService } from "../../_api";
import Link from "next/link";
import { Review } from "../Review/Review";
import { json } from "stream/consumers";
import { MyContext } from "@/ContextProvider/ContextProvider";

const Details = ({service, features}:any) => {
  const { setFeatureSelectedInfoAll,setFeatureTotalPrice} = useContext<any>(MyContext);
  // const [service, setService] = useState<any>([]);
  // const [features, setFeatures] = useState<any>([]);
  const [selectedPrices, setSelectedPrices] = useState<number[]>([]);
  // const [selectedPlan, setSelectedPlan] = useState({ featureIndex: -1, planIndex: -1 });
  const [activePlans, setActivePlans] = useState<number[]>([]);
  const [selectedFeatureInfo, setSelectedFeatureInfo] = useState<any>([]);
  setFeatureSelectedInfoAll(selectedFeatureInfo);
  

  const handlePlanClick = (featureIndex: number, price: number, planIndex: number, planName: string) => {

    const selectIndexFeatureData = features[featureIndex];
    setActivePlans((prevActivePlans) => {
      const updatedPlans = [...prevActivePlans];
      updatedPlans[featureIndex] = planIndex; // Set the active plan for this feature
      return updatedPlans;
    });
    setSelectedFeatureInfo((prevData:any) => {
      const updatedData = [...prevData];
      updatedData[featureIndex] = {selectIndexFeatureData, price,planName};
      return updatedData;
    })
    // console.log("selectIndexFeatureData : ", selectIndexFeatureData);

    // Update the selected price for the clicked plan
    // setSelectedPlan({ featureIndex, planIndex});
    setSelectedPrices((prevPrices) => {
      
      const updatedPrices = [...prevPrices];
      updatedPrices[featureIndex] = price;
      return updatedPrices;
    });
  };

  const totalPrice = selectedPrices.reduce(
    (sum, price) => sum + (Number(price) || 0),
    0
  );
  setFeatureTotalPrice(totalPrice);
  

  // useEffect(() => {
  //   getSingleService(id)
  //     .then((data) => setService(data))
  //     .catch((err) => console.log(err));
  //   getFeaturesByServiceId(id)
  //     .then((data) => setFeatures(data.data))
  //     .catch((err) => console.log(err));
  // }, [id]);

  const [parent, setParent] = useState(0);
  const [view, setView] = useState(0);
 


 
  

 
  
  
  

  return (
    <section className="min-h-screen py-10 container mx-auto px-2 lg:px-4 flex flex-col items-center">
      <div className="flex gap-4 pb-8">
        <Image
          className="w-48 h-44 rounded-sm"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${service?.img || ""}`}
          height={1000}
          width={1000}
          alt="Bangla"
        />

        <div className="flex flex-col justify-evenly">
          <h3 className="text-48">{service?.name}</h3>
          <p className="max-w-lg">{service?.des}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setParent(0)}
              className={`hover:bg-primary transition-all duration-500 text-white px-4 py-1 rounded-sm ${
                parent == 0 ? "bg-primary" : "bg-primary/50"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setParent(1)}
              className={`hover:bg-primary transition-all duration-500 text-white px-4 py-1 rounded-sm ${
                parent == 1 ? "bg-primary" : "bg-primary/50"
              }`}
            >
              Buy Now
            </button>
            <button
              onClick={() => setParent(2)}
              className={`hover:bg-primary transition-all duration-500 text-white px-4 py-1 rounded-sm ${
                parent == 2 ? "bg-primary" : "bg-primary/50"
              }`}
            >
              Documentation
            </button>
            <button
              onClick={() => setParent(3)}
              className={`hover:bg-primary transition-all duration-500 text-white px-4 py-1 rounded-sm ${
                parent == 3 ? "bg-primary" : "bg-primary/50"
              }`}
            >
              Video Tutorial
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[57.7%]">
        {parent == 0 && (
          <>
            <div className="w-full flex gap-6 pb-5">
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
            <div className="lg:w-full">
              {view == 0 && (
                <div className="w-full">
                  <p className="text-justify text-[#424242] text-18">
                    {service?.des}
                  </p>
                </div>
              )}

              {view == 1 && (
                <div className="w-full">
                  <p className="text-justify text-[#424242] text-18 break-words whitespace-pre-line">
                    {service?.support || "No Support"}
                  </p>
                </div>
              )}
              {/* Review Section tab */}
              {view == 2 && (
                <div className="w-full">
                  <Review serviceId={service?.id} />
                </div>
              )}
            </div>
          </>
        )}
        {parent == 1 && (
          <div className="w-full">
            <table className="w-full">
              <thead className="">
                <tr>
                  <td className="border border-primary pl-2 !test-center">
                   <div className="flex items-center justify-center"> Features</div>
                    </td>
                  <td className="border border-primary pl-2 text-center">
                    Plans<span>({features?.[0]?.unit || ""})</span>
                  </td>
                  <td className="border border-primary pl-2 text-center">
                    Price (tk)
                  </td>
                </tr>
              </thead>
              <tbody>
                {features?.length > 0 &&
                  features?.map((feature: any, featureIndex: number) => {
                    let plans = JSON.parse(feature.plans || "[]");

                    return (
                      <tr key={featureIndex} className="border border-primary">
                        <td className="border border-primary pl-2">
                          {feature.name} ({feature.unit})
                        </td>
                        <td className="border border-primary pl-2">
                          <div className="w-full flex justify-around items-center">
                            {plans.map((plan: any, planIndex: number) => {
                              const isSelected =
                              activePlans[featureIndex] === planIndex;
                              return (
                                <span
                                key={planIndex}
                                  onClick={() =>
                                    handlePlanClick(
                                      featureIndex,
                                      plan?.validaty || 0,
                                      planIndex,
                                      plan?.limit || 0
                                    )
                                  }
                                  // data-val={plan?.validaty}
                                  className={`w-8 h-8 m-1  ${
                                    isSelected ? 'border-2 border-green-800' : 'border border-black'
                                  } rounded-full flex justify-center items-center cursor-pointer`}
                                >
                                  {plan?.limit}
                                </span>
                              );
                            })}
                          </div>
                        </td>
                        <td className="border border-primary pl-2 text-center">
                          {selectedPrices[featureIndex] || 0} tk
                        </td>
                      </tr>
                    );
                  })}

                {/* <tr className="border border-primary">
                  <td className="border border-primary pl-2">
                    User Account (Number)
                  </td>
                  <td className="border border-primary pl-2">
                    <div className="w-full flex justify-around items-center">
                      <span
                        onClick={handleUserAcc}
                        data-val="150"
                        className="w-8 h-8 m-1 border border-black rounded-full flex justify-center items-center"
                      >
                        2
                      </span>
                      <span
                        onClick={handleUserAcc}
                        data-val="1500"
                        className="w-8 h-8 m-1 border border-black rounded-full flex justify-center items-center"
                      >
                        10
                      </span>
                      <span
                        onClick={handleUserAcc}
                        data-val="5000"
                        className="w-10 h-10 m-1 border-2 border-green-600 rounded-full flex justify-center items-center"
                      >
                        Unli
                      </span>
                    </div>
                  </td>
                  <td className="border border-primary pl-2 text-center">
                    {value3}
                  </td>
                </tr> */}
                <tr className="border border-primary">
                  <td className="border border-primary pl-2"></td>
                  <td className="border border-primary pl-2"></td>
                  <td className="border border-primary pl-2 text-center text-primary font-semibold">
                    Total:{totalPrice} tk
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end pt-5">
              {/* <button onClick={handleBuyItem} className="bg-primary text-white px-4 py-1 rounded">
                  Buy
                // </button> */}
              <Link
                href="/checkout"
                className="bg-primary text-white px-4 py-1 rounded"
              >
                Buy
              </Link>
            </div>
          </div>
        )}
        {parent == 2 && (
          <div className="w-full">
            <p className="pb-5">
              {service?.documentation || "No Documentation"}
            </p>
          </div>
        )}
        {parent == 3 && (
          <div className="w-full">
            {service?.tutorial ? (
              <video
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${service?.tutorial}`}
                controls
                className="w-full  rounded-md my-2"
              />
            ) : (
              <p>No Tutorial</p>
            )}

            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Ovqvo17IVSJHGzHW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
          </div>
        )}
      </div>
    </section>
  );
};
export default Details;
