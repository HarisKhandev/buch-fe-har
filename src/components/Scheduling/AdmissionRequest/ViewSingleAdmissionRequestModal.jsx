import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import IMAGES from "../../../assets/images";

function ViewSingleAdmissionRequestModal({ show, onHide }) {
  return (
    <Modal
      centered
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="ambulance-scheduled"
    >
      <div className="modal-header-border px-md-5 py-4">
        <Modal.Header closeButton className="p-0 border-0">
          <Modal.Title className="fw-bold">Admission Request</Modal.Title>
        </Modal.Header>
        <div className="edit-delete-btn d-flex justify-content-end mt-2">
          <Button className="bg-transparent border-0 p-0">
            <BiEditAlt fill="#979797" size={22} className="me-1" />
            <span className="text-gray">Edit</span>
          </Button>
          <Button className="bg-transparent border-0 ms-3 p-0">
            <MdOutlineDeleteForever fill="#979797" size={22} className="me-1" />
            <span>Delete</span>
          </Button>
        </div>
      </div>
      <Modal.Body className="px-md-5 py-4">
        <Form>
          <div>
            <div className="row border border-gray rounded-2 pt-4 px-3 m-0">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <span>Patient Details</span>
                  <div className="patient-column-set">
                    <img
                      src={IMAGES.PROFILE_LOGO}
                      alt="Dr. Cody Forman"
                      className="img-fluid"
                    />
                    <div>
                      <div>Dr. Cody Forman</div>
                      <div className="sub-name">BIH100166</div>
                    </div>
                  </div> 
                </div>
                <div className="col-md-6 mb-4">
                  <span>Attending Doctor</span>
                  <div className="doctor-column-set">
                    <img
                      src={IMAGES.PROFILE_LOGO}
                      alt="Dr. Cody Forman"
                      className="img-fluid"
                    />
                    <div>Dr. Cody Forman</div>
                  </div> 
                </div>
              </div>
              <hr />
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Admission Date</span>
                <h5>1/13/2023</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Admission Time</span>
                <h5>10:30 AM</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Primary Diagnosis</span>
                <h5>Typhoid A</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Secondary Diagnosis</span>
                <h5>Typhoid A</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Admitting Diagnosis</span>
                <h5>Typhoid A</h5>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Form.Label>Patient Care Order</Form.Label>
            <div className="row border border-gray rounded-2 pt-4 px-3 m-0">
              <h4 className="text-center py-4">PCO Template View</h4>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

ViewSingleAdmissionRequestModal.propTypes = {
  show: PropTypes.object.isRequired,
  onHide: PropTypes.object.isRequired,
};

export default ViewSingleAdmissionRequestModal;
