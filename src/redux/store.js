import { configureStore } from "@reduxjs/toolkit";
import semesterReducer from "./slices/semester";

const store = configureStore({
  reducer: {
    semester: semesterReducer,
  },
});

export default store;
