/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import { useState } from "react";
// import { Col, Row } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";
import IMAGES from "../../../assets/images";
import CustomTable, {
  TableProfileInfo,
} from "../../../assets/genericComponents/CustomTable";
import DoctorProfileSidebar from "./DoctorProfileSidebar";
import { PATH } from "../../../config";
import CustomTableFilters from "../../../assets/genericComponents/CustomTableFilters";

function DoctorSchedulingListing() {
  const [page, setPage] = useState(0);
  const [profileSidebar, setProfileSidebar] = useState(false);
  const [profileSidebarDetailData, setProfileSidebarDetailData] =
    useState(false);

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
      name: "Create New Schedule",
      path: PATH.CREATE_DOCTOR_SCHEDULING,
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

  const columns = [
    {
      accessorKey: "doctors",
      header: "Doctors",
      Cell: ({ cell }) => (
        <TableProfileInfo
          name={cell?.row?.original?.doctors?.name}
          img={cell?.row?.original?.doctors?.img}
          doctorProfile
        />
      ),
    },
    {
      accessorKey: "sessions",
      header: "Sessions",
    },
    {
      accessorKey: "startDate",
      header: "Start Date",
    },
    {
      accessorKey: "endDate",
      header: "End Date",
      Cell: ({ cell }) => (
        <div>
          {cell?.row?.original?.unlimitedEndDate ? (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <Checkbox
                sx={{
                  color: "#B3D05C",
                  "&.Mui-checked": {
                    color: "#B3D05C",
                  },
                  padding: 0,
                  borderRadius: "2px",
                  cursor: "unset",
                }}
                defaultChecked
                disabled
              />
              <span className="end-date-span">Unlimited date</span>
            </div>
          ) : (
            cell?.row?.original?.endDate
          )}
        </div>
      ),
    },
    {
      accessorKey: "slots",
      header: "Slots",
    },
  ];

  const data = [
    {
      doctors: {
        name: "Doctor 1",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 1",
      startDate: "2023-08-11",
      endDate: "2023-08-12",
      unlimitedEndDate: true,
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 2",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 2",
      startDate: "2023-08-13",
      endDate: "2023-08-14",
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 3",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 3",
      startDate: "2023-08-15",
      endDate: "2023-08-16",
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 4",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 4",
      startDate: "2023-08-17",
      endDate: "2023-08-18",
      unlimitedEndDate: true,
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 5",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 5",
      startDate: "2023-08-19",
      endDate: "2023-08-20",
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 6",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 6",
      startDate: "2023-08-21",
      endDate: "2023-08-22",
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 7",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 7",
      startDate: "2023-08-23",
      endDate: "2023-08-24",
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 8",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 8",
      startDate: "2023-08-25",
      endDate: "2023-08-26",
      unlimitedEndDate: true,
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 9",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 9",
      startDate: "2023-08-27",
      endDate: "2023-08-28",
      slots: "30 min",
    },
    {
      doctors: {
        name: "Doctor 10",
        img: IMAGES.PROFILE_LOGO,
      },
      sessions: "Session 10",
      startDate: "2023-08-29",
      endDate: "2023-08-30",
      slots: "30 min",
    },
  ];

  const pageChange = (pageNumber) => {
    setPage(pageNumber - 1);
  };

  return (
    <>
      <CustomNavigationHeader listData={navigationListData} />
      <div className={`${profileSidebar ? "custom-table-width" : ""}`}>
        <div className="custom-table">
          <CustomTableFilters listData={filtersListData} />
          <CustomTable
            columns={columns}
            data={data}
            pageChange={pageChange}
            page={page}
            setPage={setPage}
            enableActions
            muiTableBodyRowProps={({ row }) => ({
              onClick: () => {
                setProfileSidebarDetailData(row);
                setProfileSidebar(true);
              },
              sx: {
                cursor: "pointer",
              },
            })}
          />
        </div>
        {profileSidebar && (
          <DoctorProfileSidebar
            profileSidebarDetailData={profileSidebarDetailData}
            setProfileSidebar={setProfileSidebar}
          />
        )}
      </div>
    </>
  );
}

export default DoctorSchedulingListing;
