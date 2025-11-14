import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  modules: [],          // ⭐ GREEN: start empty (server will populate)
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    // ⭐ GREEN — replace modules with server data
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, { payload: module }) => {
      const newModule: any = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as any;
    },

    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId
      );
    },

    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },

    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});

// ⭐ Export GREEN action
export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions;

export default modulesSlice.reducer;
