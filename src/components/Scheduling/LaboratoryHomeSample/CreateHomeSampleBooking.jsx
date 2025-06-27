import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MenuItem, OutlinedInput, Select } from "@mui/material";
import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";
import { FieldError } from "../../../assets";
import { PATH } from "../../../config";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function CreateHomeSampleBooking() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [personName, setPersonName] = React.useState([]);

  const [personNameError, setPersonNameError] = useState(false);

  const getChipStyle = (name, selected) => ({
    backgroundColor: selected ? "#EAEDF3" : "transparent",
    color: selected && "#3E3F42",
    borderRadius: "5px",
    margin: "2px",
    padding: "2px 5px",
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setPersonNameError(false);
  };

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
      path: PATH.LABORATORY_HOME_SAMPLE,
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

  return (
    <>
      <CustomNavigationHeader listData={navigationListData} />
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="create-home-sample-parent-class"
      >
        <Card>
          <Card.Body>
            <div className="row ">
              <div className=" col-lg-6 col-sm-6">
                <Form.Group className="mb-4">
                  <Form.Label>PIN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="BIH100166"
                    maxLength={10}
                    name="pin"
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

              <div className=" col-lg-6 col-sm-6">
                <Form.Group className="mb-4">
                  <Form.Label>Lab Technician</Form.Label>
                  <Form.Select
                    aria-label="Select"
                    style={{
                      borderColor: errors?.labtechnician ? "#E93535" : "",
                    }}
                    {...register("labtechnician", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">Usman Khaleel</option>
                    <option value="2">ali</option>
                    <option value="3">Muzammal</option>
                  </Form.Select>
                  {errors?.labtechnician && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className=" col-lg-6 col-sm-6">
                <Form.Group className="mb-4">
                  <Form.Label>Lab Tests</Form.Label>
                  <Select
                    multiple
                    displayEmpty
                    className={`form-control ${
                      personNameError ? "error-border" : ""
                    }`}
                    style={{
                      borderColor:
                        errors?.personNameError && personName.length === 0
                          ? "#E93535"
                          : "",
                    }}
                    {...register("personNameError", {
                      required: true,
                    })}
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select</em>;
                      }
                      return (
                        <div>
                          {selected.map((name) => (
                            <span key={name} style={getChipStyle(name, true)}>
                              {name}
                            </span>
                          ))}
                        </div>
                      );
                    }}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
                    </MenuItem>
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors?.personNameError && personName.length === 0 && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className=" col-lg-6 col-sm-6">
                <Form.Group className="mb-4">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Date"
                    style={{
                      borderColor: errors?.date ? "#E93535" : "",
                    }}
                    {...register("date", {
                      required: true,
                    })}
                  />
                  {errors?.date && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className=" col-lg-6 col-sm-6">
                <Form.Group className="mb-4">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Time"
                    style={{
                      borderColor: errors?.time ? "#E93535" : "",
                    }}
                    {...register("time", {
                      required: true,
                    })}
                  />
                  {errors?.time && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className=" col-lg-6 col-sm-6">
                <Form.Group className="mb-4">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Location"
                    style={{
                      borderColor: errors?.location ? "#E93535" : "",
                    }}
                    {...register("location", {
                      required: true,
                    })}
                  />
                  {errors?.location && (
                    <FieldError message="This Field is Required" />
                  )}
                </Form.Group>
              </div>
              <div className=" col-lg-12">
                <Form.Group className="mb-4 ">
                  <Form.Label>Note</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={3}
                    aria-label="With textarea"
                    placeholder="Write you notes here..."
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
      </Form>
    </>
  );
}

export default CreateHomeSampleBooking;
