import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

const CourseCard = () => {
  return (
    <div className="rounded-lg border border-muted h-[320px] w-[250px] flex flex-col items-start gap-4 pt-3 px-3 shadow-lg">
      <Image
        src={"/images/course-thumbnails/harkiratsir/hk1.jpg"}
        height={150}
        width={250}
        alt="thumbnail"
        className="rounded-md"
      />
      <h4 className="h-full max-h-16">
        Learn the basics of web: Internet fundamentals
      </h4>
      <div className="flex flex-col items-center w-full">
        <h5 className="w-full text-left pb-2">Piyush Garg</h5>
        <div className="w-full flex justify-between items-center">
          <h6>4.5</h6>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-300 h-4 w-4" />
            <Star className="text-yellow-300 h-4 w-4" />
            <Star className="text-yellow-300 h-4 w-4" />
            <Star className="text-yellow-300 h-4 w-4" />
            <Star className="text-yellow-300 h-4 w-4" />
          </div>
          <h6>22 enrolled</h6>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

// import Image from "next/image";
// import React from "react";
// import { Star } from "lucide-react";

// const CourseCard = () => {
//   return (
//     <div className="rounded-lg border border-muted h-full max-h-[320px] w-[250px]  flexColXstartYcenter gap-4 pt-3 px-3 shadow-lg">
//       {/* <div className="rounded-lg border border-muted h-full max-h-[320px] w-full max-w-[250px]  flexColXstartYcenter gap-4 pt-3 px-3 shadow-lg"> */}
//       <Image
//         src={"/images/course-thumbnails/harkiratsir/hk1.jpg"}
//         height={300}
//         width={250}
//         alt="thumbnail"
//         className="rounded-md"
//       />
//       <h4 className="h-full max-h-16">
//         Learn the basics of web: Internet fundamentals
//       </h4>
//       <div className="flexColCenterXY w-full">
//         <h5 className="w-full items-start pb-2">Piyush garg</h5>
//         <div className="w-full flexBetXcenterY">
//           <h6>4.5</h6>
//           <div className="flexCenterXY gap-1">
//             <Star className="bg-yellow-300 h-4 w-4" />
//             <Star className="bg-yellow-300 h-4 w-4" />
//             <Star className="bg-yellow-300 h-4 w-4" />
//             <Star className="bg-yellow-300 h-4 w-4" />
//             <Star className="bg-yellow-300 h-4 w-4" />
//           </div>
//           <h6>22 enrolled</h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
