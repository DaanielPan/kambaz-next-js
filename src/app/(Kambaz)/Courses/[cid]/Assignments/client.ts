import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

// ⭐ Find assignments for a specific course
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

// ⭐ Create a new assignment for a course
export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

// ⭐ Update an existing assignment
export const updateAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.put(
    `${COURSES_API}/${courseId}/assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};

// ⭐ Delete an assignment
export const deleteAssignment = async (courseId: string, assignmentId: string) => {
  const response = await axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}/assignments/${assignmentId}`
  );
  return response.data;
};
