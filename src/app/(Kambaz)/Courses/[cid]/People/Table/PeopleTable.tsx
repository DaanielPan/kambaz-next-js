"use client";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../Details";

// Define the shape of your data objects
type User = {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
};

export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void; }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  // Ensure users is always an array
  const safeUsers = Array.isArray(users) ? users : [];
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
          {safeUsers.map((user: User) => (
            <tr key={user._id}>
              <td className="text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span
                  onClick={() => {
                    setShowDetails(true);
                    setShowUserId(user._id);
                  }}
                >
                  {user.firstName} {user.lastName}
                </span>
              </td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            fetchUsers();
          }}
        />
      )}
    </div>
  );
}

