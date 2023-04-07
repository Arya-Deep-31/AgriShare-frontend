/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../../Global/Auth/authSlice";
import InputControl from "./InputControl";
import styles from "./Login.module.scss";

const Login = (props) => {
  const { setOpenLogin, setSignup } = props;
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [show, setShow] = useState("show");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //     setSubmitButtonDisabled(false);
  //   }
  //   if (isSuccess || user) {
  //     setOpenLogin(false);
  //   }
  //   dispatch(reset());
  // }, [user, dispatch, isError, isSuccess, message, setOpenLogin]);
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    dispatch(login(values));
  };
  const handleClick = () => {
    setOpenLogin(false);
    setSignup(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div>
          <h1 className={styles.heading}>Login</h1>
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
                Login
              </button>
              <button
                className={styles.cancel}
                onClick={() => {
                  setOpenLogin(false);
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

export default Login;
