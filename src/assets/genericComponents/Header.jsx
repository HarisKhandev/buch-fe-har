/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { ToastContainer } from "react-toastify";
import { Dropdown, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import SignOut from "./SignOut";
import IMAGES from "../images";
import { createImageFromInitials } from "../genericAction";
import { PATH } from "../../config";

function Header() {
  const location = useLocation();
  const dummyUser = JSON.parse(localStorage.getItem("buch_international_user"));

  document.body.style.backgroundColor = "#f5f5f5";
  return (
    <>
      <ToastContainer />
      <div className="header">
        {/* Logo  */}
        <div className="header-left">
          <Link to={PATH.DOCTOR_SCHEDULING_LISTING} className="logo">
            <img
              src={IMAGES.BUCH_LOGO_DASHBOARD}
              alt="Logo"
              className="img-fluid header-logo-set"
            />
          </Link>
          <div className="PageName">
            <span id="toggle_btn">
              <FaBars />
            </span>
            {(location.pathname === PATH.DOCTOR_SCHEDULING_LISTING ||
              location.pathname === PATH.CREATE_DOCTOR_SCHEDULING) && (
              <h3>Doctor Scheduling</h3>
            )}
            {location.pathname === PATH.APPOINTMENT_SCHEDULING && (
              <h3>Appointment Scheduling</h3>
            )}
            {(location.pathname === PATH.AMBULANCE_SCHEDULING_LISTING ||
              location.pathname === PATH.CREATE_AMBULANCE_SCHEDULING) && (
              <h3>Ambulance Scheduling</h3>
            )}
            {(location.pathname === PATH.ADMISSION_REQUEST_LISTING ||
              location.pathname === PATH.CREATE_ADMISSION_REQUEST) && (
              <h3>Admission Request</h3>
            )}
            {(location.pathname === PATH.LABORATORY_HOME_SAMPLE ||
              location.pathname === PATH.CREATE_HOME_SAMPLE_BOOKING) && (
              <h3>Home Sample Collection Booking</h3>
            )}
          </div>
        </div>
        {/* /Logo */}
        {/* Mobile Menu Toggle */}
        <span className="mobile_btn" id="mobile_btn">
          <FaBars />
        </span>
        {/* /Mobile Menu Toggle */}
        <ul className="nav user-menu">
          <li className="nav-item search-pin-field">
            <Form.Control type="text" placeholder="PIN" name="pin" />
            <FiSearch />
          </li>
          <li className="nav-item setting-icon">
            <IoSettingsOutline />
          </li>
          <li className="nav-item dropdown has-arrow">
            <Dropdown className="user-dropdown h-100">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="user_dropdown"
              >
                <span className="user-img mt-0">
                  {dummyUser ? (
                    <img
                      className="rounded-circle"
                      src={IMAGES.PROFILE_LOGO}
                      width="31"
                      alt={dummyUser?.userType}
                    />
                  ) : (
                    <img
                      src={createImageFromInitials(
                        31,
                        dummyUser?.userType,
                        "#525E34"
                      )}
                      alt="image"
                      className="rounded-circle"
                    />
                  )}
                  <p className="m-0">Bretty</p>
                </span>
              </Dropdown.Toggle>
              {ReactDOM.createPortal(
                <Dropdown.Menu className="profile-dropmenu">
                  <Dropdown.Item className="d-block px-0">
                    <SignOut />
                  </Dropdown.Item>
                </Dropdown.Menu>,
                document.body
              )}
            </Dropdown>
          </li>
        </ul>
        <Tooltip id="my-tooltip" />
      </div>
    </>
  );
}

export default Header;
