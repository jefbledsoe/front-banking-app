import React from "react";
import Alert from "react-bootstrap/Alert";

function Field(props) {
  if (props.isFieldDisabled === true) {
    return null;
  } else {
    return (
      <div className="mb-3">
        <label htmlFor={props.id} className="form-label fw-semibold">
          {props.label}
        </label>
        <br />
        <input
          id={props.id}
          className="form-control"
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        {props.isFieldExtraMessageEnabled && (
          <div id={`${props.id}-ExtraMessage`} className="form-text">
            {props.fieldExtraMessage}
          </div>
        )}
        {props.isAlertActive && (
          <Alert
            id={`${props.id}-invalid-alert`}
            className="m-3"
            variant="danger"
          >
            {" "}
            {props.alertFieldMessage}
          </Alert>
        )}
      </div>
    );
  }
}

export default Field;
