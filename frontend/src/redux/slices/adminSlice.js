import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workerDetails: localStorage.getItem("workerDetails")
    ? JSON.parse(localStorage.getItem("workerDetails"))
    : "",
};

const adminSlice = createSlice({
  name: "workerDetails",
  initialState,
  reducers: {
    setWorkerDetails: (state, action) => {
      state.workerDetails = action.payload;
      localStorage.setItem(
        "workerDetails",
        JSON.stringify(state.workerDetails)
      );
    },
  },
});

export const { setWorkerDetails } = adminSlice.actions;
export default adminSlice.reducer;
