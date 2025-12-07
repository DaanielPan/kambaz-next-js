"use client";
import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
import * as client from "../../../Account/client";

export default function PeopleDetails({ uid, onClose }: { uid: string | null; onClose: () => void; }) {
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose();
  };
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    onClose();
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  useEffect(() => {
    if (user.firstName && user.lastName) {
      setName(`${user.firstName} ${user.lastName}`);
    }
    if (user.email) {
      setEmail(user.email);
    }
    if (user.role) {
      setRole(user.role);
    }
  }, [user]);
  if (!uid) return null;
  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={onClose} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" /> </button>
      <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <>
            <FaPencil className="float-end" onClick={() => setEditing(true)} />
            <div onClick={() => setEditing(true)}>{user.firstName} {user.lastName}</div>
          </>
        )}
        {editing && (
          <>
            <FaCheck className="float-end" onClick={saveUser} />
            <FormControl
              className="w-50 wd-edit-name"
              defaultValue={`${user.firstName} ${user.lastName}`}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveUser();
                }
              }}
            />
          </>
        )}
      </div>
      <b>Roles:</b> 
      {!editing ? (
        <span className="wd-roles">{user.role}</span>
      ) : (
        <select
          className="form-select d-inline-block w-50 ms-2"
          value={role || user.role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="STUDENT">STUDENT</option>
          <option value="TA">TA</option>
          <option value="FACULTY">FACULTY</option>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </select>
      )}
      <br />
      <b>Email:</b> 
      {!editing ? (
        <span className="wd-email">{user.email || ""}</span>
      ) : (
        <FormControl
          type="email"
          className="d-inline-block w-50 ms-2"
          defaultValue={user.email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <br />
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
      <b>Total Activity: </b> <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button onClick={() => uid && deleteUser(uid)} className="btn btn-danger float-end wd-delete"> Delete </button>
      <button onClick={onClose} className="btn btn-secondary float-end me-2 wd-cancel"> Cancel </button>
    </div>
  );
}

