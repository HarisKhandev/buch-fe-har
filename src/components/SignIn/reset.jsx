/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";

export default function Reset({ setLoginForm }) {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = () => {};

  return (
    <form
      className="w-100 d-flex justify-content-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="auth-content ">
        <h3 className="mb-4 sign-in-text">Reset Password</h3>
        <label id="login-label">PIN</label>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(e) => {
              setValue("patientPIN", e.target.value);
            }}
            id="patientPIN"
            name="patientPIN"
            className="form-control"
            placeholder="PIN NO"
            maxLength={10}
            autoComplete="off"
            required
            {...register("patientPIN", { required: true })}
          />
        </div>
        <label id="login-label">Phone Number</label>
        <div className="input-group mb-4">
          <PhoneInput country="pk" />
        </div>
        <div className="text-center mb-4">
          <button type="submit" className="submit-btn shadow-2 ">
            Reset
          </button>
          <button
            type="button"
            onClick={() => setLoginForm(true)}
            className="submit-btn shadow-2 me-2"
          >
            Back to Sign in
          </button>
        </div>
      </div>
    </form>
  );
}
Reset.propTypes = {
  setLoginForm: PropTypes.func.isRequired, // Example prop type
};
