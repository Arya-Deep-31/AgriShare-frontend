/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "./More.module.scss";
import InputControl from "./InputControl";
import { createTrash } from "../../Global/Trash/trashSlice";
const More = (props) => {
  const { setMore } = props;
  const [values, setValues] = useState({
    name: "",
    location: "",
    company: "",
    details: "",
    number: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.trash);
  const { user } = useSelector((state) => state.auth);
  const handleSubmission = () => {
    if (!values.name || !values.company || !values.details || !values.location) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    const data = {
      name: values.name,
      location: values.location,
      company: values.company,
      details: values.details,
      number: values.number,
      createdby: user.result.isFarmer ? "farmer" : "org",
    };
    dispatch(createTrash(data)).then(() => {
      if (isSuccess) {
        setMore(false);
        toast.success("item Created");
      }
    });
    setMore(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>
          {user.result.isFarmer ? "Add Request" : "Lend Service"}
        </h1>

        <div className={styles.fields}>
          <div className={styles.fieldsChild}>
            {!user.result.isFarmer && (
              <InputControl
                label="Company"
                placeholder="Enter company name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, company: event.target.value }))
                }
                type="text"
              />
            )}
            <InputControl
              label="Name"
              placeholder="Enter name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Location"
              placeholder="Enter Location"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, location: event.target.value }))
              }
              type="text"
            />
          </div>
          <div className={styles.fieldsChild}>
            <InputControl
              label="Description"
              placeholder="Enter Description"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, details: event.target.value }))
              }
              type="textarea"
            />
            <InputControl
              label="Number"
              placeholder="Enter your Number"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, number: event.target.value }))
              }
              type="textarea"
            />
          </div>
        </div>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Upload
          </button>
          <button
            className={styles.cancel}
            onClick={() => {
              setMore(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;
