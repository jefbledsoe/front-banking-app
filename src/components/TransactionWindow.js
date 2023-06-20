import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../utils/context";

function TransactionWindow(props) {
  // IMPORTED AND PROPS STATES
  ////////////////////////////////
  

  //IMPORTED CONTEXT -- START
  const { activeAccount, setActiveAccount } = useContext(UserContext);
  //Type: object,
  //Purpose: to access the activeAccount.balance, activeAccount.transactions, and activeAccount.id
  const { user } = useContext(UserContext);
  //Type: object,
  //Purpose: to access the user.firstName and user.lastName for the transaction history

  //IMPORTED CONTEXT -- END

  /* EXPECTED PROPS -- START
  transactionType: 
   Type: string, 
   Purpose: to determine if transaction is a withdrawal or deposit
  setShowTransactionWindow:  
   Type:function, 
   Purpose: to close the transaction window
  setTransactionResultMessage:  
   Type:function, 
   Purpose: to set the message displayed in the transaction result alert
  setTransactionResultAlertVariant: 
    Type:function, 
   Purpose: to set the variant of the transaction result alert
  setShowTransactionResultMessage: 
   Type: function, 
   Purpose: to show the transaction result alert

  EXPECTED PROPS -- END
*/

  // LOCAL STATES
  ////////////////////////////////

  // LOCAL STATES: Normal -- START
  const [transDate, setTransDate] = useState("");
  const [transAmount, setTransAmount] = useState("");
  const [transVendor, setTransVendor] = useState("");
  const [transCategory, setTransCategory] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [showTransactionAlert, setShowTransactionAlert] = useState(false);
  const [inputFieldClassNameModifier, setInputFieldClassNameModifier] = useState("form-control");
  // LOCAL STATES: Normal -- END

  // LOCAL STATES: states expected to passed into a subcomponent  -- START
  // null
  // LOCAL STATES: states expected to passed into a subcomponent  -- END

  // Local variables -- START
  //var inputFieldClassNameModifier = "form-control";
  // Local variables -- END

  

  // FUNCTIONALITY
  function addCommaSeparators(num, separator = ",") {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }

  function updateTransactionValues(e) {
    setShowTransactionAlert(false);
    const amount = e.target.value;
    if (isValidInput(amount, props.transactionType)) {
      setTransAmount(amount);
      setTransDate(new Date().toISOString().slice(0, 10));
      setTransVendor("ATM");
      setTransCategory(`ATM-Cash ${props.transactionType}`);
      setIsSubmitDisabled(false);
     } else {
      setTransAmount(amount);
      setIsSubmitDisabled(true);
      
      
    }
  }

  function cancelTransaction() {
    setTransAmount("");
    setTransDate("");
    setTransVendor("");
    setTransCategory("");
    setIsSubmitDisabled(true);
    props.setShowTransactionWindow(false);
  }

  function isValidInput(amount, TransactionType) {
    if (amount < 0) {
      setInputFieldClassNameModifier("m-3 alert-danger");
      setAlertMessage("Please enter a positive number");
      setShowTransactionAlert(true);
      setIsSubmitDisabled(true);
      return false;
    } else if (amount === "") {
      setInputFieldClassNameModifier("m-3 alert-danger");
      setAlertMessage("Please enter a number");
      setShowTransactionAlert(true);
      setIsSubmitDisabled(true);
      return false;
    } else if (amount === "0") {
      setInputFieldClassNameModifier("m-3 alert-danger");
      setAlertMessage("Please enter a number greater than 0");
      setShowTransactionAlert(true);
      setIsSubmitDisabled(true);
      return false;
    } else if (
      TransactionType === "Withdrawal" &&
      amount > activeAccount.balance
    ) {
      setInputFieldClassNameModifier("m-3 alert-danger");
      setAlertMessage("Insufficient funds");
      setShowTransactionAlert(true);
      setIsSubmitDisabled(true);
      return false;
    } else {
      setInputFieldClassNameModifier("form-control")
      setShowTransactionAlert(false);
      setIsSubmitDisabled(false);
      return true;
    }
  }

  function submitTransaction() {
    console.log("submitting transaction");
    let amount = parseInt(transAmount);
    if (props.transactionType === "Withdrawal") {
      amount = -amount;
    }

    let newTransaction = {
      id: activeAccount.transactions.length + 1,
      type: props.transactionType,
      date: transDate,
      amount: amount > 0 ? parseInt(amount) : `(${-amount})`,
      vendor: transVendor,
      category: transCategory,
      transactor: `${user.firstName} ${user.lastName}`,
      balance: parseInt(activeAccount.balance) + parseInt(amount),
    };

    let tempAccount = { ...activeAccount };
    tempAccount.balance = newTransaction.balance;
    tempAccount.transactions.unshift(newTransaction);
    setActiveAccount(tempAccount);

    //  ?????????????????????
    props.setTransactionResultAlertVariant("success");
    props.setShowTransactionResultMessage(true);
    props.setTransactionResultMessage("Transaction Successful");
    props.setShowTransactionWindow(false);
    setIsSubmitDisabled(true);
    cancelTransaction();
  }
  
/*-----------------Transaction Window ---------------------- */
  return (
    <Card>
      <Card.Body id="transaction-preview-window">
        <Card.Title>
          <label className="form-label">
            {`${props.transactionType} Amount`}
          </label>
        </Card.Title>
        <input
          className= "form-control"
          onChange={(e) => updateTransactionValues(e)}
          value={transAmount}
          id="transaction-input-amount"
          type="number"
          placeholder="Enter transaction amount"
        ></input>
        {showTransactionAlert && (
          <div id="transaction-alert" className={inputFieldClassNameModifier}>
            <p>{alertMessage}</p>
          </div>
        )}

        <Card.Title>Transaction Preview</Card.Title>
        <ListGroup>
          <ListGroup.Item>{`Transaction type: ${props.transactionType}`}</ListGroup.Item>
          <ListGroup.Item>{`Transaction vendor: ${transVendor}`}</ListGroup.Item>
          <ListGroup.Item>{`Transaction category: ${transCategory}`}</ListGroup.Item>
          <ListGroup.Item>{`Transaction amount: $${addCommaSeparators(
            transAmount
          )}`}</ListGroup.Item>
          <ListGroup.Item>{`Transaction date: ${transDate}`}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Button
          id="submit-transaction"
          variant="success"
          onClick={submitTransaction}
          disabled={isSubmitDisabled}
        >
          Submit Transaction
        </Button>
        <Button
          id="cancel-transaction"
          variant="danger"
          className="m-3"
          onClick={cancelTransaction}
        >
          Cancel Transaction
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default TransactionWindow;
