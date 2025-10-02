import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const users = [
    { firstName: "Tony", lastName: "Stark", id: "001234561S", section: "S101", role: "STUDENT", lastActivity: "2020-10-01", totalActivity: "10:21:32" },
    { firstName: "Bruce", lastName: "Wayne", id: "001234562W", section: "S101", role: "STUDENT", lastActivity: "2021-09-15", totalActivity: "08:45:10" },
    { firstName: "Steve", lastName: "Rogers", id: "001234563R", section: "S102", role: "STUDENT", lastActivity: "2022-03-20", totalActivity: "12:30:55" },
    { firstName: "Natasha", lastName: "Romanoff", id: "001234564N", section: "S102", role: "TA", lastActivity: "2023-11-01", totalActivity: "25:15:00" },
  ];

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                {user.firstName} {user.lastName}
              </td>
              <td>{user.id}</td>
              <td>{user.section}</td>
              <td>{user.role}</td>
              <td>{user.lastActivity}</td>
              <td>{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}