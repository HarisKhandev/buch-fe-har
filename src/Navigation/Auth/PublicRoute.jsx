/* eslint-disable no-debugger */
import PropTypes from "prop-types";
import { LoaderPageWithoutBG } from "../../assets";
import { PATH } from "../../config";

function PublicRoute({ children }) {
  debugger;
  const jwtToken = JSON.parse(localStorage.getItem("buch_international_user"));
  if (jwtToken) {
    window.location.href = PATH.DOCTOR_SCHEDULING_LISTING;
    return null; // Return null here to prevent rendering anything in this case
  }
  return (
    <>
      {jwtToken ? <LoaderPageWithoutBG /> : null}
      {children}
    </>
  );
}

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PublicRoute;
