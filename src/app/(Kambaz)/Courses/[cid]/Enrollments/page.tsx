"use client";
import { useEffect } from "react";
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
  const userId = "1"; 

  const enrollments = useSelector((state: any) => state.enrollments.enrollments);

  const loadEnrollments = async () => {
    const data = await client.findEnrollmentsForUser(userId);
    dispatch(setEnrollments(data));
  };

  const enroll = async () => {
    const e = await client.enrollUserInCourse(userId, cid as string);
    dispatch(addEnrollment(e));
  };

  const unenroll = async () => {
    await client.unenrollUserFromCourse(userId, cid as string);
    dispatch(removeEnrollment(userId, cid as string));
  };

  useEffect(() => {
    loadEnrollments();
  }, []);

  const isEnrolled = enrollments.some((e: any) => e.course === cid);

  return (
    <div>
      <h1>Enrollments</h1>

      {!isEnrolled ? (
        <button className="btn btn-success" onClick={enroll}>
          Enroll
        </button>
      ) : (
        <button className="btn btn-danger" onClick={unenroll}>
          Unenroll
        </button>
      )}
    </div>
  );
}
