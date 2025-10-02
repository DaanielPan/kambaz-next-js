"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" style={{ maxWidth: "400px" }}>
      <h1>Sign Up</h1>
      <Form.Control id="wd-username" placeholder="username" className="mb-2" />
      <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2" />
      <Form.Control id="wd-verify-password" placeholder="verify password" type="password" className="mb-2" />
      <Link href="/Account/Profile" id="wd-signup-btn" className="d-grid mb-2">
        <Button variant="primary">
          Sign up
        </Button>
      </Link>
      <Link href="/Account/Signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}