"use client";
import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col key={course._id} style={{ width: "300px" }}>
              <Link
                href={`/Courses/${course._id}/Home`}
                className="text-decoration-none text-dark"
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={`/images/${course.image || "default.jpg"}`}
                    height={150}
                    alt={`Image for ${course.name}`}
                  />
                  <Card.Body>
                    <Card.Title className="text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="overflow-hidden"
                      style={{ height: "50px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}