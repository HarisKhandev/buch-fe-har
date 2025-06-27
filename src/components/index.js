import React from "react";

const NoPage = React.lazy(() => import("./NoPageFound"));
const SignIn = React.lazy(() => import("./SignIn"));
const LandingPage = React.lazy(() => import("./LandingPage"));

// Scheduling

const DoctorSchedulingListing = React.lazy(() =>
  import("./Scheduling/DoctorScheduling")
);
const CreateDoctorScheduling = React.lazy(() =>
  import("./Scheduling/DoctorScheduling/CreateDoctorScheduling")
);
const AppointmentScheduling = React.lazy(() =>
  import("./Scheduling/AppointmentScheduling")
);
const AdmissionRequestListing = React.lazy(() =>
  import("./Scheduling/AdmissionRequest")
);
const CreateAdmissionRequest = React.lazy(() =>
  import("./Scheduling/AdmissionRequest/CreateAdmissionRequest")
);
const AmbulanceSchedulingListing = React.lazy(() =>
  import("./Scheduling/AmbulanceScheduling")
);
const CreateAmbulanceScheduling = React.lazy(() =>
  import("./Scheduling/AmbulanceScheduling/CreateAmbulanceScheduling")
);
const LaboratoryHomeSample = React.lazy(() =>
  import("./Scheduling/LaboratoryHomeSample")
);
const CreateHomeSampleBooking = React.lazy(() =>
  import("./Scheduling/LaboratoryHomeSample/CreateHomeSampleBooking")
);

const WEB_PAGES = {
  NOPAGE: NoPage,
  SIGN_IN: SignIn,
  LANDING_PAGE: LandingPage,

  // SCHEDULING

  DOCTOR_SCHEDULING_LISTING: DoctorSchedulingListing,
  CREATE_DOCTOR_SCHEDULING: CreateDoctorScheduling,
  APPOINTMENT_SCHEDULING: AppointmentScheduling,
  ADMISSION_REQUEST_LISTING: AdmissionRequestListing,
  CREATE_ADMISSION_REQUEST: CreateAdmissionRequest,
  AMBULANCE_SCHEDULING_LISTING: AmbulanceSchedulingListing,
  CREATE_AMBULANCE_SCHEDULING: CreateAmbulanceScheduling,
  LABORATORY_HOME_SAMPLE: LaboratoryHomeSample,
  CREATE_HOME_SAMPLE_BOOKING: CreateHomeSampleBooking,
};

export default WEB_PAGES;
