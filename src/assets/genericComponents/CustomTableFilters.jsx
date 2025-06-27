import { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

function CustomTableFilters({ listData }) {
  return (
    <div className="custom-table-filters">
      {listData.map((option) => (
        <FilterOption option={option} />
      ))}
    </div>
  );
}

export default CustomTableFilters;

CustomTableFilters.propTypes = {
  listData: PropTypes.object.isRequired,
};

function FilterOption({ option }) {
  if (option.filter === "Search") {
    return (
      <div className="search-filter">
        <Form.Control type="text" placeholder="Search" />
        <FiSearch />
      </div>
    );
  }
  if (option.filter === "Date Range") {
    return <DateRangeFilter />;
  }
  if (option.filter === "Date And Time") {
    return <DateAndTimeFilter />;
  }
  if (option.filter === "Select Filter") {
    return <SelectFilter option={option} />;
  }
  return null;
}

FilterOption.propTypes = {
  option: PropTypes.object.isRequired,
};

function DateRangeFilter() {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  function onSubmit(data) {
    console.log("dataaaa", data);
  }
  return (
    <Dropdown
      className="custom-date-range-dropdown"
      show={isOpen}
      onToggle={(newIsOpen) => setIsOpen(newIsOpen)}
    >
      <Dropdown.Toggle variant="secondary">
        Date
        {isOpen ? <BsChevronDown /> : <BsChevronUp />}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="date-range-section">
            <Form.Group className="mb-3">
              <Form.Label>From</Form.Label>
              <Form.Control type="date" {...register("fromDate")} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>To</Form.Label>
              <Form.Control type="date" {...register("toDate")} />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-end gap-2">
            <Button
              type="button"
              className="cancel-btn"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="apply-btn">
              Apply
            </Button>
          </div>
        </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function DateAndTimeFilter() {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  function onSubmit(data) {
    console.log("dataaaa", data);
  }
  return (
    <Dropdown
      className="custom-date-range-dropdown"
      show={isOpen}
      onToggle={(newIsOpen) => setIsOpen(newIsOpen)}
    >
      <Dropdown.Toggle variant="secondary">
        Date & Time
        {isOpen ? <BsChevronDown /> : <BsChevronUp />}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Date & Time</Form.Label>
            <Form.Control type="datetime-local" {...register("dateAndTime")} />
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button
              type="button"
              className="cancel-btn"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="apply-btn">
              Apply
            </Button>
          </div>
        </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function SelectFilter({ option }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="custom-select-dropdown"
      show={isOpen}
      onToggle={(newIsOpen) => setIsOpen(newIsOpen)}
    >
      <Dropdown.Toggle variant="secondary">
        {option?.name}
        {isOpen ? <BsChevronDown /> : <BsChevronUp />}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {option?.dropdownList?.map((list) => (
          <Dropdown.Item value={list?.value}>{list?.label}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

SelectFilter.propTypes = {
  option: PropTypes.object.isRequired,
};
