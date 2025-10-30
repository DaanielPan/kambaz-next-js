"use client";
import { useParams, usePathname } from "next/navigation";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();

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
      {links.map((link) => (
        <ListGroup.Item
          key={link}
          as={Link}
          href={`/Courses/${cid}/${link}`}
          className={pathname.includes(link) ? "active" : ""}
        >
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
