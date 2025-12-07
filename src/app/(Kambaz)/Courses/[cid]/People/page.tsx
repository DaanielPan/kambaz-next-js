"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import * as client from "../../client";

// Define the shape of your data objects
type User = {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
};

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    if (!cid) return;
    try {
      setLoading(true);
      const data = await client.findUsersForCourse(cid as string);
      // Ensure we always set an array
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error("API returned non-array data:", data);
        setUsers([]);
      }
    } catch (error) {
      console.error("Error fetching users for course:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  if (loading) {
    return (
      <div id="wd-people-table">
        <p>Loading users...</p>
      </div>
    );
  }

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
          {users.map((user: User) => (
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