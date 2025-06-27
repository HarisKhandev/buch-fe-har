import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slice";
import doctorScheduleReducer from "../features/scheduling/doctorScheduling/doctorScheduling.service";
import labHomeSamplingReducer from "../features/scheduling/labHomeSample/labHomeSample.service";

const store = configureStore({
  reducer: {
    auth: authReducer,
    doctorSchedule: doctorScheduleReducer,
    labHomeSampling: labHomeSamplingReducer,
  },
});

export default store;
