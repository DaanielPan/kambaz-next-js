"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { Button, Row, Col, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Assignments() {
  const dispatch = useDispatch();
  const router = useRouter();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments">
      <h1>Assignments</h1>
      <div className="d-flex justify-content-end mb-3">
        <Button
          variant="success"
          onClick={() => router.push(`/Courses/${"1"}/Assignments/new`)}
        >
          + Assignment
        </Button>
      </div>

      <Row xs={1} md={3} className="g-4">
        {assignments.map((assignment: any) => (
          <Col key={assignment._id}>
            <Card>
              <Card.Body>
                <Card.Title>{assignment.name}</Card.Title>
                <Card.Text>{assignment.description}</Card.Text>
                <Card.Text>
                  <strong>Due:</strong> {assignment.dueDate}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    onClick={() =>
                      router.push(`/Courses/${"1"}/Assignments/${assignment._id}`)
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(assignment._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
