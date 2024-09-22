import { relative_image_path } from "@/helper";
import Image from "next/image";
import Link from "next/link";

const successPage = () => {
  return (
    <>
      <div className="w-full px-4 lg:px-20 flex items-center justify-center py-20">
        <div className="w-[45%] shadow-md shadow-green-800 bg-white py-5 px-10">
          <div className="w-full flex items-center justify-center">
            <Image
              src={relative_image_path("success.jpeg")}
              className="w-[120px] h-[110px]"
              width={100}
              height={100}
              alt="success-payment"
            />
          </div>
          <div>
            <h1 className="text-[25px] text-center font-medium  text-primary">
              Payment Successful
            </h1>
          </div>
          <div className="pt-10 pb-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-16 text-gray-500">Payment type</span>
              <span className="text-16 text-gray-600">Net Banking</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-16 text-gray-500">Bank</span>
              <span className="text-16 text-gray-600">HDFC</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-16 text-gray-500">Mobile</span>
              <span className="text-16 text-gray-600">0194*******</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-16 text-gray-500">Email</span>
              <span className="text-16 text-gray-600">test@gmail.com</span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between py-3">
              <span className="text-15 text-gray-800 font-medium">
                Amount Price
              </span>
              <span className="text-16 text-gray-800">500.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-16 text-gray-500">Transition Id</span>
              <span className="text-16 text-gray-600">1245678544</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 py-6">
            <Link
              href="/"
              className="w-full bg-primary text-white py-2 rounded-md mt-3 text-center"
            >
              Continue Shopping
            </Link>

            <button className="w-full bg-primary text-white py-2 rounded-md mt-3">
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default successPage;
