import { FaPlus, FaEllipsisV, FaSearch } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { BsGripVertical } from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/InputGroupText";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between mb-3">
        <InputGroup className="w-50">
          <InputGroupText><FaSearch /></InputGroupText>
          <Form.Control type="text" placeholder="Search for Assignment" />
        </InputGroup>
        <div>
          <Button variant="secondary" className="me-1">
            <FaPlus className="me-1" /> Group
          </Button>
          <Link href="/Courses/1234/Assignments/new">
            <Button variant="danger">
              <FaPlus className="me-1" /> Assignment
            </Button>
          </Link>
        </div>
      </div>

      <ListGroup className="rounded-0 mt-4">
        <ListGroupItem className="p-0 mb-4 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary fw-bold">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <span className="float-end">
              <span className="border border-dark rounded-pill p-1 me-2 small">40% of Total</span>
              <FaPlus className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ListGroup className="rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />
                <HiOutlinePencilSquare className="me-3 fs-4 text-success" />
                <div className="flex-grow-1">
                  <Link href="/Courses/1234/Assignments/123" className="text-decoration-none">
                    <div className="fw-bold text-dark">A1 - ENV + HTML</div>
                  </Link>
                  <div className="small text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <b> Due:</b> Sep 18 at 11:59pm | 100 pts
                  </div>
                </div>
                <div className="float-end">
                  <GreenCheckmark />
                  <FaEllipsisV className="ms-2" />
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />
                <HiOutlinePencilSquare className="me-3 fs-4 text-success" />
                <div className="flex-grow-1">
                  <Link href="/Courses/1234/Assignments/124" className="text-decoration-none">
                    <div className="fw-bold text-dark">A2 - CSS + BOOTSTRAP</div>
                  </Link>
                  <div className="small text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <b> Due:</b> Oct 2 at 11:59pm | 100 pts
                  </div>
                </div>
                <div className="float-end">
                  <GreenCheckmark />
                  <FaEllipsisV className="ms-2" />
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />
                <HiOutlinePencilSquare className="me-3 fs-4 text-success" />
                <div className="flex-grow-1">
                  <Link href="/Courses/1234/Assignments/125" className="text-decoration-none">
                    <div className="fw-bold text-dark">A3 - JAVASCRIPT + REACT</div>
                  </Link>
                  <div className="small text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <b> Due:</b> Oct 16 at 11:59pm | 100 pts
                  </div>
                </div>
                <div className="float-end">
                  <GreenCheckmark />
                  <FaEllipsisV className="ms-2" />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}