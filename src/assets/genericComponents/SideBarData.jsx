import { v4 as uuidv4 } from "uuid";
import { TbCalendarTime, TbClipboardList } from "react-icons/tb";
import { PATH } from "../../config";

const SidebarData = [
  {
    id: uuidv4(),
    title: "Scheduling",
    icon: <TbCalendarTime />,
    path: "",
    pathList: [],
    subNav: [
      {
        id: uuidv4(),
        title: "Doctor Scheduling",
        path: PATH.DOCTOR_SCHEDULING_LISTING,
        pathList: [
          PATH.DOCTOR_SCHEDULING_LISTING,
          PATH.CREATE_DOCTOR_SCHEDULING,
        ],
      },
      {
        id: uuidv4(),
        title: "Appointment Scheduling",
        path: PATH.APPOINTMENT_SCHEDULING,
        pathList: [PATH.APPOINTMENT_SCHEDULING],
      },
      {
        id: uuidv4(),
        title: "Theatre Scheduling",
        path: "",
        pathList: [],
      },
      {
        id: uuidv4(),
        title: "Appointment List",
        path: "",
        pathList: [],
      },
      {
        id: uuidv4(),
        title: "Admission Request",
        path: PATH.ADMISSION_REQUEST_LISTING,
        pathList: [
          PATH.ADMISSION_REQUEST_LISTING,
          PATH.CREATE_ADMISSION_REQUEST
        ],
      },
      {
        id: uuidv4(),
        title: "Ambulance Scheduling",
        path: PATH.AMBULANCE_SCHEDULING_LISTING,
        pathList: [
          PATH.AMBULANCE_SCHEDULING_LISTING,
          PATH.CREATE_AMBULANCE_SCHEDULING,
        ],
      },
      {
        id: uuidv4(),
        title: "Patient Check-In & Queue Management",
        path: "",
        pathList: [],
      },
      {
        id: uuidv4(),
        title: "Laboratory Home Sample Collection",
        path: PATH.LABORATORY_HOME_SAMPLE,
        pathList: [
          PATH.LABORATORY_HOME_SAMPLE,
          PATH.CREATE_HOME_SAMPLE_BOOKING,
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "Patient Management",
    path: "",
    subNav: [],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "Billing",
    path: "",
    subNav: [],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "E-Medical Records",
    path: "",
    subNav: [],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "Laboratory",
    path: "",
    subNav: [],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "Radiology",
    path: "",
    subNav: [],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "Purchase & Inventory",
    path: "",
    subNav: [],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "HR & Payroll",
    path: "",
    subNav: [],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "Fixed Asset",
    path: "",
    subNav: [],
  },
  {
    id: uuidv4(),
    icon: <TbClipboardList />,
    title: "Masters",
    path: "",
    subNav: [],
  },
];

export default SidebarData;
