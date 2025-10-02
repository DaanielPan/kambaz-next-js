import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { GoHome } from "react-icons/go";
import { BsGraphUp, BsMegaphone } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button variant="secondary" className="w-100 text-nowrap">
            <MdDoNotDisturbAlt /> Unpublish
          </Button>
        </div>
        <div className="w-50 ps-1">
          <Button variant="success" className="w-100">
            <FaCheckCircle /> Publish
          </Button>
        </div>
      </div>
      <br />
      <Button variant="secondary" className="w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </Button>
      <Button variant="secondary" className="w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </Button>
      <Button variant="secondary" className="w-100 mt-1 text-start">
        <GoHome className="me-2 fs-5" />
        Choose Home Page
      </Button>
      <Button variant="secondary" className="w-100 mt-1 text-start">
        <BsGraphUp className="me-2 fs-5" />
        View Course Stream
      </Button>
      <Button variant="secondary" className="w-100 mt-1 text-start">
        <BsMegaphone className="me-2 fs-5" />
        New Announcement
      </Button>
      <Button variant="secondary" className="w-100 mt-1 text-start">
        <IoStatsChart className="me-2 fs-5" />
        New Analytics
      </Button>
      <Button variant="secondary" className="w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" />
        View Course Notifications
      </Button>
    </div>
  );
}