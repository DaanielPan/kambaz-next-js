"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { setCurrentUser } from "../reducer";
import { Form, Button } from "react-bootstrap";

export default function SignIn() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();

  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" style={{ maxWidth: "400px" }}>
      <h1>Sign In</h1>
      <Form.Control
        id="wd-username"
        placeholder="username"
        className="mb-2"
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <div className="d-grid mb-2">
        <Button id="wd-signin-btn" onClick={signin} variant="primary">
          Sign in
        </Button>
      </div>
      <Link href="/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
