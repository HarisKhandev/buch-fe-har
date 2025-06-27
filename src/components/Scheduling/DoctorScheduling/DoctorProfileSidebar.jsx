// eslint-disable no-debugger
import { Button, Col, Row } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { BsFillCalendarFill } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { Box, IconButton, Tooltip } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PropTypes from "prop-types";
import { BiTime } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { useState } from "react";

function DoctorProfileSidebar(props) {
  const { profileSidebarDetailData, setProfileSidebar } = props;
  const [hideEveningData, setHideEveningData] = useState(true);
  const [hideMorningData, setHideMorningData] = useState(true);
  const morningSlotTimeData = [
    {
      slotId: 1,
      timeSlot: "08:00 AM",
      isSlot: "Available",
    },
    {
      slotId: 2,
      timeSlot: "08:30 AM",
      isSlot: "Available",
    },
    {
      slotId: 3,
      timeSlot: "09:00 AM",
      isSlot: "Available",
    },
    {
      slotId: 4,
      timeSlot: "09:30 AM",
      isSlot: "Available",
    },
    {
      slotId: 5,
      timeSlot: "10:00 AM",
      isSlot: "Available",
    },
    {
      slotId: 6,
      timeSlot: "10:30 AM",
      isSlot: "Available",
    },
    {
      slotId: 7,
      timeSlot: "11:00 AM",
      isSlot: "Available",
    },
    {
      slotId: 8,
      timeSlot: "11:30 AM",
      isSlot: "Booked",
    },
    {
      slotId: 9,
      timeSlot: "11:30 AM",
      isSlot: "Available",
    },
  ];
  const morningWorkingDaysData = [
    {
      slotId: 1,
      days: "Monday",
    },
    {
      slotId: 2,
      days: "Wednesday",
    },
    {
      slotId: 3,
      days: "Thursday",
    },
    {
      slotId: 4,
      days: "Friday",
    },
  ];
  const eveningSlotTimeData = [
    {
      slotId: 1,
      timeSlot: "02:00 PM",
      isSlot: "Available",
    },
    {
      slotId: 2,
      timeSlot: "02:30 PM",
      isSlot: "Available",
    },
    {
      slotId: 3,
      timeSlot: "03:00 PM",
      isSlot: "Booked",
    },
    {
      slotId: 4,
      timeSlot: "03:30 PM",
      isSlot: "Booked",
    },
    {
      slotId: 5,
      timeSlot: "04:00 PM",
      isSlot: "Available",
    },
  ];
  const eveningWorkingDaysData = [
    {
      slotId: 1,
      days: "Tuesday",
    },
    {
      slotId: 2,
      days: "Wednesday",
    },
    {
      slotId: 4,
      days: "Friday",
    },
  ];
  const hideEveningFunc = (data) => {
    setHideEveningData(data);
  };
  const hideMorningFunc = (data) => {
    setHideMorningData(data);
  };
  return (
    <div className="doctor-profile-sidebar">
      <div className="sidebar-header p-3">
        <div
          className="d-flex align-items-center justify-content-end"
        >
          <RxCross2 size={20} color="#FFFFFF" className="cursor-pointer" onClick={() => setProfileSidebar(false)}/>
        </div>
        <div className="doctor-column-set">
          <img
            src={profileSidebarDetailData?.original?.doctors?.img}
            alt={profileSidebarDetailData?.original?.doctors?.name}
            className="img-fluid"
          />
          <div>
            <div className="doctor-column-name">
              {profileSidebarDetailData?.original?.doctors?.name}
            </div>
            <div className="doctor-column-code">
              {/* {profileSidebarDetailData?.original?.doctors?.name} */}
              BIH100166
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <div className="mx-2">
            <EditIcon className="profile-sidebar-icon cursor-pointer" />
          </div>
          <div>
            <DeleteForeverIcon className="profile-sidebar-icon cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="sidebar-body p-3">
        <div className="slot-data">
          <Row>
            <Col xs={6}>
              <div className="d-flex">
                <div>
                  <BsFillCalendarFill color="#B3D05C" />
                </div>
                <div className="d-flex flex-column mx-2">
                  <span className="slot-data-title mb-2 mt-1">Start Date</span>
                  <span className="slot-data-descrioption mb-0">
                    {profileSidebarDetailData?.original?.startDate}
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-flex">
                <div>
                  <BsFillCalendarFill color="#B3D05C" />
                </div>
                <div className="d-flex flex-column mx-2">
                  <span className="slot-data-title mb-2 mt-1">End Date</span>
                  <span className="slot-data-descrioption mb-0">
                    {profileSidebarDetailData?.original?.unlimitedEndDate ? "Unlimited Date" : profileSidebarDetailData?.original?.endDate}
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={6} className="mt-3">
              <div className="d-flex">
                <div>
                  <BsFillCalendarFill color="#B3D05C" />
                </div>
                <div className="d-flex flex-column mx-2">
                  <span className="slot-data-title mb-2 mt-1">Session</span>
                  <span className="slot-data-descrioption mb-0">
                    {profileSidebarDetailData?.original?.sessions}
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={6} className="mt-3">
              <div className="d-flex">
                <div>
                  <MdOutlineTimer color="#B3D05C" size={20} />
                </div>
                <div className="d-flex flex-column mx-1">
                  <span className="slot-data-title mb-2 mt-1">Slot</span>
                  <span className="slot-data-descrioption mb-0">
                    {profileSidebarDetailData?.original?.slots}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr className="hr" />
        <div className="morning-time-slot">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="time-slot-main-title">
                Morning
                <span className="time-slot-main-subtitle"> (Telehealth)</span>
              </span>
            </div>
            <div>
              {hideMorningData ? (
                <FiChevronUp
                  size={23}
                  onClick={() => hideMorningFunc(false)}
                  className="cursor-pointer"
                />
              ) : (
                <FiChevronDown
                  size={23}
                  onClick={() => hideMorningFunc(true)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          {hideMorningData && (
            <>
              <div className="my-2">
                <div className="main-slot-time">
                  <BiTime size={20} color="#3C3A3B" />{" "}
                  <span className="time-slot-heading">Time Slots</span>
                </div>
                <div className="flex-slot-data">
                  {morningSlotTimeData?.map((time) => (
                    <Button
                      key={time?.slotId}
                      className={`${
                        time?.isSlot === "Available" ? "avaiable" : "booked"
                      } mr-2`}
                    >
                      <span
                        className={`${
                          time?.isSlot === "Available"
                            ? "time-slot-text-avaiable"
                            : "time-slot-text-booked"
                        }`}
                      >
                        {time?.timeSlot}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="my-3">
                <div className="main-slot-time">
                  <FaCalendarDays size={20} color="#3C3A3B" />{" "}
                  <span className="time-slot-heading">Working Days</span>
                </div>
                <div className="flex-slot-data">
                  {morningWorkingDaysData?.map((time) => (
                    <span className="working-days">{time?.days}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <hr className="hr" />
        <div className="morning-time-slot">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="time-slot-main-title">
                Evening
                <span className="time-slot-main-subtitle">
                  {" "}
                  (Physical Health)
                </span>
              </span>
            </div>
            <div>
              {hideEveningData ? (
                <FiChevronUp
                  size={23}
                  onClick={() => hideEveningFunc(false)}
                  className="cursor-pointer"
                />
              ) : (
                <FiChevronDown
                  size={23}
                  onClick={() => hideEveningFunc(true)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          {hideEveningData && (
            <>
              <div className="my-2">
                <div className="main-slot-time">
                  <BiTime size={20} color="#3C3A3B" />{" "}
                  <span className="time-slot-heading">Time Slots</span>
                </div>
                <div className="flex-slot-data">
                  {eveningSlotTimeData?.map((time) => (
                    <Button
                      key={time?.slotId}
                      className={`${
                        time?.isSlot === "Available" ? "avaiable" : "booked"
                      } mr-2`}
                    >
                      <span
                        className={`${
                          time?.isSlot === "Available"
                            ? "time-slot-text-avaiable"
                            : "time-slot-text-booked"
                        }`}
                      >
                        {time?.timeSlot}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="my-3">
                <div className="main-slot-time">
                  <FaCalendarDays size={20} color="#3C3A3B" />{" "}
                  <span className="time-slot-heading">Working Days</span>
                </div>
                <div className="flex-slot-data">
                  {eveningWorkingDaysData?.map((time) => (
                    <span className="working-days mr-2">{time?.days}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorProfileSidebar;
DoctorProfileSidebar.propTypes = {
  profileSidebarDetailData: PropTypes.object.isRequired,
  setProfileSidebar: PropTypes.object.isRequired,
};
