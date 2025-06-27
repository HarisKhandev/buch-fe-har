import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { FaFileCirclePlus } from "react-icons/fa6";

function CustomNavigationHeader({ listData }) {
  const leftAlignedItems = listData?.filter((item) => item.align === "left");
  const rightAlignedItems = listData?.filter((item) => item.align === "right");

  const getIconByAction = (name) => {
    if (name.includes("Create")) {
      return <AiOutlinePlusCircle />;
    }
    if (name.includes("Quick")) {
      return <AiOutlinePlusCircle />;
    }
    if (name.includes("Close")) {
      return <AiOutlineCloseCircle />;
    }
    if (name.includes("Save & New")) {
      return <FaFileCirclePlus />;
    }
    if (name.includes("Save")) {
      return <BiSave />;
    }
    return null;
  };

  return (
    <div className="custom-navigation-header">
      <div className="align-left">
        {leftAlignedItems?.map((item) => (
          <Link onClick={item?.onClick} to={{ pathname: item?.path || "" }}>
            {getIconByAction(item?.name)}
            {item.name}
          </Link>
        ))}
      </div>
      <div className="align-right">
        {rightAlignedItems?.map((item) => (
          <Link onClick={item?.onClick} to={{ pathname: item?.path || "" }}>
            {getIconByAction(item?.name)}
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

CustomNavigationHeader.propTypes = {
  listData: PropTypes.object.isRequired,
};

export default CustomNavigationHeader;
