import PropTypes from "prop-types";
import { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { FiChevronDown, FiSearch } from "react-icons/fi";

function CustomDoctorFilterDropdown(props) {
  const { selectedDoctor, dropdownData, handleDoctorClick, register, errors } =
    props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown-doctor">
      <Dropdown
        show={isOpen}
        onToggle={(newIsOpen) => setIsOpen(newIsOpen)}
        value={selectedDoctor}
      >
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="w-100"
          {...register("doctor", {
            required: true,
          })}
          style={{
            borderColor:
              errors?.doctor && selectedDoctor === null ? "#E93535" : "",
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="dropdown-placeholder">
              {selectedDoctor || "Select Doctor"}
            </div>
            <div>
              <FiChevronDown size={23} className="cursor-pointer" />
            </div>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className="p-3 custom-dropdown-filter-table">
            <div className="position-relative w-50">
              <Form.Control
                type="search"
                placeholder="Search"
                className="dropdown-search-input"
              />
              <span className="dropdown-search position-absolute">
                <FiSearch color="#ffffff" />
              </span>
            </div>
            <div className="dropdown-custom-table mt-2">
              <table className="table-responsive">
                <tr>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Dept Code</th>
                  <th>Category</th>
                </tr>

                {dropdownData?.map((item) => (
                  <tr
                    key={item.code}
                    onClick={() => {
                      handleDoctorClick(item);
                      setIsOpen(false);
                    }}
                  >
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.deptCode}</td>
                    <td>{item.category}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CustomDoctorFilterDropdown;
CustomDoctorFilterDropdown.propTypes = {
  selectedDoctor: PropTypes.object.isRequired,
  dropdownData: PropTypes.object.isRequired,
  handleDoctorClick: PropTypes.object.isRequired,
  register: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
