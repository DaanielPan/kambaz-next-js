import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

// ⭐ Find enrollments for the current logged-in user
export const findEnrollmentsForUser = async () => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/current/enrollments`
  );
  return response.data;
};

// ⭐ Enroll current user in a course
export const enrollUserInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/enrollments`
  );
  return response.data;
};

// ⭐ Unenroll current user from a course
export const unenrollUserFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}/enrollments`
  );
  return response.data;
};
