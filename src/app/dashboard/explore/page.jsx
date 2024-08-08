import React from "react";
import CourseCard from "@/components/dashboard/course/course-card";

const Explore = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <h3>Other courses by Piyush Garg</h3>
      <div className="w-full flex justify-center gap-6 py-6 overflow-x-auto">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Explore;
