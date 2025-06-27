const ERROR = {
  SYSTEM_ERROR: "System error. Please try again later!",
};

const PATH = {
  NOPAGE: "*",
  SIGN_IN: "/",
  LANDING_PAGE: "/landing-page",

  // SCHEDULING
  DOCTOR_SCHEDULING_LISTING: "/scheduling/doctor-scheduling",
  CREATE_DOCTOR_SCHEDULING: "/scheduling/create-doctor-scheduling",
  APPOINTMENT_SCHEDULING: "/scheduling/appointment-scheduling",
  AMBULANCE_SCHEDULING_LISTING: "/scheduling/ambulance-scheduling",
  CREATE_AMBULANCE_SCHEDULING: "/scheduling/create-ambulance-scheduling",
  ADMISSION_REQUEST_LISTING: "/scheduling/admission-request",
  CREATE_ADMISSION_REQUEST: "/scheduling/create-admission-request",
  LABORATORY_HOME_SAMPLE: "/scheduling/laboratory-home-sample",
  CREATE_HOME_SAMPLE_BOOKING: "/scheduling/create-home-sample-booking",
};

const APP_SETTINGS = {
  API_PATH: {
    ACCOUNT: {
      getToken: "Account/GetToken",
    },
  },
};

const AZURE_BLOB_BASE_URL = "blob_url_here";

const ROLE = {
  ADMIN1: 1,
  ADMIN2: 2,
  ADMIN3: 3,
};

const TOASTER_STYLING_VALUES = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const PAGINATION_PAGE_SIZE = 10;

export {
  ERROR,
  PATH,
  APP_SETTINGS,
  ROLE,
  TOASTER_STYLING_VALUES,
  AZURE_BLOB_BASE_URL,
  PAGINATION_PAGE_SIZE,
};
