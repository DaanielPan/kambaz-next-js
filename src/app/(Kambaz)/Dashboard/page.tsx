"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as db from "../Database";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;
  description: string;
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const allCourses = useSelector((state: any) => state.coursesReducer.courses || []);

  // --- Enrollment persistence ---
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("enrolledCourses");
    if (saved) setEnrolledCourses(JSON.parse(saved));
  }, []);

  const toggleEnrollment = (id: string) => {
    const updated = enrolledCourses.includes(id)
      ? enrolledCourses.filter((c) => c !== id)
      : [...enrolledCourses, id];
    setEnrolledCourses(updated);
    localStorage.setItem("enrolledCourses", JSON.stringify(updated));
  };

  const displayedCourses = showAllCourses
    ? allCourses
    : allCourses.filter((c: any) => enrolledCourses.includes(c._id));

  // --- Course Creation ---
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <Button
          variant="primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </Button>
      </div>

      <h5 className="mt-3">
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}
        >
          Update
        </button>
      </h5>
      <br />

      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        value={course.description}
        rows={3}
        as="textarea"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />

      <hr />
      <h2 id="wd-dashboard-published">
        {showAllCourses
          ? `All Courses (${displayedCourses.length})`
          : `Enrolled Courses (${displayedCourses.length})`}
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((courseItem: any) => (
            <Col key={courseItem._id} style={{ width: "300px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`/images/${courseItem.image || "default.jpg"}`}
                  height={150}
                  alt={`Image for ${courseItem.name}`}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    {courseItem.name}
                  </Card.Title>
                  <Card.Text
                    className="overflow-hidden"
                    style={{ height: "50px" }}
                  >
                    {courseItem.description}
                  </Card.Text>

                  <div className="d-flex justify-content-between">
                    {enrolledCourses.includes(courseItem._id) ? (
                      <>
                        <Link
                          href={`/Courses/${courseItem._id}/Home`}
                          className="text-decoration-none"
                        >
                          <Button className="btn btn-primary">Go</Button>
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => toggleEnrollment(courseItem._id)}
                        >
                          Unenroll
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="success"
                        onClick={() => toggleEnrollment(courseItem._id)}
                      >
                        Enroll
                      </Button>
                    )}
                  </div>

                  {/* Faculty Controls */}
                  {currentUser?.role === "FACULTY" && (
                    <div className="mt-2 d-flex justify-content-end">
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(courseItem);
                        }}
                        className="btn btn-warning me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteCourse(courseItem._id));
                        }}
                        className="btn btn-danger"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
