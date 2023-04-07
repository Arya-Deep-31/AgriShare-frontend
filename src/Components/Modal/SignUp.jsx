/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../../Global/Auth/authSlice";
import styles from "./SignUp.module.scss";
import InputControl from "./InputControl";
const SignUp = (props) => {
  const { setSignup, setOpenLogin } = props;
  const [show, setShow] = useState("show");
  const [values, setValues] = useState({
    email: "",
    pass: "",
    cpass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   if (isSuccess || user) {
  //     setSignup(false);
  //     toast.success("Account Created");
  //   }
  //   dispatch(reset());
  // }, [user, dispatch, isError, isSuccess, message, setSignup]);

  const handleSubmission = () => {
    if (!values.email || !values.pass || !values.cpass) {
      setErrorMsg("Fill all fields");
      return;
    }
    if (values.pass !== values.cpass) {
      setErrorMsg("Password Don't Match");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    const data = { email: values.email, pass: values.pass };
    dispatch(register(data));
  };
  const handleClick = () => {
    setSignup(false);
    setOpenLogin(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div>
          <h1 className={styles.heading}>Sign Up</h1>
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            <InputControl
              label="Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Enter email address"
              type="email"
            />

            <InputControl
              label="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
              placeholder="Enter Password"
              type={show !== "show" ? "text" : "password"}
            />
            <InputControl
              label="Confirm Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, cpass: event.target.value }))
              }
              placeholder="Enter Password"
              type={show !== "show" ? "text" : "password"}
            />
            {values.pass.length > 1 && (
              <p
                onClick={() => setShow(show === "show" ? "Hide" : "show")}
                style={{
                  position: "absolute",
                  top: "53%",
                  fontSize: "14px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {show} password
              </p>
            )}
            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                Sign Up
              </button>
              <button
                className={styles.cancel}
                onClick={() => {
                  setSignup(false);
                }}
              >
                Cancel
              </button>
              <p>
                Do not have an account?
                <span>
                  <a onClick={handleClick}> Sign up</a>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <img src="/images/login.png" alt="login vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
