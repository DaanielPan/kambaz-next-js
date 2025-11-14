import axios from "axios";

export const HTTP = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const API = `${HTTP}/api`;

export const findAssignmentsForModule = async (moduleId: string) => {
  const response = await axios.get(`${API}/modules/${moduleId}/assignments`);
  return response.data;
};

export const createAssignment = async (moduleId: string, assignment: any) => {
  const response = await axios.post(
    `${API}/modules/${moduleId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(
    `${API}/assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${API}/assignments/${assignmentId}`);
  return response.data;
};
