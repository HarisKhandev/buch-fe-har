import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";

import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";
import QuickRegisterPatientModal from "./QuickRegisterPatientModal";
import { FieldError } from "../../../assets";
import { PATH } from "../../../config";

const UrgencyLevel = [
  { label: "High", value: 1, key: "High" },
  { label: "Medium", value: 2, key: "Medium" },
  { label: "Low", value: 3, key: "Low" },
];

const EmergencyType = [
  { label: "Medical", value: 1, key: "Medical" },
  { label: "Trauma", value: 2, key: "Trauma" },
];
const PatientStable = [
  { label: "Yes", value: 1, key: "Yes" },
  { label: "No", value: 2, key: "No" },
];

function CreateAmbulanceScheduling() {
  const [patientRegister, setPatientRegister] = useState(false);
  const [urgencyLevel, setUrgencyLevel] = useState(null);
  const [emergencyType, setEmergencyType] = useState(null);
  const [patientStable, setPatientStable] = useState(null);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }

  const handleUrgencyLevel = (buttonKey) => {
    setUrgencyLevel(buttonKey === urgencyLevel ? null : buttonKey);
    setValue("urgencyLevel", buttonKey === urgencyLevel ? null : buttonKey);
  };
  const handleEmergencyType = (buttonKey) => {
    setEmergencyType(buttonKey === emergencyType ? null : buttonKey);
    setValue("emergencyType", buttonKey === emergencyType ? null : buttonKey);
  };
  const handlePatientStable = (buttonKey) => {
    setPatientStable(buttonKey === patientStable ? null : buttonKey);
    setValue("patientStable", buttonKey === patientStable ? null : buttonKey);
  };

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
      name: "Close",
      path: PATH.AMBULANCE_SCHEDULING_LISTING,
      align: "right",
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
  return (
    <>
      <CustomNavigationHeader listData={navigationListData} />
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="create-ambulance-scheduling"
      >
        <Card>
          <Card.Body>
            {/* form control design */}
            <h4 className="fw-bold border-bottom border-gray pb-3 mb-4">
              Patient Details
            </h4>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>PIN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="BIH100166"
                    style={{
                      borderColor: errors?.pin ? "#E93535" : "",
                    }}
                    {...register("pin", {
                      required: true,
                    })}
                  />
                  {errors?.pin && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Patient Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ali Imran"
                    style={{
                      borderColor: errors?.name ? "#E93535" : "",
                    }}
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors?.name && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Patient Diagnosis</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Details"
                    style={{
                      borderColor: errors?.patientDiagonis ? "#E93535" : "",
                    }}
                    {...register("patientDiagonis", {
                      required: true,
                    })}
                  />
                  {errors?.patientDiagonis && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Primary Consultant</Form.Label>
                  <Form.Select
                    aria-label="Select"
                    style={{
                      borderColor: errors?.primaryConsultant ? "#E93535" : "",
                    }}
                    {...register("primaryConsultant", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">Usman Khaleel</option>
                    <option value="2">ali</option>
                    <option value="3">Muzammal</option>
                  </Form.Select>
                  {errors?.primaryConsultant && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Contact No</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0322 5467520"
                    style={{
                      borderColor: errors?.contactNumber ? "#E93535" : "",
                    }}
                    {...register("contactNumber", {
                      required: true,
                    })}
                  />
                  {errors?.contactNumber && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Patient Emergency Contact No</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0322 5467520"
                    style={{
                      borderColor: errors?.emergencyContactNumber
                        ? "#E93535"
                        : "",
                    }}
                    {...register("emergencyContactNumber", {
                      required: true,
                    })}
                  />
                  {errors?.emergencyContactNumber && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h4 className="fw-bold border-bottom border-gray pb-3 mb-4">
              Emergency Details
            </h4>
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <Form.Group className="mb-4">
                  <Form.Label>Urgency Level</Form.Label>
                  <div className="single-select-btn">
                    {UrgencyLevel.map((button) => (
                      <button
                        key={button.key}
                        type="button"
                        className={`
                        ${urgencyLevel === button.key ? "selected-btn" : ""}
                        ${
                          errors?.urgencyLevel &&
                          urgencyLevel === null &&
                          "error-required-btn"
                        }
                      `}
                        onClick={() => handleUrgencyLevel(button.key)}
                        {...register("urgencyLevel", {
                          required: true,
                        })}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                  {errors?.urgencyLevel && urgencyLevel === null && (
                    <FieldError message="Select an Urgency Level" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-4 col-lg-3">
                <Form.Group className="mb-4">
                  <Form.Label>Type of emergency</Form.Label>
                  <div className="single-select-btn">
                    {EmergencyType.map((button) => (
                      <button
                        key={button.key}
                        type="button"
                        className={`
                        ${emergencyType === button.key ? "selected-btn" : ""}
                        ${
                          errors?.emergencyType &&
                          emergencyType === null &&
                          "error-required-btn"
                        }
                      `}
                        onClick={() => handleEmergencyType(button.key)}
                        {...register("emergencyType", {
                          required: true,
                        })}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                  {errors?.emergencyType && emergencyType === null && (
                    <FieldError message="Select an Type of emergency" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-4 col-lg-2">
                <Form.Group className="mb-4">
                  <Form.Label>Is the patient is stable?</Form.Label>
                  <div className="single-select-btn">
                    {PatientStable.map((button) => (
                      <button
                        key={button.key}
                        type="button"
                        className={`
                        ${patientStable === button.key ? "selected-btn" : ""}
                        ${
                          errors?.patientStable &&
                          patientStable === null &&
                          "error-required-btn"
                        }
                      `}
                        onClick={() => handlePatientStable(button.key)}
                        {...register("patientStable", {
                          required: true,
                        })}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                  {errors?.patientStable && patientStable === null && (
                    <FieldError message="Select an Option" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-4 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Any special requirements?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter details"
                    style={{
                      borderColor: errors?.requirement ? "#E93535" : "",
                    }}
                    {...register("requirement", {
                      required: true,
                    })}
                  />
                  {errors?.requirement && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-12 mt-3">
                <Form.Group className="mb-4 ">
                  <Form.Label>
                    Brief description for patient medical condition. Optional
                    Hint
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={3}
                    aria-label="With textarea"
                    placeholder="Type here"
                    style={{
                      borderColor: errors?.description ? "#E93535" : "",
                    }}
                    {...register("description", {
                      required: true,
                    })}
                  />
                  {errors?.description && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h4 className="fw-bold border-bottom border-gray pb-3 mb-4">
              Ambulance Details
            </h4>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Vehicle Number Optional Hint</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="LEZ 5333"
                    style={{
                      borderColor: errors?.vehicleNumber ? "#E93535" : "",
                    }}
                    {...register("vehicleNumber", {
                      required: true,
                    })}
                  />
                  {errors?.vehicleNumber && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Driver Name</Form.Label>
                  <Form.Select
                    aria-label="Select"
                    style={{
                      borderColor: errors?.driverName ? "#E93535" : "",
                    }}
                    {...register("driverName", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">Usman Khaleel</option>
                    <option value="2">ali</option>
                    <option value="3">Muzammal</option>
                  </Form.Select>
                  {errors.driverName && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Driver Contact No</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0322 5467520"
                    style={{
                      borderColor: errors?.driverContactNumber ? "#E93535" : "",
                    }}
                    {...register("driverContactNumber", {
                      required: true,
                    })}
                  />
                  {errors?.driverContactNumber && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>

              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Pickup Point</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Buch Hospital"
                    style={{
                      borderColor: errors?.pickupPoint ? "#E93535" : "",
                    }}
                    {...register("pickupPoint", {
                      required: true,
                    })}
                  />
                  {errors?.pickupPoint && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6 col-lg-4">
                <Form.Group className="mb-4">
                  <Form.Label>Destination Point</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="972 Westheimer Rd. Santa Ana"
                    style={{
                      borderColor: errors?.destinationPoint ? "#E93535" : "",
                    }}
                    {...register("destinationPoint", {
                      required: true,
                    })}
                  />
                  {errors?.destinationPoint && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="d-inline-flex align-items-center border border-gray px-4 py-3 bg-light-gray">
              <FaLocationDot className="me-3" size={18} />
              <p className="m-0">
                The distance for single side is <strong> 15KM</strong>
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <Button
          className="ms-auto d-block submit-btn mt-3"
          variant="secondary"
          type="sybmit"
        >
          Register
        </Button> */}
      </Form>
      <QuickRegisterPatientModal
        show={patientRegister}
        onHide={() => setPatientRegister(!patientRegister)}
      />
    </>
  );
}

export default CreateAmbulanceScheduling;
