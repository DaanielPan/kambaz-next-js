"use client";
import { useParams, useRouter } from "next/navigation";
import * as db from "../../../Database"; 
import { Form, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function AssignmentEditor() {
  // Get course and assignment IDs from the URL
  const { cid, aid } = useParams();
  const router = useRouter();

  // Find the specific assignment from the database
  const assignment = db.assignments.find((a) => a._id === aid);

  // Function to navigate back to the assignments list
  const handleSave = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor">
      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue={assignment?.title} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          defaultValue={`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={assignment?.points} />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3 border p-3 rounded">
        <Form.Label>Assign</Form.Label>
        <Form.Group className="mb-3">
          <Form.Label>Due</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Available from</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
      </Form.Group>

      <hr />

      <div className="d-flex justify-content-end">
        <Link
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-light me-2"
        >
          Cancel
        </Link>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}