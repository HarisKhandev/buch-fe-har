import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

export default function CustomToggleSwitch(props) {
  const { handleSwitchChange, dateToggle, label, noOfSessionButton } = props;

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 32,
    height: 17,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(15px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#E2E5ED" : "#B3D05C",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 13,
      height: 13,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#E2E5ED" : "#E2E5ED",
      boxSizing: "border-box",
    },
  }));
  return (
    <div className="d-flex align-items-center justify-content-start">
      <div>
        <Stack direction="row" spacing={1} alignItems="center" >
          <AntSwitch
            inputProps={{ "aria-label": "ant design" }}
            onChange={handleSwitchChange}
            checked={dateToggle}  
            disabled={!noOfSessionButton }     
          />
        </Stack>
      </div>
      <div className="mx-1 toggle-text">{label}</div>
    </div>
  );
}

CustomToggleSwitch.propTypes = {
  handleSwitchChange: PropTypes.object.isRequired,
  dateToggle: PropTypes.object.isRequired,
  label: PropTypes.object.isRequired,
  noOfSessionButton: PropTypes.object.isRequired,
};
