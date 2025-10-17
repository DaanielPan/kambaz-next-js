"use client";
import { usePathname } from "next/navigation";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  // The data array for the links
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <ListGroup style={{ width: 200 }} className="rounded-0" id="wd-courses-navigation">
      {/* Map over the array to create links dynamically */}
      {links.map((link) => (
        <ListGroup.Item
          key={link}
          as={Link}
          // Construct the URL dynamically using the course ID
          href={`/Courses/${cid}/${link}`}
          // Highlight the active link based on the current URL
          className={pathname.includes(link) ? "active" : ""}
        >
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}