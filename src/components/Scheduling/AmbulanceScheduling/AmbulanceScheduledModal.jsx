import { Button, Form, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";

function AmbulanceScheduledModal({ show, onHide, ambulanceScheduleRowData }) {
  const ambulanceScheduledData = ambulanceScheduleRowData?.original;
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
          <Modal.Title className="fw-bold">Ambulance Scheduled</Modal.Title>
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
      <Modal.Body className="px-md-5 py-4 ">
        <Form>
          <div>
            <Form.Label>Patient Details</Form.Label>
            <div className="row border border-gray rounded-2 pt-4 px-3 m-0">
              <div className="col-md-6 col-lg-4 mb-4">
                <span>PIN</span>
                <h5>{ambulanceScheduledData?.patientDetail?.subName}</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Patient Name</span>
                <h5>{ambulanceScheduledData?.patientDetail?.name}</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Patient Diagnosis</span>
                <h5>Fever</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Primary Consultant</span>
                <h5>Dr. Atif Zubair</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Contact No</span>
                <h5>0334 7265935</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Patient Emergency Contact No</span>
                <h5>0334 7265935</h5>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Form.Label>Emergency Details</Form.Label>
            <div className="row border border-gray rounded-2 pt-4 px-3 m-0">
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Urgency Level</span>
                <h5>Medium</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Type of emergency</span>
                <h5>Truama</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Is the patient is stable?</span>
                <h5>No</h5>
              </div>
              <div className="col-12 mb-4">
                <span>Any special requirement?</span>
                <h5>Lorem ipsum dolor sit amet consectetur. Mi vestibulum.</h5>
              </div>
              <div className="col-12 mb-4">
                <span>Brief description for patient medical condition.</span>
                <h5>
                  Lorem ipsum dolor sit amet consectetur. Fermentum massa
                  porttitor id aliquam ullamcorper et. Lectus nisl arcu commodo
                  fermentum sem vivamus id proin. Consectetur viverra mattis
                  laoreet dolor.
                </h5>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Form.Label>Ambulance Details</Form.Label>
            <div className="row border border-gray rounded-2 pt-4 px-3 m-0">
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Vehicle Number</span>
                <h5>LEZ 5434</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Driver Name</span>
                <h5>Ali Imran</h5>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <span>Driver Contact No</span>
                <h5>0322 54534552</h5>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="col-12 mb-4">
                    <span>Pickup Point</span>
                    <h5>Buch Hospital</h5>
                  </div>
                  <div className="col-12 mb-4">
                    <span>Destination Point</span>
                    <h5>972 Westheimer Rd. Santa Ana</h5>
                  </div>
                  <div className="col-12 mb-4">
                    <span className="d-block">Status</span>
                    <h5 className="table-status bg-light-yellow text-yellow mt-2">
                      Pending
                    </h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="text-center px-4 py-4 bg-light-gray">
                    <FaLocationDot className="mb-3" size={18} />
                    <p className="m-0">
                      The distance for single side is <strong> 15KM</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

AmbulanceScheduledModal.propTypes = {
  show: PropTypes.object.isRequired,
  onHide: PropTypes.object.isRequired,
  ambulanceScheduleRowData: PropTypes.object.isRequired,
};

export default AmbulanceScheduledModal;
