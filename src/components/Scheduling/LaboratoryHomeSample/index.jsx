/* eslint-disable react/prop-types */
import { useState } from "react";
import IMAGES from "../../../assets/images";
import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";
import CustomTable, {
  TableProfileInfo,
} from "../../../assets/genericComponents/CustomTable";
import { PATH } from "../../../config";
import CustomTableFilters from "../../../assets/genericComponents/CustomTableFilters";
import { PopOverText } from "../../../assets/genericComponents/CustomPopoverText";

function LaboratoryHomeSample() {
  const [page, setPage] = useState(0);

  const navigationListData = [
    {
      name: "Create Patient",
      path: "",
      align: "left",
    },
    {
      name: "Create Invoice",
      path: "",
      align: "left",
    },
    {
      name: "Create New Booking ",
      path: PATH.CREATE_HOME_SAMPLE_BOOKING,
      align: "right",
    },
  ];

  const filtersListData = [
    {
      filter: "Search",
      state: "",
      setState: "",
    },
    {
      filter: "Select Filter",
      name: "Lab Test",
      dropdownList: [
        { label: "Test 1", value: 1, key: "Test 1" },
        { label: "Test 2", value: 2, key: "Test 2" },
        { label: "Test 3", value: 3, key: "Test 3" },
      ],
      state: "",
      setState: "",
    },
    {
      filter: "Date And Time",
      state: "",
      setState: "",
    },
    {
      filter: "Select Filter",
      name: "Status",
      dropdownList: [
        { label: "Status 1", value: 1, key: "Status 1" },
        { label: "Status 2", value: 2, key: "Status 2" },
        { label: "Status 3", value: 3, key: "Status 3" },
      ],
      state: "",
      setState: "",
    },
  ];

  const columns = [
    {
      accessorKey: "patientDetail",
      header: "Patient Details",
      Cell: ({ cell }) => (
        <TableProfileInfo
          name={cell?.row?.original?.patientDetail?.name}
          subName={cell?.row?.original?.patientDetail?.subName}
          img={cell?.row?.original?.patientDetail?.img}
        />
      ),
    },
    {
      accessorKey: "labtechnician",
      header: "Lab Technician",
    },
    {
      accessorKey: "labtest",
      header: "Lab Test",
      Cell: ({ cell }) => <PopOverText text={cell?.row?.original?.labtest} />,
    },
    {
      accessorKey: "datetime",
      header: "Date & Time",
    },
    {
      accessorKey: "department",
      header: "Department",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => (
        <div
          className={`table-status ${
            (cell?.row?.original?.status === "Pending" &&
              "pending-status-color pending-status-text") ||
            (cell?.row?.original?.status === "Accepted" &&
              "accepted-status-color accepted-status-text") ||
            (cell?.row?.original?.status === "Received" &&
              "received-status-color received-status-text") ||
            (cell?.row?.original?.status === "Delivered" &&
              "delivered-status-color delivered-status-text") ||
            (cell?.row?.original?.status === "Completed" &&
              "completed-status-color completed-status-text")
          }`}
        >
          {cell?.row?.original?.status}
        </div>
      ),
    },
  ];

  const data = [
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Pending",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Devendra Sharma",
      labtest: ["Blood test", "Urine test", "Sugar test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Accepted",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Received",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Devendra Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Delivered",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Completed",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Delivered",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Received",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Pending",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Received",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Pending",
    },
    {
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      labtechnician: "Akash Sharma",
      labtest: ["Blood test"],
      datetime: "15 May 2020 9:30 am",
      department: "OPD",
      location: "3517 W. Gray St. Utica",
      status: "Delivered",
    },
  ];

  const pageChange = (pageNumber) => {
    setPage(pageNumber - 1);
  };

  return (
    <>
      <CustomNavigationHeader listData={navigationListData} />
      <div className="custom-table">
        <CustomTableFilters listData={filtersListData} />
        <CustomTable
          columns={columns}
          data={data}
          pageChange={pageChange}
          page={page}
          setPage={setPage}
          enableActions={false}
        />
      </div>
    </>
  );
}

export default LaboratoryHomeSample;
