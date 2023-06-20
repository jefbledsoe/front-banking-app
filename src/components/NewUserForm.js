import React from "react";
import UserInputFields from "./UserInputFields";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Card } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { UserContext } from "../utils/context";

function NewUserForm(props) {
  const { isloggedIn } = useContext(UserContext);

  return (
    <Card>
      <Card.Header>
        {isloggedIn && (
          <div className="fw-bold">Adding user to the account</div>
        )}
        {!isloggedIn && <div className="fw-bold">Create Account</div>}
      </Card.Header>
      <Card.Body>
        {/* input fields */}
        <UserInputFields fields={props.fields} />
        {/* Button and alert section */}
        <form id="new-user-form" className="container">
          <Button
            variant="success"
            id="new-user-form-submit"
            type="submit"
            className="m-3"
            disabled={props.isUserFormSubmitButtonDisabled}
            onClick={props.submitButtonClickHandler}
          >
            {props.submitButtonText}
          </Button>
          {props.showAlert && (
            <Alert
              id="new-user-form-submit-alert"
              className="m-3"
              variant="danger"
            >
              One or more fields are empty or are invalid. Please fill out all
              fields.
            </Alert>
          )}
        </form>
      </Card.Body>
    </Card>
  );
}

export default NewUserForm;
