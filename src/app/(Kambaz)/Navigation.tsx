"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();

  // Data structure for navigation links
  const links = [
    { label: "Dashboard", path: "/Dashboard", Icon: AiOutlineDashboard },
    { label: "Courses", path: "/Dashboard", Icon: LiaBookSolid },
    { label: "Calendar", path: "/Calendar", Icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", Icon: FaInbox },
    { label: "Labs", path: "/Labs", Icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroup.Item
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        href="/Account"
        className={`border-0 text-center ${
          pathname.includes("/Account") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("/Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroup.Item>

      {/* Dynamically render links from the data array */}
      {links.map((link) => (
        <ListGroup.Item
          key={link.label}
          as={Link}
          href={link.path}
          className={`border-0 text-center ${
            pathname.includes(link.label) ? "bg-white text-danger" : "bg-black text-white"
          }`}
        >
          <link.Icon
            className={`fs-1 ${
              pathname.includes(link.label) ? "text-danger" : "text-white"
            }`}
          />
          <br />
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}