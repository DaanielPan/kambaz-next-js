"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Nav } from "react-bootstrap";

export default function TOC() {
  const pathname = usePathname();
  return (
    <Nav variant="pills" className="mb-3">
      <Nav.Item>
        <Link
          href="/Labs"
          className={`nav-link ${pathname.endsWith("/Labs") ? "active" : ""}`}
        >
          Labs
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          href="/Labs/Lab1"
          className={`nav-link ${
            pathname.endsWith("/Lab1") ? "active" : ""
          }`}
        >
          Lab 1
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          href="/Labs/Lab2"
          className={`nav-link ${
            pathname.endsWith("/Lab2") ? "active" : ""
          }`}
        >
          Lab 2
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          href="/Labs/Lab3"
          className={`nav-link ${
            pathname.endsWith("/Lab3") ? "active" : ""
          }`}
        >
          Lab 3
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          href="/Labs/Lab4"
          className={`nav-link ${
            pathname.endsWith("/Lab4") ? "active" : ""
          }`}
        >
          Lab 4
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          href="/Labs/Lab5"
          className={`nav-link ${
            pathname.endsWith("/Lab5") ? "active" : ""
          }`}
        >
          Lab 5
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/" className="nav-link">
        Kambaz
        </Link>
      </Nav.Item>
      
      <Nav.Item>
        <Link
          href="https://github.com/DaanielPan"
          target="_blank"
          className="nav-link"
        >
          My GitHub
        </Link>
      </Nav.Item>
    </Nav>
  );
}