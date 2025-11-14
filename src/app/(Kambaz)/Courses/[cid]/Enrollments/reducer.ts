const initialState = {
    enrollments: [],
  };
  
  export default function enrollmentsReducer(state = initialState, action: any) {
    switch (action.type) {
      case "setEnrollments":
        return { ...state, enrollments: action.enrollments };
  
      case "addEnrollment":
        return { ...state, enrollments: [...state.enrollments, action.enrollment] };
  
      case "removeEnrollment":
        return {
          ...state,
          enrollments: state.enrollments.filter(
            (e: any) =>
              !(e.user === action.userId && e.course === action.courseId)
          ),
        };
  
      default:
        return state;
    }
  }
  
  export const setEnrollments = (enrollments: any[]) => ({
    type: "setEnrollments",
    enrollments,
  });
  
  export const addEnrollment = (enrollment: any) => ({
    type: "addEnrollment",
    enrollment,
  });
  
  export const removeEnrollment = (userId: string, courseId: string) => ({
    type: "removeEnrollment",
    userId,
    courseId,
  });
  