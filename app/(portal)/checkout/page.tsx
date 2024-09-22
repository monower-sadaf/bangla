"use client";

import { MyContext } from "@/ContextProvider/ContextProvider";
import { useContext, useState } from "react";
import {
  billingAddressPostApi,
  orderServiceApi,
  paymentPostApi,
} from "../_api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const CheckOutPage = () => {
  const context = useContext(MyContext);
  const featureSelectedInfoAll = context?.featureSelectedInfoAll;
  const featureTotalPrice = context?.featureTotalPrice;
  
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  console.log({ featureSelectedInfoAll });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const divisions = [
    {
      id: 1,
      name: "Dhaka",
    },
    {
      id: 2,
      name: "Chattogram",
    },
    {
      id: 3,
      name: "Khulna",
    },
    {
      id: 4,
      name: "Barishal",
    },
    {
      id: 5,
      name: "Rajshahi",
    },
    {
      id: 6,
      name: "Sylhet",
    },
    {
      id: 7,
      name: "Rangpur",
    },
    {
      id: 8,
      name: "Mymensingh",
    },
  ];
  // console.log("service_id: ",featureSelectedInfoAll[0]?.selectIndexFeatureData?.service_id);
  

  const handleOrderNow = async (data: any) => {
    setIsLoading(true);
    // console.log(data);
    const { name, email, phone, address, division, zila, thana, companyUrl } =
      data;

    let plans = [];
   
    if (featureSelectedInfoAll.length > 0) {
      plans = featureSelectedInfoAll.map((item: any) => ({
        id: item?.selectIndexFeatureData?.id,
        name: item?.selectIndexFeatureData?.name,
        data: item?.planName,
        price: item?.price,
        unit: item?.selectIndexFeatureData?.unit,
      }));
    }
    const orderInfo = {
      user_id: 12,
      service_id: featureSelectedInfoAll[0]?.selectIndexFeatureData?.service_id,
      plans,
      total: featureTotalPrice,
      offer: "",
      discount: 0,
      status: 1,
    };
    console.log({ orderInfo });

    // First API call
    const res = await orderServiceApi(orderInfo);
    console.log("Order API Response:", res);

    if (res?.data?.id) {
      console.log("Order ID:", res?.data?.id);

      // Second API call if the first one succeeds
      const billingAddress = {
        user_id: 12,
        order_id: res?.data?.id,
        name,
        email,
        phone,
        address,
        division,
        zilla: zila,
        thana,
        company_url: companyUrl,
      };
      const resBilling = await billingAddressPostApi(billingAddress);
      console.log("Billing API Response:", resBilling);

      if (resBilling?.status === true) {
        // toast.success("Order Successful");
        reset();
        // router.push("/services");
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/ekpay/get-token`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          //console.log("Get Token API Response:", data);
          if (data) {
            let paymentInfo = {
              user_id: 12,
              order_id: resBilling?.data?.id,
              payment_type: "mobile_banking",
              amount: featureTotalPrice,
              account_number: 344345678,
              acount_holder_name: "John Doe",
              bank_name: "dbbl",
              transaction_id: data?.trans_id,
              transaction_date: new Date(),
              payment_status: "success",
              status: 1,
            };

            const paymentResponse = await paymentPostApi(paymentInfo);
            console.log("paymentResponse:", paymentResponse);
            if (data && paymentResponse?.status === true) {
              setIsLoading(false);
              reset();
              let url =
                "https://sandbox.ekpay.gov.bd/ekpaypg/v1?sToken=" +
                JSON.parse(data.response).secure_token +
                "&trnsID=" +
                data.trans_id;

              location.href = url;
            } else {
              setIsLoading(false);
              toast.error("Order Failed");
              console.log(
                "Unsuccessful Response HTTP response status code-200"
              );
            }
          }
        } catch (error) {
          setIsLoading(false);
          console.log(`The error is: ${error}`);
        }
      } else {
        setIsLoading(false);
        toast.error("Order Failed");
        reset();
      }
    } else {
      setIsLoading(false);
      toast.error("Order Failed");
      reset();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleOrderNow)}
        className="px-4 lg:px-28 w-full  lg:flex gap-4 py-20"
      >
        {isLoading && "Loading....."}
        <div className="lg:w-[60%]">
          <h1 className="text-[20px] font-semibold pb-3">More Information</h1>
          <div className="w-full  border border-gray-200 p-6 flex flex-col gap-3 justify-between">
            <div>
              <fieldset className="w-full flex flex-col border rounded-md px-2">
                <legend>
                  <label
                    htmlFor="ServiceName"
                    className="after:content-['_*'] after:text-red-500"
                  >
                    Name
                  </label>
                </legend>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="John Doe"
                  className="outline-none px-2 py-1"
                />
              </fieldset>
              {errors.name && (
                <p className="text-red-500 text-12 py-1 ps-3">
                  {errors.name.message as string}
                </p>
              )}
            </div>
            <div>
              <fieldset className="w-full flex flex-col border rounded-md px-2">
                <legend>
                  <label
                    htmlFor="ServiceName"
                    className="after:content-['_*'] after:text-red-500"
                  >
                    Email
                  </label>
                </legend>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  {...register("email", { required: "Email is required" })}
                  className="outline-none px-2 py-1"
                />
              </fieldset>
              {errors.email && (
                <p className="text-red-500 text-12 py-1 ps-3">
                  {errors.email.message as string}
                </p>
              )}
            </div>
            <div>
              <fieldset className="w-full flex flex-col border rounded-md px-2">
                <legend>
                  <label
                    htmlFor="ServiceName"
                    className="after:content-['_*'] after:text-red-500"
                  >
                    Phone
                  </label>
                </legend>
                <input
                  type="text"
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="+088 01*****"
                  className="outline-none px-2 py-1"
                />
              </fieldset>
              {errors?.phone && (
                <p className="text-red-500 text-12 py-1 ps-3">
                  {errors?.phone.message as string}
                </p>
              )}
            </div>
            <div>
              <fieldset className="w-full flex flex-col border rounded-md px-2">
                <legend>
                  <label
                    htmlFor="ServiceName"
                    className="after:content-['_*'] after:text-red-500"
                  >
                    Company Url
                  </label>
                </legend>
                <input
                  type="text"
                  {...register("companyUrl", {
                    required: "Company Url is required",
                  })}
                  placeholder="https://www.yourdomain.com"
                  className="outline-none px-2 py-1"
                />
              </fieldset>
              {errors?.companyUrl && (
                <p className="text-red-500 text-12 py-1 ps-3">
                  {errors?.companyUrl.message as string}
                </p>
              )}
            </div>
            <div>
              <fieldset className="w-full flex flex-col border rounded-md px-2">
                <legend>
                  <label
                    htmlFor="ServiceName"
                    className="after:content-['_*'] after:text-red-500"
                  >
                    Division
                  </label>
                </legend>
                <select
                  {...register("division", {
                    required: "Division is required",
                  })}
                  className="outline-none px-2 py-1"
                >
                  <option value={""} className="text-gray-400">
                    ---select division ---
                  </option>
                  {divisions?.map((item: any, index: number) => {
                    return (
                      <option key={index} value={item?.id}>
                        {item?.name}
                      </option>
                    );
                  })}
                </select>
              </fieldset>
              {errors.division && (
                <p className="text-red-500 text-12 py-1 ps-3">
                  {errors.division.message as string}
                </p>
              )}
            </div>
            <div>
              <fieldset className="w-full flex flex-col border rounded-md px-2">
                <legend>
                  <label
                    htmlFor="ServiceName"
                    className="after:content-['_*'] after:text-red-500"
                  >
                    Zila
                  </label>
                </legend>
                <select
                  {...register("zila", { required: "Zila is required" })}
                  className="outline-none px-2 py-1"
                >
                  <option value="" className="text-gray-400">
                    ---select zila ---
                  </option>
                  {divisions?.map((item: any, index: number) => {
                    return (
                      <option
                        key={index}
                        value={item?.id}
                        className="text-gray-700 hover:bg-green-700 hover:text-white"
                      >
                        {item?.name}
                      </option>
                    );
                  })}
                </select>
              </fieldset>
              {errors.zila && (
                <p className="text-red-500 text-12 py-1 ps-3">
                  {errors.zila.message as string}
                </p>
              )}
            </div>
            <div>
              <fieldset className="w-full flex flex-col border rounded-md px-2">
                <legend>
                  <label
                    htmlFor="ServiceName"
                    className="after:content-['_*'] after:text-red-500"
                  >
                    Thana
                  </label>
                </legend>
                <select
                  className="outline-none px-2 py-1"
                  {...register("thana", { required: "Thana is required" })}
                >
                  <option value="" className="text-gray-400">
                    ---select thana ---
                  </option>
                  {divisions?.map((item: any, index: number) => {
                    return (
                      <option key={index} value={item?.id}>
                        {item?.name}
                      </option>
                    );
                  })}
                </select>
              </fieldset>
              {errors.thana && (
                <p className="text-red-500 text-12 py-1 ps-3">
                  {errors.thana.message as string}
                </p>
              )}
            </div>
            <div>
              <fieldset className="w-full flex flex-col border rounded-md px-2">
                <legend>
                  <label
                    htmlFor="ServiceName"
                    className="after:content-['_*'] after:text-red-500"
                  >
                    Address
                  </label>
                </legend>
                <textarea
                  {...register("address", { required: "Address is required" })}
                  placeholder="Address"
                  className="outline-none px-2 py-1"
                ></textarea>
              </fieldset>
              {errors.address && (
                <p className="text-red-500 text-12 py-1 ps-3">
                  {errors.address.message as string}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] space-y-3">
          <h1 className="text-[20px] font-semibold pb-3">Current Package</h1>
          {featureSelectedInfoAll?.length > 0 &&
            featureSelectedInfoAll?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between  border-b border-gray-300 pb-1"
              >
                <span className="text-16 w-[60%]">
                  {item?.selectIndexFeatureData?.name} (
                  {item?.selectIndexFeatureData?.unit}){" "}
                </span>
                <div className="w-[40%] flex justify-between items-center">
                  <span className="text-16">{item?.planName}</span>
                  <span className="text-16">{item?.price}</span>
                </div>
              </div>
            ))}

          {/* <div className="flex items-center justify-between  border-b border-gray-300 pb-1">
            <span className="text-16">Internet</span>
            <span className="text-16">2.5</span>
          </div>
          <div className="flex items-center justify-between  border-b border-gray-300 pb-1">
            <span className="text-16">4G Only</span>
            <span className="text-16">0</span>
          </div>
          <div className="flex items-center justify-between  border-b border-gray-300 pb-1">
            <span className="text-16">Minutes</span>
            <span className="text-16">150</span>
          </div>
          <div className="flex items-center justify-between  border-b border-gray-300 pb-1">
            <span className="text-16">Bioscope</span>
            <span className="text-16">0</span>
          </div>
          <div className="flex items-center justify-between  border-b border-gray-300 pb-1">
            <span className="text-16">SMS</span>
            <span className="text-16">0</span>
          </div>
          <div className="flex items-center justify-between  border-b border-gray-300 pb-1">
            <span className="text-16">Missed all Alert</span>
            <span className="text-16">0ff</span>
          </div> */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 ps-4 text-18">
              Total Price
            </span>
            <span>৳ {featureTotalPrice}</span>
          </div>
          <div className="flex justify-end pt-3">
            <button
              type="submit"
              className="bg-primary text-white px-5 py-2 rounded-sm hover:bg-green-900 transation-all duration-300"
            >
              Order Now
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutPage;
