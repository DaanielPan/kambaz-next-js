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
  const assignmentsState = useSelector((state: any) => state.assignments);
  const assignments = Array.isArray(assignmentsState?.assignments) ? assignmentsState.assignments : [];

  const loadAssignments = async () => {
    if (!cid) return;
    try {
      const data = await client.findAssignmentsForCourse(cid as string);
      // Ensure we always set an array
      if (Array.isArray(data)) {
        dispatch(setAssignments(data));
      } else {
        console.error("API returned non-array data:", data);
        dispatch(setAssignments([]));
      }
    } catch (error) {
      console.error("Error fetching assignments:", error);
      // Set empty array on error to prevent .map() errors
      dispatch(setAssignments([]));
    }
  };

  useEffect(() => {
    loadAssignments();
  }, [cid]);

  const removeAssignment = async (id: string) => {
    if (!cid) return;
    try {
      await client.deleteAssignment(cid as string, id);
      // Reload assignments to get latest state from server
      await loadAssignments();
    } catch (error) {
      console.error("Error deleting assignment:", error);
      alert("Failed to delete assignment. Please try again.");
    }
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
