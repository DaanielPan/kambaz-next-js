"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database"; // Path is now one level shorter
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

// Define the shape of your data objects
type User = {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
};

type Enrollment = {
  user: string;
  course: string;
};

export default function People() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  // Filter users based on their enrollment in the current course
  const courseUsers = users.filter((user: User) =>
    enrollments.some(
      (enrollment: Enrollment) =>
        enrollment.user === user._id && enrollment.course === cid
    )
  );

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {courseUsers.map((user: User) => (
            <tr key={user._id}>
              <td className="text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                {user.firstName} {user.lastName}
              </td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}