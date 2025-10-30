"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { addAssignment, updateAssignment } from "../reducer";
import { Button, FormControl } from "react-bootstrap";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cid, aid } = useParams();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(
    existingAssignment || {
      _id: uuidv4(),
      name: "New Assignment",
      description: "New Assignment Description",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
    }
  );

  const handleSave = () => {
    if (existingAssignment) dispatch(updateAssignment(assignment));
    else dispatch(addAssignment(assignment));
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" style={{ maxWidth: "600px" }}>
      <h2>{existingAssignment ? "Edit Assignment" : "New Assignment"}</h2>

      <FormControl
        className="mb-2"
        placeholder="Assignment Name"
        defaultValue={assignment.name}
        onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
      />

      <FormControl
        className="mb-2"
        as="textarea"
        placeholder="Description"
        defaultValue={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />

      <FormControl
        className="mb-2"
        type="number"
        placeholder="Points"
        defaultValue={assignment.points}
        onChange={(e) =>
          setAssignment({ ...assignment, points: parseInt(e.target.value) })
        }
      />

      <FormControl
        className="mb-2"
        type="date"
        placeholder="Due Date"
        defaultValue={assignment.dueDate}
        onChange={(e) =>
          setAssignment({ ...assignment, dueDate: e.target.value })
        }
      />

      <FormControl
        className="mb-2"
        type="date"
        placeholder="Available From"
        defaultValue={assignment.availableFrom}
        onChange={(e) =>
          setAssignment({ ...assignment, availableFrom: e.target.value })
        }
      />

      <FormControl
        className="mb-2"
        type="date"
        placeholder="Available Until"
        defaultValue={assignment.availableUntil}
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
