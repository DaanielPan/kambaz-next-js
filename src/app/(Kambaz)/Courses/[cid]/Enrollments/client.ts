import axios from "axios";
export const HTTP = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const ENROLL_API = `${HTTP}/api`;

export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axios.get(`${ENROLL_API}/users/${userId}/enrollments`);
  return response.data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(
    `${ENROLL_API}/users/${userId}/enrollments/${courseId}`
  );
  return response.data;
};

export const unenrollUserFromCourse = async (
  userId: string,
  courseId: string
) => {
  const response = await axios.delete(
    `${ENROLL_API}/users/${userId}/enrollments/${courseId}`
  );
  return response.data;
};
