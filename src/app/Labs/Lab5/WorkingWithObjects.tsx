"use client";

import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  // ASSIGNMENT STATE
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  // MODULE STATE
  const [moduleObj, setModuleObj] = useState({
    id: "m101",
    name: "Intro to Web Dev",
    description: "Basics of React and Node",
    course: "CS4550",
  });

  // API BASE URLS
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* RETRIEVING ASSIGNMENT */}
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}`}
      >
        Get Assignment
      </a>
      <hr />

      {/* RETRIEVING ASSIGNMENT TITLE */}
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>
      <hr />

      {/* MODULE RETRIEVAL */}
      <h4>Module: Retrieving Objects</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />

      <h4>Module: Retrieving Properties</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />

      {/* MODULE MODIFICATION — NAME */}
      <h4>Module: Modifying Name</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end mb-2"
        href={`${MODULE_API_URL}/name/${moduleObj.name}`}
      >
        Update Module Name
      </a>

      <FormControl
        className="w-75 mb-2"
        id="wd-module-name"
        defaultValue={moduleObj.name}
        onChange={(e) =>
          setModuleObj({ ...moduleObj, name: e.target.value })
        }
      />
      <hr />

      {/* MODULE MODIFICATION — DESCRIPTION */}
      <h4>Module: Modifying Description</h4>
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end mb-2"
        href={`${MODULE_API_URL}/description/${moduleObj.description}`}
      >
        Update Module Description
      </a>

      <FormControl
        className="w-75 mb-2"
        id="wd-module-description"
        defaultValue={moduleObj.description}
        onChange={(e) =>
          setModuleObj({ ...moduleObj, description: e.target.value })
        }
      />
      <hr />

      {/* ASSIGNMENT MODIFICATION — TITLE */}
      <h4>Modifying Properties</h4>

      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>

      <FormControl
        className="w-75 mb-2"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      {/* ASSIGNMENT MODIFICATION — SCORE */}
      <h4>Assignment: Modifying Score</h4>

      <a
        id="wd-update-assignment-score"
        className="btn btn-warning float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <FormControl
        className="w-75 mb-2"
        id="wd-assignment-score"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            score: Number(e.target.value),
          })
        }
      />
      <hr />

      {/* ASSIGNMENT MODIFICATION — COMPLETED */}
      <h4>Assignment: Modifying Completed</h4>

      <a
        id="wd-update-assignment-completed"
        className="btn btn-success float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>

      <div className="form-check w-75 mb-2">
        <input
          className="form-check-input"
          id="wd-assignment-completed"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              completed: e.target.checked,
            })
          }
        />
        <label
          className="form-check-label"
          htmlFor="wd-assignment-completed"
        >
          Completed
        </label>
      </div>

      <hr />
    </div>
  );
}
