"use client";
import { Form, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="d-flex justify-content-end mb-3">
        <span className="text-success me-3 align-self-center">✓ Published</span>
        <Button variant="secondary">
          <i className="fa fa-ellipsis-v"></i>
        </Button>
      </div>
      <hr />

      <Form.Group controlId="wd-name" className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control defaultValue="A1 - ENV + HTML" />
      </Form.Group>

      <Form.Group controlId="wd-description" className="mb-3">
        <Form.Control
          as="textarea"
          rows={5}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify..."
        />
      </Form.Group>

      <Row className="mb-3">
        <Col md={3} as={Form.Label} className="text-end">Points</Col>
        <Col md={9}>
          <Form.Control type="number" defaultValue={100} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} as={Form.Label} className="text-end">Assignment Group</Col>
        <Col md={9}>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} as={Form.Label} className="text-end">Display Grade as</Col>
        <Col md={9}>
          <Form.Select defaultValue="PERCENTAGE">
            <option>Percentage</option>
            <option>Points</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} as={Form.Label} className="text-end">Submission Type</Col>
        <Col md={9}>
          <div className="border rounded p-3">
            <Form.Select defaultValue="ONLINE">
              <option>Online</option>
              <option>On-site</option>
            </Form.Select>
            <div className="mt-3">
              <b>Online Entry Options</b>
              <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
              <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
              <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
              <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
              <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} as={Form.Label} className="text-end">Assign</Col>
        <Col md={9}>
          <div className="border rounded p-3">
            <Form.Group controlId="wd-assign-to" className="mb-3">
              <Form.Label><b>Assign to</b></Form.Label>
              <Form.Control defaultValue="Everyone" />
            </Form.Group>
            <Form.Group controlId="wd-due-date" className="mb-3">
              <Form.Label><b>Due</b></Form.Label>
              <Form.Control type="date" defaultValue="2024-05-13" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="wd-available-from">
                  <Form.Label><b>Available from</b></Form.Label>
                  <Form.Control type="date" defaultValue="2024-05-06" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="wd-available-until">
                  <Form.Label><b>Until</b></Form.Label>
                  <Form.Control type="date" defaultValue="2024-05-20" />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <hr />
      <div className="d-flex justify-content-end">
        <Link href="/Courses/1234/Assignments">
          <Button variant="secondary" className="me-2">Cancel</Button>
        </Link>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}