"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import * as client from "../Courses/client";
import { setCourses } from "../Courses/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const courses = useSelector((state: any) => state.coursesReducer);

  const [course, setCourse] = useState<any>({
    name: "",
    description: "",
    image: "default.jpg",
  });

  // ⭐ load courses
  const fetchCourses = async () => {
    try {
      const c = await client.findMyCourses();
      dispatch(setCourses(c));
    } catch (error) {
      console.error(error);
    }
  };

  // ⭐ add course
  const onAddNewCourse = async () => {
    try {
      const newCourse = await client.createCourse(course);
      dispatch(setCourses([...courses, newCourse]));
    } catch (error) {
      console.error(error);
    }
  };

  // ⭐ delete course
  const onDeleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
    } catch (error) {
      console.error(error);
    }
  };

  // ⭐ GREEN — update course
  const onUpdateCourse = async () => {
    try {
      await client.updateCourse(course);

      dispatch(
        setCourses(
          courses.map((c: any) =>
            c._id === course._id ? course : c // ⭐ replace updated course
          )
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      {/* CREATE NEW COURSE */}
      <h5 className="mt-3">
        New Course
        {/* ⭐ ADD NEW COURSE */}
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={onAddNewCourse}
        >
          Add
        </button>

        {/* ⭐ GREEN — UPDATE COURSE BUTTON */}
        <button
          className="btn btn-secondary float-end me-2"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>

      <FormControl
        className="mb-2"
        placeholder="Course Name"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        rows={3}
        placeholder="Course Description"
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />

      <hr />

      <h2 id="wd-dashboard-published">
        My Courses ({courses.length})
      </h2>

      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((courseItem: any) => (
            <Col key={courseItem._id} style={{ width: "300px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`/images/${courseItem.image || "default.jpg"}`}
                  height={150}
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
                    <Link
                      href={`/Courses/${courseItem._id}/Home`}
                      className="text-decoration-none"
                    >
                      <Button className="btn btn-primary">Go</Button>
                    </Link>

                    {/* DELETE */}
                    <Button
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        onDeleteCourse(courseItem._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>

                  {/* SELECT COURSE FOR EDITING */}
                  <button
                    className="btn btn-warning mt-2 w-100"
                    onClick={() => setCourse(courseItem)}
                  >
                    Edit
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
