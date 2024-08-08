import Image from "next/image";
import React from "react";
import { Star, Heart, Plus, Minus } from "lucide-react";
const Courses = () => {
  return (
    <section className="flex-grow min-w-0 px-8">
      <div className="space-y-14 flex ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className="space-y-14 flex ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      {/* <section className="h-full w-full bg-red-300 "> */}
    </section>
  );
};

const CourseCard = ({
  imageSrc,
  title,
  description,
  rating,
  originalPrice,
  discountedPrice,
}) => {
  return (
    <div className="w-[260px] ">
      <div className="flex flex-col items-center justify-center relative border-[2px] border-gray-300 w-[260px] h-auto ">
        <Heart className="absolute top-0 right-0 w-10 h-10 p-2 opacity-60 bg-white font-thin" />
        <Image
          width={200}
          height={140}
          src="/images/course-thumbnails/harkiratsir/hk1.jpg"
          alt="hk1"
          className="bg-cover w-[260px] h-[260px]"
        />
        <button className="w-[260px] text-center py-2 bg-[#29521E] text-white text-[18px] font-semibold">
          View Product
        </button>
      </div>
      <div className="flex flex-col gap-[2px]">
        <h2 className="font-medium text-[22px] mt-4">{title}</h2>
        <h3 className="text-[16px] opacity-70 text-gray-600">{description}</h3>
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <Star className="text-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 w-5 h-5" />
            <p className="ml-3 text-lg pt-1 opacity-30">{rating}</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 mt-1">
          <p className="text-black opacity-40 text-lg line-through font-light">
            ₹{originalPrice}
          </p>
          <p className="ml-2 text-gray-600 text-xl font-medium">
            ₹{discountedPrice}
          </p>
        </div>
        <div className="flex justify-between items-center gap-2 mt-1 text-[13px] font-semibold">
          <button className="flex items-center bg-[#29521E] text-white p-2 rounded-lg ">
            <Minus className="mr-2 font-medium" />
            Add to Cart
            <Plus className="ml-2" />
          </button>
          <button className="flex items-center text-[#29521E] py-2 px-4 rounded-lg border-2 border-[#29521E]">
            Buy on Rent
          </button>
        </div>
      </div>
    </div>
  );
};
export default Courses;
