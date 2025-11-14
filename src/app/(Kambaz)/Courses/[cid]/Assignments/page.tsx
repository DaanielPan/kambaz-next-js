"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import * as client from "./client";
import { setAssignments } from "./reducer";
import { deleteAssignment as deleteLocal } from "./reducer";
import { Button, Row, Col, Card } from "react-bootstrap";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignments.assignments);

  const loadAssignments = async () => {
    const data = await client.findAssignmentsForModule(cid as string);
    dispatch(setAssignments(data));
  };

  useEffect(() => {
    loadAssignments();
  }, []);

  const removeAssignment = async (id: string) => {
    await client.deleteAssignment(id);
    dispatch(setAssignments(assignments.filter((a: any) => a._id !== id)));
  };

  return (
    <div id="wd-assignments">
      <h1>Assignments</h1>

      <Button
        variant="success"
        className="mb-3 float-end"
        onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
      >
        + Assignment
      </Button>

      <Row xs={1} md={3}>
        {assignments.map((a: any) => (
          <Col key={a._id}>
            <Card>
              <Card.Body>
                <Card.Title>{a.name}</Card.Title>
                <Card.Text>{a.description}</Card.Text>

                <Button
                  variant="primary"
                  onClick={() =>
                    router.push(`/Courses/${cid}/Assignments/${a._id}`)
                  }
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => removeAssignment(a._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
