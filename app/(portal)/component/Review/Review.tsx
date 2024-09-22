"use client";

import { relative_image_path } from "@/helper";
import Image from "next/image";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";
import { Rating, Star } from "@smastrom/react-rating"; // Regular import
import { createReviewApi } from "../../_api";
import { toast } from "react-toastify";

export const Review = ({ serviceId }: { serviceId: number }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);

  const [error, setError] = useState({
    review_description: "",
    rating: "",
  });

  const customStyles = {
    itemShapes: Star,
    activeFillColor: "green",
    inactiveFillColor: "gray",
  };

  const handleReviewSubmit = async (event: any) => {
    event.preventDefault();

    setError({
      ...error,
      review_description: "",
      rating: "",
    });
    if (rating == 0 && !event.target.review_description.value) {
      setError({
        ...error,
        review_description: "Please write review",
        rating: "Please select rating",
      });
      return;
    }

    if (rating === 0) {
      setError({
        ...error,
        rating: "Please select rating",
        review_description: "",
      });
      return;
    }

    if (!event.target.review_description.value) {
      setError({
        ...error,
        review_description: "Please write review",
        rating: "",
      });
      return;
    }

    const reviewList = {
      user_id: 12,
      service_id: serviceId,
      rating: rating,
      msg: event.target.review_description.value,
      status: 1,
    };
    console.log({reviewList});
    
    const reviewRes = await createReviewApi(reviewList);
    if(reviewRes.status === true){
      setRating(0);
      event.target.reset();
      toast.success("Review added successfully");
    }else{
      toast.error("Something went wrong");
    }
    // console.log("reviewRes", reviewRes);

    // if(reviewRes.status == 200){

    // console.log("rating", rating);
    // const des = event.target.review_description.value;
    // console.log("des", des);
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={relative_image_path("profileImage.png")}
            className="w-[40px] h-[40px] rounded-full border"
            width={100}
            height={100}
            alt="Bangla"
          />
          <h1>Prashoman Chakrabarti</h1>
        </div>

        <div className="relative">
          <HiDotsVertical
            onClick={() => setShow(!show)}
            className="w-6 h-6 cursor-pointer"
          />
          {show && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="border border-gray-300 shadow-lg p-1 flex flex-col gap-2 absolute right-0 top-8 z-30 bg-white"
            >
              <button className="border border-primary px-1 bg-gray-300 shadow rounded">
                Update
              </button>
              <button className="border border-red-600 px-1 bg-gray-300 shadow rounded">
                Delete
              </button>
            </motion.div>
          )}
        </div>
      </div>
      <div className="pt-5 flex items-center gap-6">
        <Rating
          style={{ maxWidth: 100 }}
          className="text-primary"
          value={3}
          readOnly
          itemStyles={customStyles}
        />
        <div>August 11, 2024</div>
      </div>
      <p className="py-2 text-16 leading-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum sed
        eligendi aperiam minus, repellendus eaque. Veniam dignissimos cumque
        ipsum libero, culpa vel deleniti, numquam eos, saepe ullam quo beatae!
      </p>
      <div className="space-y-2">
        <h1 className="text-18 font-medium">Add Review</h1>
        <form onSubmit={handleReviewSubmit}>
          <div>
            <div className="flex items-center gap-3">
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
                itemStyles={customStyles}
              />
              <span>({rating}/5)</span>
            </div>
            {error.rating && <p className="text-red-600">{error.rating}</p>}
          </div>
          <div>
            <textarea
              name="review_description"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="Write your review here"
            ></textarea>
            {error.review_description && (
              <p className="text-red-600">{error.review_description}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button className="w-[120px] bg-primary text-white rounded-lg p-2">
              Add review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
