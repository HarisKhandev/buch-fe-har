import { useState } from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import { BsFillCheckCircleFill, BsCircleFill } from "react-icons/bs";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";
import { FieldError } from "../../../assets/genericComponents/ErrorMessage";
import { getCurrentDate } from "../../../assets/genericAction";
import { PATH } from "../../../config";
import CustomToggleSwitch from "../../../assets/genericComponents/CustomToggleSwitch";
import CustomDoctorFilterDropdown from "../../../assets/genericComponents/CustomDoctorFilterDropdown";

function CreateDoctorScheduling() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  /** Form On Submit  */
  function onSubmit(data) {
    // eslint-disable-next-line no-debugger
    console.log("data", data);
  }

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
    // {
    //   name: "Create New Schedule",
    //   path: "",
    //   align: "right",
    // },
    {
      name: "Close",
      path: PATH.DOCTOR_SCHEDULING_LISTING,
      align: "right",
    },
    {
      name: "Save",
      path: "",
      align: "right",
      onClick: handleSubmit(onSubmit),
    },
    {
      name: "Save & New",
      path: "",
      align: "right",
    },
  ];

  /** Encounter Type Data */
  const [encounterTypeButton, setEncounterTypeButton] = useState(null);
  const encounterTypeData = [
    { label: "OP", value: 1, key: "op" },
    { label: "Radiology", value: 2, key: "radiology" },
    { label: "EHC", value: 3, key: "ehc" },
  ];
  const encounterTypeButtonClick = (buttonKey) => {
    setEncounterTypeButton(
      buttonKey === encounterTypeButton ? null : buttonKey
    );
    setValue("encounterType", buttonKey);
  };

  /** Multiple Working Days Data */
  const [multiWorkingDays, setMultiWorkingDays] = useState([]);
  const workingDaysData = [
    { label: "Monday", value: 1, key: "monday" },
    { label: "Tuesday", value: 2, key: "tuesday" },
    { label: "Wednesday", value: 3, key: "wednesday" },
    { label: "Thursday", value: 4, key: "thursday" },
    { label: "Friday", value: 5, key: "friday" },
    { label: "Saturday", value: 6, key: "saturday" },
    { label: "Sunday", value: 7, key: "sunday" },
  ];
  const handleMultiWorkingDaysButtonClick = (buttonValue) => {
    if (multiWorkingDays.includes(buttonValue)) {
      setMultiWorkingDays((prevValues) =>
        prevValues.filter((value) => value !== buttonValue)
      );
      setValue("workingDays", buttonValue);
    } else {
      setMultiWorkingDays((prevValues) => [...prevValues, buttonValue]);
    }
  };

  /** Visit Types Data */
  const [multiVisitTypes, setMultiVisitTypes] = useState([]);
  const visitTypesData = [
    { label: "Teleconsultation", value: 1, key: "teleconsultation" },
    { label: "Physical Consultation", value: 2, key: "physicalconsultation" },
    { label: "Procedure", value: 3, key: "procedure" },
    { label: "Package", value: 4, key: "package" },
  ];
  const handleVisitTypesButtonClick = (buttonValue) => {
    if (multiVisitTypes.includes(buttonValue)) {
      setMultiVisitTypes((prevValues) =>
        prevValues.filter((value) => value !== buttonValue)
      );
      setValue("visitTypes", buttonValue);
    } else {
      setMultiVisitTypes((prevValues) => [...prevValues, buttonValue]);
    }
  };

  /** Radiology Modality Data */
  const [modalityTypes, setModalityTypes] = useState([]);
  const modalityData = [
    { label: "CT Scan", value: 1, key: "ctscan" },
    { label: "MRI", value: 2, key: "mri" },
  ];
  const handleModalityButtonClick = (buttonValue) => {
    if (modalityTypes.includes(buttonValue)) {
      setModalityTypes((prevValues) =>
        prevValues.filter((value) => value !== buttonValue)
      );
      setValue("modalityTypes", buttonValue);
    } else {
      setModalityTypes((prevValues) => [...prevValues, buttonValue]);
    }
  };

  /** Session Start Date */
  const [startDate1, setStartDate1] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleStartDateChange1 = (e) => {
    const selectedDate = e.target.value;
    setStartDate1(selectedDate);
    // Calculate the minimum end date
    const minEndDate = new Date(selectedDate);
    minEndDate.setDate(minEndDate.getDate()); // Add one day to start date
    const minEndDateStr = minEndDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    // Update the end date if it's before the minimum end date
    if (endDate < minEndDateStr) {
      setEndDate(minEndDateStr);
    }
  };

  /** Morning Session Start Date */
  const [startMorningDate, setStartMorningDate] = useState("");
  const [endMorningDate, setEndMorningDate] = useState("");
  const handleStartMorningDate = (e) => {
    const selectedDate = e.target.value;
    setStartMorningDate(selectedDate);
    // Calculate the minimum end date
    const minEndDate = new Date(selectedDate);
    minEndDate.setDate(minEndDate.getDate()); // Add one day to start date
    const minEndDateStr = minEndDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    // Update the end date if it's before the minimum end date
    if (endMorningDate < minEndDateStr) {
      setEndMorningDate(minEndDateStr);
    }
  };

  const [dateToggle, setDateToggle] = useState();
  const handleSwitchChange = (checked) => {
    setDateToggle(checked.target.checked);
  };

  /** First Session CheckBox */
  const [sessionCheckbox, setSessionCheckbox] = useState();
  const handleSessionCheckboxChange = (checked) => {
    setSessionCheckbox(checked.target.checked);
  };

  /** Morning Session CheckBox */
  const [handleMorningCheckbox, setMorningSessionCheckbox] = useState();
  const handleMorningCheckboxChange = (checked) => {
    setMorningSessionCheckbox(checked.target.checked);
  };

  const dropdownData = [
    {
      code: "BIH1000002",
      name: "Dr. Usman Ali",
      department: "Cardiology",
      deptCode: "CRD01",
      category: "Hospital Staff",
    },
    {
      code: "BIH1000002",
      name: "Dr. Usman Ali",
      department: "Cardiology",
      deptCode: "CRD01",
      category: "Hospital Staff",
    },
    {
      code: "BIH1000002",
      name: "Dr. Usman Ali",
      department: "Cardiology",
      deptCode: "CRD01",
      category: "Hospital Staff",
    },
    {
      code: "BIH1000002",
      name: "Dr. Usman Ali",
      department: "Cardiology",
      deptCode: "CRD01",
      category: "Hospital Staff",
    },
    {
      code: "BIH1000002",
      name: "Dr. Usman Ali",
      department: "Cardiology",
      deptCode: "CRD01",
      category: "Hospital Staff",
    },
    {
      code: "BIH1000002",
      name: "Dr. Usman Ali",
      department: "Cardiology",
      deptCode: "CRD01",
      category: "Hospital Staff",
    },
  ];

  /** Custom Heading */
  const [customHeading, setCustomHeading] = useState("Morning");

  const handleDropdownSelect = (value) => {
    setCustomHeading(value);
  };
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor.name);
  };

  /** No Of Sessions Data */
  const [noOfSessionButton, setNoOFSessionButton] = useState(null);
  const noOfSessionData = [
    { label: "1", value: 1, key: "1" },
    { label: "2", value: 2, key: "2" },
    { label: "3", value: 3, key: "3" },
    { label: "4", value: 3, key: "4" },
  ];
  const noOfSessionButtonClick = (buttonKey) => {
    setNoOFSessionButton(buttonKey === noOfSessionButton ? null : buttonKey);
    setValue("noOfSession", buttonKey);
    if (buttonKey === noOfSessionButton) {
      setDateToggle(false);
    }
  };

  return (
    <div className="create-doctor-schedule">
      <CustomNavigationHeader listData={navigationListData} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={12} sm={6} md={4} lg={4} xl={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Encounter Type</Form.Label>
                  <div className="single-select-btn">
                    {encounterTypeData.map((button) => (
                      <button
                        key={button.key}
                        type="button"
                        className={`
                    ${encounterTypeButton === button.key ? "selected-btn" : ""}
                    ${
                      errors?.encounterType &&
                      encounterTypeButton === null &&
                      "error-required-btn"
                    }
                  `}
                        onClick={() => encounterTypeButtonClick(button.key)}
                        {...register("encounterType", {
                          required: true,
                        })}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                  {errors?.encounterType && encounterTypeButton === null && (
                    <FieldError message="Select an Encounter Type" />
                  )}
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={2}>
                <div className="dropdown-doctor">
                  <Form.Group className="mb-3">
                    <Form.Label>Doctor</Form.Label>
                    <CustomDoctorFilterDropdown
                      selectedDoctor={selectedDoctor}
                      dropdownData={dropdownData}
                      handleDoctorClick={handleDoctorClick}
                      register={register}
                      errors={errors}
                    />
                    {errors?.doctor && selectedDoctor === null && (
                      <FieldError message="This Field is Required" />
                    )}
                  </Form.Group>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={2}>
                <Form.Group className="mb-3">
                  <Form.Label>No Of Session</Form.Label>
                  <div className="single-select-btn">
                    {noOfSessionData.map((button) => (
                      <button
                        key={button.key}
                        type="button"
                        className={`
                    ${noOfSessionButton === button.key ? "selected-btn" : ""}
                    ${
                      errors?.noOfSession &&
                      noOfSessionButton === null &&
                      "error-required-btn"
                    }
                  `}
                        onClick={() => noOfSessionButtonClick(button.key)}
                        {...register("noOfSession", {
                          required: true,
                        })}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                  {errors?.noOfSession && noOfSessionButton === null && (
                    <FieldError message="Select a Session" />
                  )}
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Slots</Form.Label>
                  <Form.Select
                    style={{
                      borderColor: errors?.slotSelect ? "#E93535" : "",
                    }}
                    {...register("slotSelect", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">15 Min</option>
                    <option value="2">30 Min</option>
                    <option value="3">45 Min</option>
                    <option value="3">60 Min</option>
                  </Form.Select>

                  {errors?.slotSelect && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("startDate", {
                      required: true,
                    })}
                    style={{
                      borderColor:
                        errors?.startDate && startDate1 === "" ? "#E93535" : "",
                    }}
                    min={getCurrentDate()}
                    value={startDate1}
                    onChange={handleStartDateChange1}
                  />
                  {errors?.startDate && startDate1 === "" && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} xl={2}>
                <Form.Group className="mb-3">
                  <Form.Label className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>End Date</div>
                      <div className="d-flex align-items-center justify-content-end">
                        <Checkbox
                          sx={{
                            color: "#B3B3B3",
                            "&.Mui-checked": {
                              color: "#B3D05C",
                            },
                            padding: 0,
                            borderRadius: "2px",
                          }}
                          onChange={handleSessionCheckboxChange}
                          checked={sessionCheckbox}
                        />
                        <span className="end-date-span">Unlimited date</span>
                      </div>
                    </div>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    {...register("endDate", {
                      required: true,
                    })}
                    style={{
                      borderColor:
                        errors?.endDate &&
                        endDate === "" &&
                        sessionCheckbox === false
                          ? "#E93535"
                          : "",
                    }}
                    value={sessionCheckbox ? "" : endDate}
                    disabled={!startDate1 || sessionCheckbox}
                    min={startDate1}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  {errors?.endDate &&
                    endDate === "" &&
                    sessionCheckbox === false && (
                      <FieldError message="This Field is Required" />
                    )}
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <CustomToggleSwitch
              handleSwitchChange={handleSwitchChange}
              dateToggle={dateToggle}
              noOfSessionButton={noOfSessionButton}
              label="The Start & End date will be same for all sessions."
            />
          </Card.Body>
        </Card>
        {noOfSessionButton && (
          <Card>
            <Card.Body>
              <Row>
                <div className="custom-heading-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="dropdown-placeholder">
                          {customHeading}
                        </div>
                        <div className="mx-3">
                          <TbTriangleInvertedFilled
                            size={10}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleDropdownSelect("Morning")}
                      >
                        Morning
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDropdownSelect("Afternoon")}
                      >
                        Afternoon
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDropdownSelect("Evening")}
                      >
                        Evening
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDropdownSelect("Night")}
                      >
                        Night
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Row>
              <hr />
              <Row>
                {dateToggle !== true && (
                  <>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                      <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                          type="date"
                          {...register("startMorningDate", {
                            required: true,
                          })}
                          style={{
                            borderColor:
                              errors?.startMorningDate &&
                              startMorningDate === ""
                                ? "#E93535"
                                : "",
                          }}
                          min={getCurrentDate()}
                          value={startMorningDate}
                          onChange={handleStartMorningDate}
                        />
                        {errors?.startMorningDate &&
                          startMorningDate === "" && (
                            <FieldError message="This Field is Required" />
                          )}
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                      <Form.Group className="mb-3">
                        <Form.Label className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>End Date</div>
                            <div className="d-flex align-items-center justify-content-end">
                              <Checkbox
                                sx={{
                                  color: "#B3B3B3",
                                  "&.Mui-checked": {
                                    color: "#B3D05C",
                                  },
                                  padding: 0,
                                  borderRadius: "2px",
                                }}
                                onChange={handleMorningCheckboxChange}
                                checked={handleMorningCheckbox}
                              />
                              <span className="end-date-span">
                                Unlimited date
                              </span>
                            </div>
                          </div>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          {...register("endMorningDate", {
                            required: true,
                          })}
                          style={{
                            borderColor:
                              errors?.endMorningDate &&
                              endMorningDate === "" &&
                              handleMorningCheckbox === false
                                ? "#E93535"
                                : "",
                          }}
                          value={handleMorningCheckbox ? "" : endMorningDate}
                          disabled={!startMorningDate || handleMorningCheckbox}
                          min={startMorningDate}
                          onChange={(e) => setEndMorningDate(e.target.value)}
                        />
                        {errors?.endMorningDate &&
                          endMorningDate === "" &&
                          handleMorningCheckbox === false && (
                            <FieldError message="This Field is Required" />
                          )}
                      </Form.Group>
                    </Col>
                  </>
                )}
                <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                  <Form.Group className="mb-3">
                    <Form.Label className="w-100">Start Time</Form.Label>
                    <Form.Control
                      type="time"
                      min="09:00"
                      max="12:00"
                      step="900"
                      {...register("startTime", {
                        required: true,
                      })}
                      style={{
                        borderColor: errors?.startTime ? "#E93535" : "",
                      }}
                    />
                    {errors?.startTime && (
                      <FieldError message="This Field is Required" />
                    )}
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                  <Form.Group className="mb-3">
                    <Form.Label className="w-100">End Time</Form.Label>
                    <Form.Control
                      type="time"
                      min="09:00"
                      max="12:00"
                      step="900"
                      {...register("endTime", {
                        required: true,
                      })}
                      style={{
                        borderColor: errors?.endTime ? "#E93535" : "",
                      }}
                    />
                    {errors?.endTime && (
                      <FieldError message="This Field is Required" />
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                {encounterTypeButton === "radiology" ? (
                  <Form.Group className="mb-3">
                    <Form.Label>Modality</Form.Label>
                    <div className="multi-select-btn">
                      {modalityData.map((button) => (
                        <button
                          key={button.key}
                          type="button"
                          className={`
                 ${modalityTypes.includes(button.value) ? "selected-btn" : ""}
                 ${
                   errors?.modalityTypes &&
                   modalityTypes.length === 0 &&
                   "error-required-btn"
                 }
               `}
                          onClick={() =>
                            handleModalityButtonClick(button.value)
                          }
                          {...register("modalityTypes", {
                            required: true,
                          })}
                        >
                          {modalityTypes.includes(button.value) ? (
                            <BsFillCheckCircleFill />
                          ) : (
                            <BsCircleFill />
                          )}
                          {button.label}
                        </button>
                      ))}
                    </div>
                    {errors?.modalityTypes && modalityTypes.length === 0 && (
                      <FieldError message="Select an Modality Type" />
                    )}
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3">
                    <Form.Label>Visit Types</Form.Label>
                    <div className="multi-select-btn">
                      {visitTypesData.map((button) => (
                        <button
                          key={button.key}
                          type="button"
                          className={`
                    ${
                      multiVisitTypes.includes(button.value)
                        ? "selected-btn"
                        : ""
                    }
                    ${
                      errors?.visitTypes &&
                      multiVisitTypes.length === 0 &&
                      "error-required-btn"
                    }
                  `}
                          onClick={() =>
                            handleVisitTypesButtonClick(button.value)
                          }
                          {...register("visitTypes", {
                            required: true,
                          })}
                        >
                          {multiVisitTypes.includes(button.value) ? (
                            <BsFillCheckCircleFill />
                          ) : (
                            <BsCircleFill />
                          )}
                          {button.label}
                        </button>
                      ))}
                    </div>
                    {errors?.visitTypes && multiVisitTypes.length === 0 && (
                      <FieldError message="Select an Visit Type" />
                    )}
                  </Form.Group>
                )}
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Working Days</Form.Label>
                  <div className="multi-select-btn">
                    {workingDaysData.map((button) => (
                      <button
                        key={button.key}
                        type="button"
                        className={`
                  ${
                    multiWorkingDays.includes(button.value)
                      ? "selected-btn"
                      : ""
                  }
                  ${
                    errors?.workingDays &&
                    multiWorkingDays.length === 0 &&
                    "error-required-btn"
                  }
                `}
                        onClick={() =>
                          handleMultiWorkingDaysButtonClick(button.value)
                        }
                        {...register("workingDays", {
                          required: true,
                        })}
                      >
                        {multiWorkingDays.includes(button.value) ? (
                          <BsFillCheckCircleFill />
                        ) : (
                          <BsCircleFill />
                        )}
                        {button.label}
                      </button>
                    ))}
                  </div>
                  {errors?.workingDays && multiWorkingDays.length === 0 && (
                    <FieldError message="Select an Working Days" />
                  )}
                </Form.Group>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Form>
    </div>
  );
}

export default CreateDoctorScheduling;
