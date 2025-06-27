import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("buch_international_user"));

const initialState = {
  user: user || null,
  userSave: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      return await authService.login(payload);
    } catch (error) {
      callBackMessage("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// SignUp user
export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ finalData, moveToNext, callBackMessage }, thunkAPI) => {
    try {
      const response = await authService.signUp(finalData);
      if (response.succeeded === true) {
        if (callBackMessage) {
          callBackMessage("success", response.message);
        }
        if (moveToNext) {
          moveToNext();
        }
      } else {
        callBackMessage("error", response.message);
      }
      return response;
    } catch (error) {
      callBackMessage("error", error.message);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })

      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userSave = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
