import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { useContext } from "react";
import { UserContext } from "../utils/context";
import { useState } from "react";

function UserOrAccountCreatedCard(props) {
  const navigate = useNavigate();

  const { activeAccount, user } = useContext(UserContext);
  const [isNewAccountCreated, setIsNewAccountCreated] = useState(false);
  const [newUserIndex, setNewUserIndex] = useState(0);
   
  useEffect(() => {
    if (activeAccount.authorizedUsers.length === 1) {
      setIsNewAccountCreated(true);
      console.log("New account created");
    } else {
      setIsNewAccountCreated(false);
      setNewUserIndex(activeAccount.authorizedUsers.length - 1);
      console.log("New account not created");
    }
  }, [activeAccount]);

  return (
    <Card className="m-2">
      {isNewAccountCreated && (
        <>
          <Card.Header>
            <h3>Account Created!</h3>
          </Card.Header>
          <Card.Body>
            {/* Display new account details */}
            <ListGroup>
              <ListGroup.Item>{`Account number: ${activeAccount.accountNumber}`}</ListGroup.Item>
              <ListGroup.Item>{`Account creation date: ${activeAccount.accountCreationDate}`}</ListGroup.Item>
              <ListGroup.Item>{`Openning balance: $${activeAccount.balance}`}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </>
      )}
      {!isNewAccountCreated && (
        <>
          <Card.Header>
            <h3>New User Added!</h3>
          </Card.Header>
          <Card.Body>
            {/* Display new account details */}
            <ListGroup>
              <ListGroup.Item>
              {`User's Name: ${activeAccount.authorizedUsers[newUserIndex].firstName } 
              ${activeAccount.authorizedUsers[newUserIndex].lastName }`}</ListGroup.Item>
              <ListGroup.Item>
              {`User's Email: ${activeAccount.authorizedUsers[newUserIndex].email }`}
              </ListGroup.Item>
              <ListGroup.Item className="fw-bold">
              {"If you want to new user to be able to make transactions, please log out and have that person log back in."}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </>
      )}

      <Card.Footer>
        {/* Add user button */}
        <Button
          className="m-3"
          variant="success"
          onClick={() => {
            props.addAuthorizedUser();
          }}
        >
          Add aonther authorized user
        </Button>
        {/* Go to transactions button */}
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id="deposit-money-button-tooltip">
              {props.submitButtonTooltipMessage}
            </Tooltip>
          }
        >
          <Button
            className="m-3"
            variant="success"
            onClick={() => {
              console.log("Updating who is logged in");
              props.setIsLoggedIn(true);
              props.setActiveAccount(activeAccount);
              props.setUser(activeAccount.authorizedUsers[0]);
              navigate("/maketransactions/");
            }}
          >
            Deposit money
          </Button>
        </OverlayTrigger>
      </Card.Footer>
    </Card>
  );
}

export default UserOrAccountCreatedCard;
