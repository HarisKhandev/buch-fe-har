import { Button, Form, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { FieldError } from "../../../assets";

function QuickRegisterPatientModal({ show, onHide }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }
  return (
    <Modal
      centered
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="md"
    >
      <Modal.Header closeButton className="px-md-5 py-4">
        <Modal.Title className="fw-bold">Quick Register Patient</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-md-5 py-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-4">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter patient full name "
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
            <div className="col-md-6">
              <Form.Group className="mb-4">
                <Form.Label>Patient Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter patient phone number"
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
            <div className="col-12">
              <Form.Group className="mb-4">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter patient complete address"
                  style={{
                    borderColor: errors?.address ? "#E93535" : "",
                  }}
                  {...register("address", {
                    required: true,
                  })}
                />
                {errors?.address && (
                  <FieldError message="This Field is Required" />
                )}
              </Form.Group>
            </div>
          </div>
          <Button
            className="ms-auto d-block submit-btn mt-3"
            variant="secondary"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

QuickRegisterPatientModal.propTypes = {
  show: PropTypes.object.isRequired,
  onHide: PropTypes.object.isRequired,
};

export default QuickRegisterPatientModal;
