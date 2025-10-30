"use client";

import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const course = courses.find((c: any) => c._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="d-flex align-items-center text-success">
        <FaAlignJustify className="me-4 fs-4 mb-1 text-success" />
        {course?.name}
      </h2>
      <hr className="border-success" />
      <div className="d-flex">
        <div>
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
