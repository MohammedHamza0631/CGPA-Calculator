import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  semesters: [{ sgpa: "", credits: "", cgpa: "" }],
};

const semesterSlice = createSlice({
  name: "semester",
  initialState,
  reducers: {
    addSemester: (state) => {
      state.semesters.push({ sgpa: "", credits: "", cgpa: "" });
    },

    setSemesters: (state, action) => {
      state.semesters = action.payload;
    },
  },
});

export const { addSemester, setSemesters } = semesterSlice.actions;
export default semesterSlice.reducer;
