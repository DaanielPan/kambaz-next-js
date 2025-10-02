"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function SignIn() {
  return (
    <div id="wd-signin-screen" style={{ maxWidth: "400px" }}>
      <h1>Sign In</h1>
      <Form.Control id="wd-username" placeholder="username" className="mb-2" />
      <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2" />
      <Link href="/Dashboard" id="wd-signin-btn" className="d-grid mb-2">
        <Button variant="primary">
          Sign in
        </Button>
      </Link>
      <Link href="/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}