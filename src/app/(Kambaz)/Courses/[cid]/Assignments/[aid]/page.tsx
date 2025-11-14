"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import { Button, FormControl } from "react-bootstrap";

import * as client from "../client";
import { setAssignments } from "../reducer";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cid, aid } = useParams();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const existing = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(
    existing || {
      name: "New Assignment",
      description: "",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
    }
  );

  const fetchAssignments = async () => {
    const data = await client.findAssignmentsForModule(cid as string);
    dispatch(setAssignments(data));

    if (aid !== "new") {
      const found = data.find((a: any) => a._id === aid);
      if (found) setAssignment(found);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

const handleSave = async () => {
  // declare updated BEFORE using it
  let updated: any;

  if (aid === "new") {
    // CREATE
    updated = await client.createAssignment(cid as string, assignment);
    dispatch(setAssignments([...assignments, updated]));
  } else {
    // UPDATE
    updated = await client.updateAssignment(assignment);

    const newList = assignments.map((a: any) =>
      a._id === updated._id ? updated : a
    );

    dispatch(setAssignments(newList));
  }

  router.push(`/Courses/${cid}/Assignments`);
};


  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" style={{ maxWidth: "600px" }}>
      <h2>{aid === "new" ? "New Assignment" : "Edit Assignment"}</h2>

      <FormControl
        className="mb-2"
        placeholder="Assignment Name"
        value={assignment.name}
        onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
      />

      <FormControl
        className="mb-2"
        as="textarea"
        placeholder="Description"
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />

      <FormControl
        className="mb-2"
        type="number"
        placeholder="Points"
        value={assignment.points}
        onChange={(e) =>
          setAssignment({ ...assignment, points: parseInt(e.target.value) })
        }
      />

      <FormControl
        className="mb-2"
        type="date"
        placeholder="Due Date"
        value={assignment.dueDate}
        onChange={(e) =>
          setAssignment({ ...assignment, dueDate: e.target.value })
        }
      />

      <FormControl
        className="mb-2"
        type="date"
        placeholder="Available From"
        value={assignment.availableFrom}
        onChange={(e) =>
          setAssignment({ ...assignment, availableFrom: e.target.value })
        }
      />

      <FormControl
        className="mb-2"
        type="date"
        placeholder="Available Until"
        value={assignment.availableUntil}
        onChange={(e) =>
          setAssignment({ ...assignment, availableUntil: e.target.value })
        }
      />

      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
