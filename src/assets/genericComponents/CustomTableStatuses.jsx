import { Dropdown } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function CustomTableStatuses({
  statusName,
  listData,
  index,
  handleStatusChange,
}) {
  return (
    <div className="position-relative">
      <Dropdown
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Dropdown.Toggle
          variant="unset"
          id="dropdown-basic"
          className={`table-status ${
            (statusName === "Pending" && "bg-light-yellow text-yellow") ||
            (statusName === "Confirmed" && "bg-light-green text-green") ||
            (statusName === "On-Way" && "bg-light-purple text-purple")
          }`}
        >
          {statusName}
          <AiFillCaretDown />
        </Dropdown.Toggle>

        {ReactDOM.createPortal(
          <Dropdown.Menu className="table-status-dropdown-menu">
            {listData
              .filter((item) => item.label !== statusName)
              .map((item) => (
                <Dropdown.Item
                  key={item.value}
                  onClick={() => handleStatusChange(item.label, index)}
                >
                  {item.label}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>,
          document.body
        )}
      </Dropdown>
    </div>
  );
}

export default CustomTableStatuses;

CustomTableStatuses.propTypes = {
  statusName: PropTypes.object.isRequired,
  listData: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
  handleStatusChange: PropTypes.object.isRequired,
};
