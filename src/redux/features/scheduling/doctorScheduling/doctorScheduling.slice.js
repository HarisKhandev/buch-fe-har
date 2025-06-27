import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import doctorSchedule from "./doctorScheduling.service";

const initialState = {
  allDoctorSchedule: [],
  saveDoctorSchedule: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Update Doctor Schedule
export const createUpdateDoctorSchedule = createAsyncThunk(
  "doctorSchedule/createUpdateDoctorSchedule",
  async (finalData, thunkAPI) => {
    try {
      return await doctorSchedule.createUpdateDoctorSchedule(finalData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // Notification(message, false);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get All Doctor Schedule
export const getAllDoctorSchedule = createAsyncThunk(
  "doctorSchedule/getAllDoctorSchedule",
  async (finalData, thunkAPI) => {
    try {
      return await doctorSchedule.getAllDoctorSchedule(finalData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const doctorScheduleSlice = createSlice({
  name: "doctorSchedule",
  initialState,
  reducers: {
    clearData: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUpdateDoctorSchedule.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(createUpdateDoctorSchedule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.saveDoctorSchedule = action.payload;
      })
      .addCase(createUpdateDoctorSchedule.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      .addCase(getAllDoctorSchedule.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(getAllDoctorSchedule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allDoctorSchedule = action.payload;
      })
      .addCase(getAllDoctorSchedule.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearData } = doctorScheduleSlice.actions;

export default doctorScheduleSlice.reducer;
