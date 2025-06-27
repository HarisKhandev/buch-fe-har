/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";
import IMAGES from "../../../assets/images";
import CustomTable, {
  TableProfileInfo,
} from "../../../assets/genericComponents/CustomTable";
import QuickRegisterPatientModal from "./QuickRegisterPatientModal";
import { PATH } from "../../../config";
import AmbulanceScheduledModal from "./AmbulanceScheduledModal";
import CustomTableFilters from "../../../assets/genericComponents/CustomTableFilters";
import CustomTableStatuses from "../../../assets/genericComponents/CustomTableStatuses";

function AmbulanceSchedulingListing() {
  const tableStatuses = [
    {
      value: "1",
      label: "Pending",
    },
    {
      value: "2",
      label: "Confirmed",
    },
    {
      value: "3",
      label: "On-Way",
    },
  ];

  const ambulanceListData = [
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },

      createdTime: "05:36 pm",
      urgencylevel: "High",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "Pending",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "Medium",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "Confirmed",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "Low",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "On-Way",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "High",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "On-Way",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "High",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "Confirmed",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "High",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "Pending",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "High",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "Pending",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "High",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "Pending",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "High",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "Pending",
    },
    {
      driverDetail: {
        name: "Esther Howard",
        subName: "ABC 5959",
        img: IMAGES.AMBULANCE_ICON,
      },
      patientDetail: {
        name: "Hira Khan",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      createdTime: "05:36 pm",
      urgencylevel: "High",
      pickupPoint: "3517 W. Gray St. Utica",
      destinationPoint: "Butch Hospital",
      status: "Pending",
    },
  ];

  const [page, setPage] = useState(0);
  const [patientRegister, setPatientRegister] = useState(false);
  const [ambulanceScheduleModal, setAmbulanceScheduleModal] = useState(false);
  const [ambulanceScheduleRowData, setAmbulanceScheduleRowData] = useState();
  const [status, setStatus] = useState(ambulanceListData);

  const handleStatusChange = (newStatus, rowIndex) => {
    const updatedStatusList = [...status];
    updatedStatusList[rowIndex].status = newStatus;
    setStatus(updatedStatusList);
  };

  const columns = [
    {
      accessorKey: "driverDetail",
      header: "Driver Detail",
      Cell: ({ cell }) => (
        <TableProfileInfo
          name={cell?.row?.original?.driverDetail?.name}
          subName={cell?.row?.original?.driverDetail?.subName}
          img={cell?.row?.original?.driverDetail?.img}
        />
      ),
    },
    {
      accessorKey: "patientDetail",
      header: "Patient Detail",
      Cell: ({ cell }) => (
        <TableProfileInfo
          name={cell?.row?.original?.patientDetail?.name}
          subName={cell?.row?.original?.patientDetail?.subName}
          img={cell?.row?.original?.patientDetail?.img}
        />
      ),
    },
    {
      accessorKey: "createdTime",
      header: "Created Time",
    },
    {
      accessorKey: "urgencylevel",
      header: "Urgency level",
    },
    {
      accessorKey: "pickupPoint",
      header: "Pickup Point",
    },
    {
      accessorKey: "destinationPoint",
      header: "Destination Point",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell, row }) => (
        <CustomTableStatuses
          index={row?.index}
          statusName={cell?.row?.original?.status}
          listData={tableStatuses}
          handleStatusChange={handleStatusChange}
        />
      ),
    },
  ];

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
      name: "Quick Register Patient",
      path: "",
      align: "right",
      onClick: () => {
        setPatientRegister(true);
      },
    },
    {
      name: "Create New Schedule ",
      path: PATH.CREATE_AMBULANCE_SCHEDULING,
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
      filter: "Date Range",
      state: "",
      setState: "",
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
          data={status}
          pageChange={pageChange}
          page={page}
          setPage={setPage}
          enableActions={false}
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => {
              setAmbulanceScheduleRowData(row);
              setAmbulanceScheduleModal(true);
            },
            sx: {
              cursor: "pointer",
            },
          })}
        />
      </div>
      {patientRegister && (
        <QuickRegisterPatientModal
          show={patientRegister}
          onHide={() => setPatientRegister(!patientRegister)}
        />
      )}
      {ambulanceScheduleModal && (
        <AmbulanceScheduledModal
          show={ambulanceScheduleModal}
          onHide={() => setAmbulanceScheduleModal(!ambulanceScheduleModal)}
          ambulanceScheduleRowData={ambulanceScheduleRowData}
        />
      )}
    </>
  );
}

export default AmbulanceSchedulingListing;
