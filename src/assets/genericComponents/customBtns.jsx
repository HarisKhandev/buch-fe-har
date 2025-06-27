import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { BsFillCheckCircleFill, BsCircleFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { FieldError } from "./ErrorMessage";

function CustomBtns() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  // navigation list data

  //   const navigationListData = [
  //     {
  //       name: "Create Patient",
  //       path: "",
  //       align: "left",
  //     },
  //     {
  //       name: "Create Invoice",
  //       path: "",
  //       align: "left",
  //     },
  //     {
  //       name: "Create New Schedule",
  //       path: "",
  //       align: "right",
  //     },
  //     {
  //       name: "Close",
  //       path: "",
  //       align: "right",
  //     },
  //     {
  //       name: "Save",
  //       path: "",
  //       align: "right",
  //     },
  //     {
  //       name: "Save & New",
  //       path: "",
  //       align: "right",
  //     },
  //   ];

  //  single select data

  const singleSelectBtnsData = [
    { label: "OP", value: 1, key: "op" },
    { label: "Radiology", value: 2, key: "radiology" },
    { label: "EHC", value: 3, key: "ehc" },
  ];

  const [singleSelectedButton, setSingleSelectedButton] = useState(null);

  const handleSingleButtonClick = (buttonKey) => {
    setSingleSelectedButton(
      buttonKey === singleSelectedButton ? null : buttonKey
    );
    setValue(
      "encounterType",
      buttonKey === singleSelectedButton ? null : buttonKey
    );
  };

  //  multi select data

  const multiSelectBtnsData = [
    { label: "Monday", value: 1, key: "monday" },
    { label: "Tuesday", value: 2, key: "tuesday" },
    { label: "Wednesday", value: 3, key: "wednesday" },
  ];

  const [multiSelectedValues, setMultiSelectedValues] = useState([]);

  const handleMultiButtonClick = (buttonValue) => {
    if (multiSelectedValues.includes(buttonValue)) {
      setMultiSelectedValues((prevValues) =>
        prevValues.filter((value) => value !== buttonValue)
      );
    } else {
      setMultiSelectedValues((prevValues) => [...prevValues, buttonValue]);
    }
  };

  useEffect(() => {
    setValue("workingDays", multiSelectedValues);
  }, [multiSelectedValues]);

  function onSubmit(data) {
    // eslint-disable-next-line no-debugger
    console.log("dataaaa", data);
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* form control design */}

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="name@example.com"
              style={{
                borderColor: errors?.email ? "#E93535" : "",
              }}
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email && <FieldError message="This Field is Required" />}
          </Form.Group>

          {/* select design */}

          <Form.Group className="mb-3">
            <Form.Label>Select</Form.Label>
            <Form.Select
              aria-label="Default select example"
              style={{
                borderColor: errors?.select ? "#E93535" : "",
              }}
              {...register("select", {
                required: true,
              })}
            >
              <option value="">Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            {errors?.select && <FieldError message="This Field is Required" />}
          </Form.Group>

          {/* single select design */}

          <Form.Group className="mb-3">
            <Form.Label>Encounter Type</Form.Label>
            <div className="single-select-btn">
              {singleSelectBtnsData.map((button) => (
                <button
                  key={button.key}
                  type="button"
                  className={`
                    ${singleSelectedButton === button.key ? "selected-btn" : ""}
                    ${
                      errors?.encounterType &&
                      singleSelectedButton === null &&
                      "error-required-btn"
                    }
                  `}
                  onClick={() => handleSingleButtonClick(button.key)}
                  {...register("encounterType", {
                    required: true,
                  })}
                >
                  {button.label}
                </button>
              ))}
              {singleSelectedButton !== null && (
                <p>
                  Selected Value:{" "}
                  {
                    singleSelectBtnsData.find(
                      (button) => button.key === singleSelectedButton
                    ).value
                  }
                </p>
              )}
            </div>
            {errors?.encounterType && singleSelectedButton === null && (
              <FieldError message="Select an encounter type" />
            )}
          </Form.Group>

          {/* multi select design */}
          <Form.Group className="mb-3">
            <Form.Label>Working Days</Form.Label>
            <div className="multi-select-btn">
              {multiSelectBtnsData.map((button) => (
                <button
                  key={button.key}
                  type="button"
                  className={`
                  ${
                    multiSelectedValues.includes(button.value)
                      ? "selected-btn"
                      : ""
                  }
                  ${
                    errors?.workingDays &&
                    multiSelectedValues.length === 0 &&
                    "error-required-btn"
                  }
                `}
                  onClick={() => handleMultiButtonClick(button.value)}
                  {...register("workingDays", {
                    required: true,
                  })}
                >
                  {multiSelectedValues.includes(button.value) ? (
                    <BsFillCheckCircleFill />
                  ) : (
                    <BsCircleFill />
                  )}
                  {button.label}
                </button>
              ))}
              <div>
                {multiSelectedValues.length > 0 && (
                  <p>Selected Values: {multiSelectedValues.join(", ")}</p>
                )}
              </div>
            </div>
            {errors?.workingDays && multiSelectedValues.length === 0 && (
              <FieldError message="Select an encounter type" />
            )}
          </Form.Group>

          <div className="text-end">
            <button type="submit" className="button-primary">
              Submit
            </button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CustomBtns;
