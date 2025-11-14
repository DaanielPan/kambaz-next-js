import * as db from "../../../Database";

const initialState = {
  assignments: db.assignments,
};

export default function assignmentsReducer(state = initialState, action: any) {
  switch (action.type) {
    case "setAssignments":                       
      return {
        ...state,
        assignments: action.assignments,
      };

    case "addAssignment":
      return {
        ...state,
        assignments: [...state.assignments, action.assignment],
      };
    case "deleteAssignment":
      return {
        ...state,
        assignments: state.assignments.filter(
          (a: any) => a._id !== action.assignmentId
        ),
      };
    case "updateAssignment":
      return {
        ...state,
        assignments: state.assignments.map((a: any) =>
          a._id === action.assignment._id ? action.assignment : a
        ),
      };
    default:
      return state;
  }
}

export const addAssignment = (assignment: any) => ({
  type: "addAssignment",
  assignment,
});

export const deleteAssignment = (assignmentId: string) => ({
  type: "deleteAssignment",
  assignmentId,
});

export const updateAssignment = (assignment: any) => ({
  type: "updateAssignment",
  assignment,
});

export const setAssignments = (assignments: any[]) => ({
  type: "setAssignments",
  assignments,
});
