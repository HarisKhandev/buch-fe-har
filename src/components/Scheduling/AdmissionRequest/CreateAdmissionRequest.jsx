import { Card, Form, Row, Col } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useForm } from "react-hook-form";
import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";
import { PATH } from "../../../config";
import { FieldError } from "../../../assets";

function CreateAdmissionRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {}

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
      path: PATH.ADMISSION_REQUEST_LISTING,
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
      path: PATH.ADMISSION_REQUEST_LISTING,
      align: "right",
    },
  ];

  return (
    <>
      <CustomNavigationHeader listData={navigationListData} />
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* form control design */}
            <Row>
              <Col sm="12" md="6" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label>PIN</Form.Label>
                  <Form.Select
                    aria-label="Select"
                    style={{
                      borderColor: errors?.pin ? "#E93535" : "",
                    }}
                    {...register("pin", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">BIH100166</option>
                    <option value="2">BIH100167</option>
                    <option value="3">BIH100168</option>
                  </Form.Select>
                  {errors?.pin && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label>Admission Date</Form.Label>
                  <Form.Control
                    type="date" 
                    style={{
                      borderColor: errors?.admissionDate ? "#E93535" : "",
                    }}
                    {...register("admissionDate", {
                      required: true,
                    })}
                  />
                  {errors?.admissionDate && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label>Admission Time</Form.Label>
                  <Form.Control
                    type="time" 
                    style={{
                      borderColor: errors?.admissionTime ? "#E93535" : "",
                    }}
                    {...register("admissionTime", {
                      required: true,
                    })}
                  />
                  {errors?.admissionTime && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label>Doctor</Form.Label>
                  <Form.Select
                    aria-label="Select"
                    style={{
                      borderColor: errors?.doctor ? "#E93535" : "",
                    }}
                    {...register("doctor", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">Dr. Sam</option>
                    <option value="2">Dr. Paul</option>
                    <option value="3">Dr. Lee</option>
                  </Form.Select>
                  {errors?.doctor && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label>Primary Diagnosis</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter details" 
                    style={{
                      borderColor: errors?.primaryDiagnosis ? "#E93535" : "",
                    }}
                    {...register("primaryDiagnosis", {
                      required: true,
                    })}
                  />
                  {errors?.primaryDiagnosis && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label>Secondary Diagnosis</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter details" 
                    style={{
                      borderColor: errors?.secondaryDiagnosis ? "#E93535" : "",
                    }}
                    {...register("secondaryDiagnosis", {
                      required: true,
                    })}
                  />
                  {errors?.secondaryDiagnosis && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label>Admitting Diagnosis</Form.Label>
                  <Form.Select
                    aria-label="Select"
                    style={{
                      borderColor: errors?.admittingDiagnosis ? "#E93535" : "",
                    }}
                    {...register("admittingDiagnosis", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">Paratyphoid Fever A</option>
                    <option value="2">Paratyphoid Fever B</option>
                  </Form.Select>
                  {errors?.admittingDiagnosis && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label>Patient Care Order</Form.Label>
                  <Form.Select
                    aria-label="Select"
                    style={{
                      borderColor: errors?.pco ? "#E93535" : "",
                    }}
                    {...register("pco", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">PCO Template#1</option>
                    <option value="2">PCO Template#2</option>
                  </Form.Select>
                  {errors?.pco && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12">
                <Form.Group className="mb-3">
                  <Form.Label>Reasons For Admission</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={3}
                    placeholder="Enter details" 
                    style={{
                      borderColor: errors?.reasonForAdmission ? "#E93535" : "",
                    }}
                    {...register("reasonForAdmission", {
                      required: true,
                    })}
                  />
                  {errors?.reasonForAdmission && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </Col>
              <Col sm="12" md="6">
                <div className="mt-3">
                  <p>
                    Check Payer Eligibility <HiArrowNarrowRight size={18} />
                  </p>
                </div>
              </Col>
              <Col sm="12" md="6">
                <div className="mt-3 float-right">
                  <Checkbox
                    sx={{
                      color: "#B3D05C",
                      "&.Mui-checked": {
                        color: "#B3D05C",
                      },
                      padding: 0,
                      borderRadius: "2px",
                    }}
                    defaultChecked
                  />{" "}
                  Send to approval
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreateAdmissionRequest;
