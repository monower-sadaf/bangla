import { relative_image_path } from '@/helper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const paymentFailedPage = () => {
    return (
        <>
        <div className="w-full px-4 lg:px-20 flex items-center justify-center py-20">
          <div className="w-[45%] shadow-md shadow-red-900 bg-white py-5 px-10">
            <div className="w-full flex items-center justify-center">
              <Image
                src={relative_image_path("failed.jpeg")}
                className="w-[270px] h-[200px]"
                width={100}
                height={100}
                alt="success-payment"
              />
            </div>
            <div>
              <h1 className="text-[25px] text-center font-medium  text-red-400">
                Failure To Payment
              </h1>
            </div>
            <div className="pt-3 pb-3 space-y-2">
              <div className="flex items-center justify-center gap-5">
                <span className="text-18 text-gray-500">Order amount:</span>
                <span className="text-18 text-gray-600">$8882</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-18 text-gray-500 font-medium">Payment failed, please pay again</span>
                
              </div>
              
            </div>
            
            <div className="flex items-center justify-center gap-8 py-6">
              <Link
                href="/"
                className="w-full bg-primary text-white py-2 rounded-md mt-3 text-center"
              >
                Back to Service
              </Link>
  
              <button className="w-full border-2 border-red-600 round py-2 rounded-md mt-3">
               Try Again
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default paymentFailedPage;