"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import * as client from "./client";
import {
  setEnrollments,
  addEnrollment,
  removeEnrollment,
} from "./reducer";

export default function EnrollmentsPage() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollmentsState = useSelector((state: any) => state.enrollments);
  const enrollments = Array.isArray(enrollmentsState?.enrollments) 
    ? enrollmentsState.enrollments 
    : [];
  const [loading, setLoading] = useState(false);

  const loadEnrollments = async () => {
    if (!currentUser) return;
    try {
      const data = await client.findEnrollmentsForUser();
      // Ensure we always set an array
      if (Array.isArray(data)) {
        dispatch(setEnrollments(data));
      } else {
        console.error("API returned non-array data:", data);
        dispatch(setEnrollments([]));
      }
    } catch (error) {
      console.error("Error loading enrollments:", error);
      dispatch(setEnrollments([]));
    }
  };

  const enroll = async () => {
    if (!cid || !currentUser) return;
    setLoading(true);
    try {
      const enrollment = await client.enrollUserInCourse(cid as string);
      // Reload enrollments to get the latest state from server
      await loadEnrollments();
    } catch (error) {
      console.error("Error enrolling in course:", error);
      alert("Failed to enroll in course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const unenroll = async () => {
    if (!cid || !currentUser) return;
    setLoading(true);
    try {
      await client.unenrollUserFromCourse(cid as string);
      // Reload enrollments to get the latest state from server
      await loadEnrollments();
    } catch (error) {
      console.error("Error unenrolling from course:", error);
      alert("Failed to unenroll from course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      loadEnrollments();
    }
  }, [currentUser, cid]);

  // Check if current user is enrolled in this course
  const isEnrolled = currentUser 
    ? enrollments.some((e: any) => e.course === cid && e.user === currentUser._id)
    : false;

  if (!currentUser) {
    return (
      <div>
        <h1>Enrollments</h1>
        <p>Please sign in to enroll in courses.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Enrollments</h1>
      <p>Course ID: {cid}</p>
      <p>Status: {isEnrolled ? "Enrolled" : "Not Enrolled"}</p>

      {!isEnrolled ? (
        <button 
          className="btn btn-success" 
          onClick={enroll}
          disabled={loading}
        >
          {loading ? "Enrolling..." : "Enroll"}
        </button>
      ) : (
        <button 
          className="btn btn-danger" 
          onClick={unenroll}
          disabled={loading}
        >
          {loading ? "Unenrolling..." : "Unenroll"}
        </button>
      )}
    </div>
  );
}
