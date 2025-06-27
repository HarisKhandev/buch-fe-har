import { Popover, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

export function PopOverText({ text }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event, labtest) => {
    setHoveredItem(labtest);
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };
  return (
    <div className="d-flex justify-content-start align-items-center">
      <Typography
        aria-owns={popoverOpen ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={(event) => handlePopoverOpen(event, text)}
        onMouseLeave={handlePopoverClose}
      >
        {text.length > 1 ? text[0] : text}
        {text.length > 1 ? (
          <span className="popover-number-style">+{text.length - 1}</span>
        ) : null}
      </Typography>
      {text.length > 1 && (
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={popoverOpen && hoveredItem === text}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{text.slice(1).join(", ")}</Typography>
        </Popover>
      )}
    </div>
  );
}

export default PopOverText;
PopOverText.propTypes = {
  text: PropTypes.object.isRequired,
};
