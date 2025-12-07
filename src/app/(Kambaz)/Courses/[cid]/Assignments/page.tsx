"use client";

import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAssignments = async () => {
    if (!cid) return;
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching assignments for course:", cid);
      const data = await client.findAssignmentsForCourse(cid as string);
      console.log("Assignments data received:", data);
      // Ensure we always set an array
      if (Array.isArray(data)) {
        dispatch(setAssignments(data));
        console.log("Set assignments:", data.length);
      } else {
        console.error("API returned non-array data:", data);
        dispatch(setAssignments([]));
        setError("Invalid data format received from server");
      }
    } catch (error: any) {
      console.error("Error fetching assignments:", error);
      dispatch(setAssignments([]));
      setError(error.response?.data?.message || error.message || "Failed to load assignments. Please check your server connection.");
    } finally {
      setLoading(false);
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

      {loading && <p>Loading assignments...</p>}

      {error && (
        <div className="alert alert-danger" role="alert">
          <strong>Error:</strong> {error}
          <br />
          <small>Check the browser console for more details.</small>
        </div>
      )}

      {!loading && !error && assignments.length === 0 && (
        <div className="alert alert-info" role="alert">
          <p>No assignments found for this course.</p>
          <p>Click the "+ Assignment" button to create your first assignment.</p>
        </div>
      )}

      {!loading && assignments.length > 0 && (
        <Row xs={1} md={3}>
          {assignments.map((a: any) => (
            <Col key={a._id}>
              <Card>
                <Card.Body>
                  <Card.Title>{a.name || a.title || "Untitled Assignment"}</Card.Title>
                  <Card.Text>{a.description || "No description"}</Card.Text>
                  {a.points && <Card.Text><small>Points: {a.points}</small></Card.Text>}
                  {a.due && <Card.Text><small>Due: {a.due}</small></Card.Text>}
                  {a.dueDate && <Card.Text><small>Due Date: {a.dueDate}</small></Card.Text>}

                  <Button
                    variant="primary"
                    className="me-2"
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
      )}
    </div>
  );
}
