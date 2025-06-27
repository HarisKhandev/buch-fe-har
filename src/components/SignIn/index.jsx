/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FiLock, FiUnlock } from "react-icons/fi";
import { LoaderCenter } from "../../assets";
import { PATH, TOASTER_STYLING_VALUES } from "../../config";
import Reset from "./reset";

export default function SignIn() {
  const { register, handleSubmit, setValue } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [toasterLoader, setToasterLoader] = useState(false);
  const [loginForm, setLoginForm] = useState(true);

  useEffect(() => {
    document.title = "SignIn || Buch International";
  }, []);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  function onSubmit(data) {
    if (data.patientPIN === "BIH0100016") {
      const userData = { ...data, token: "token", userType: "user" };
      localStorage.setItem("buch_international_user", JSON.stringify(userData));
      setToasterLoader(true);
      window.location.href = PATH.DOCTOR_SCHEDULING_LISTING;
    } else {
      toast.error("Invalid Email or Password", TOASTER_STYLING_VALUES);
      setToasterLoader(false);
    }
  }

  // function moveToNext(data) {
  //   localStorage.setItem("buch_international_user", JSON.stringify(data));
  // }

  // function notification(data, condition) {
  //   if (condition === "success") {
  //     toast.success(data, TOASTER_STYLING_VALUES);
  //     setToasterLoader(true);
  //   } else {
  //     toast.error(data, TOASTER_STYLING_VALUES);
  //   }
  // }

  return (
    <>
      <ToastContainer />
      <div className="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
        <div className="row m-4 align-items-center w-100 align-items-stretch bg-white">
          <div className="d-none rounded d-lg-flex col-lg-6 aut-bg-img align-items-center d-flex justify-content-center" />
          <div className="col-lg-6 align-items-stret h-100 align-items-center d-flex justify-content-center">
            {loginForm && (
              <form
                className="w-100 d-flex justify-content-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="auth-content">
                  <div className="mb-5">
                    <h3 className="mb-3 sign-in-text">Sign In</h3>
                    <h4 className=" sign-in-detail-text ">
                      Login with your data that you entered during your
                      registration.
                    </h4>
                  </div>
                  <label id="login-label">PIN</label>
                  <div className="input-group mb-5">
                    <input
                      type="text"
                      // onKeyDown={(e) => {
                      //   const charCode = e.charCode || e.which;
                      //   if (charCode < 48 || charCode > 57) {
                      //     e.preventDefault();
                      //   }
                      // }}
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
                  <div className="d-flex justify-content-between align-items-center me-1">
                    <label id="login-label">Password</label>
                    <a
                      href="#forget-password"
                      className="mb-0"
                      id="forget-password"
                      onClick={() => setLoginForm(false)}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="input-group mb-5">
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      autoComplete="off"
                      className="form-control"
                      placeholder="Password"
                      required
                      {...register("password", { required: true })}
                    />
                    {passwordShown === false ? (
                      <FiLock
                        className="show_pswd input-icons"
                        onClick={togglePasswordVisiblity}
                      />
                    ) : (
                      <FiUnlock
                        className="show_pswd input-icons"
                        onClick={togglePasswordVisiblity}
                      />
                    )}
                  </div>
                  {!toasterLoader ? (
                    <button
                      type="submit"
                      className="submit-btn shadow-2 mb-3 me-1"
                    >
                      Log In
                    </button>
                  ) : (
                    <LoaderCenter />
                  )}
                  {/* <p onClick={() => setLoginForm(false)}>Forgot password? </p> */}
                </div>
              </form>
            )}
            {!loginForm && <Reset setLoginForm={setLoginForm} />}
          </div>
        </div>
      </div>
    </>
  );
}
