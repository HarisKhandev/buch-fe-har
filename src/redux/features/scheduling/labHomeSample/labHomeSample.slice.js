import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import labHomeSampling from "./labHomeSample.service";

const initialState = {
  getAllLabSampleCollection: [],
  createUpdateLabSampleCollection: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  getAllLabSampleCollectionisLoading: false,
  createUpdateLabSampleCollectionisLoading: false,
  message: "",
};

// Create Update Doctor Schedule
export const createUpdateLabSampleCollectionAction = createAsyncThunk(
  "labSample/createUpdateLabSampleCollectionAction",
  async (finalData, thunkAPI) => {
    try {
      return await labHomeSampling.createUpdateLabSampleCollection(finalData);
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
export const getAllLabSampleCollectionAction = createAsyncThunk(
  "labSample/getAllLabSampleCollectionAction",
  async (finalData, thunkAPI) => {
    try {
      return await labHomeSampling.getAllLabSampleCollection(finalData);
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

export const labHomeSamplingSlice = createSlice({
  name: "labSample",
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
      .addCase(createUpdateLabSampleCollectionAction.pending, (state) => {
        state.createUpdateLabSampleCollectionisLoading = true;
        state.message = "";
      })
      .addCase(
        createUpdateLabSampleCollectionAction.fulfilled,
        (state, action) => {
          state.createUpdateLabSampleCollectionisLoading = false;
          state.isSuccess = true;
          state.createUpdateLabSampleCollection = action.payload;
        }
      )
      .addCase(
        createUpdateLabSampleCollectionAction.rejected,
        (state, action) => {
          state.createUpdateLabSampleCollectionisLoading = false;
          state.isError = true;
          state.message = action.payload.message;
        }
      )

      .addCase(getAllLabSampleCollectionAction.pending, (state) => {
        state.getAllLabSampleCollectionisLoading = true;
        state.message = "";
      })
      .addCase(getAllLabSampleCollectionAction.fulfilled, (state, action) => {
        state.getAllLabSampleCollectionisLoading = false;
        state.isSuccess = true;
        state.getAllLabSampleCollection = action.payload;
      })
      .addCase(getAllLabSampleCollectionAction.rejected, (state, action) => {
        state.getAllLabSampleCollectionisLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearData } = labHomeSamplingSlice.actions;

export default labHomeSamplingSlice.reducer;
