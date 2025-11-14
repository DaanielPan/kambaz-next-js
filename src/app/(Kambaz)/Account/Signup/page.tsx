"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentUser } from "../reducer";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/Account/Profile");
  };

  return (
    <div id="wd-signup-screen" style={{ maxWidth: "400px" }}>
      <h1>Signup</h1>

      <FormControl
        value={user.username}
        onChange={(e) =>
          setUser({ ...user, username: e.target.value })
        }
        className="wd-username mb-2"
        placeholder="username"
      />

      <FormControl
        value={user.password}
        type="password"
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
        className="wd-password mb-2"
        placeholder="password"
      />

      <Button
        onClick={signup}
        className="wd-signup-btn btn btn-primary mb-2 w-100"
      >
        Signup
      </Button>

      <Link href="/Account/Signin" className="wd-signin-link">
        Signin
      </Link>
    </div>
  );
}
