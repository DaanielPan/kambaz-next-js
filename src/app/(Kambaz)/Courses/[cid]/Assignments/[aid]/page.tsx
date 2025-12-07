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

  const assignmentsState = useSelector(
    (state: any) => state.assignmentsReducer
  );
  const assignments = Array.isArray(assignmentsState?.assignments) 
    ? assignmentsState.assignments 
    : [];

  const [assignment, setAssignment] = useState<any>({
    name: "New Assignment",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const fetchAssignments = async () => {
    if (!cid) return;
    setFetching(true);
    try {
      const data = await client.findAssignmentsForCourse(cid as string);
      // Ensure we always set an array
      if (Array.isArray(data)) {
        dispatch(setAssignments(data));

        if (aid !== "new") {
          const found = data.find((a: any) => a._id === aid);
          if (found) {
            // Normalize assignment data - handle both 'name' and 'title' fields
            const normalized = {
              ...found,
              name: found.name || found.title || "Untitled Assignment",
              title: found.title || found.name || "Untitled Assignment",
            };
            setAssignment(normalized);
          } else {
            console.error("Assignment not found:", aid);
            router.push(`/Courses/${cid}/Assignments`);
          }
        }
      } else {
        console.error("API returned non-array data:", data);
        dispatch(setAssignments([]));
      }
    } catch (error) {
      console.error("Error fetching assignments:", error);
      dispatch(setAssignments([]));
      if (aid !== "new") {
        router.push(`/Courses/${cid}/Assignments`);
      }
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid, aid]);

  const handleSave = async () => {
    if (!cid) return;
    setLoading(true);
    try {
      let updated: any;

      if (aid === "new") {
        // CREATE
        updated = await client.createAssignment(cid as string, assignment);
        // Reload assignments to get latest state from server
        await fetchAssignments();
      } else {
        // UPDATE
        updated = await client.updateAssignment(cid as string, assignment);
        // Reload assignments to get latest state from server
        await fetchAssignments();
      }

      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save assignment. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  if (fetching && aid !== "new") {
    return (
      <div id="wd-assignment-editor" style={{ maxWidth: "600px" }}>
        <p>Loading assignment...</p>
      </div>
    );
  }

  return (
    <div id="wd-assignment-editor" style={{ maxWidth: "600px" }}>
      <h2>{aid === "new" ? "New Assignment" : "Edit Assignment"}</h2>

      <FormControl
        className="mb-2"
        placeholder="Assignment Name"
        value={assignment.name || assignment.title || ""}
        onChange={(e) => setAssignment({ ...assignment, name: e.target.value, title: e.target.value })}
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
        <Button variant="secondary" onClick={handleCancel} disabled={loading}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  );
}
