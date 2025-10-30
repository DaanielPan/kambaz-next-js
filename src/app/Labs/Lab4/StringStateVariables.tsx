"use client";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <FormControl
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <hr />
    </div>
  );
}
