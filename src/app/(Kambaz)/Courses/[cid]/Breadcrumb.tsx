"use client";
import { usePathname } from "next/navigation";

// Define the shape of the course prop for TypeScript
type CourseType = {
  name: string;
};

export default function Breadcrumb({ course }: { course: CourseType | undefined }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentSection = pathSegments[pathSegments.length - 1];

  return (
    <span>
      {course?.name} &gt; {currentSection}
    </span>
  );
}