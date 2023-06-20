import { useContext, useState, useEffect } from "react";
import { UserContext } from "../utils/context";
import TransactionHistory from "../components/TransactionHistory";
import TransactionWindow from "../components/TransactionWindow";
import { Card, Button, Alert } from "react-bootstrap";

function MakeTransactions() {
  // handles transactions, activeAccount updates force updates in Indext.js accounts w/ useEffect

  // imported context
  const { activeAccount, setActiveAccount } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { setCurrentPath } = useContext(UserContext);
  // local states

  const [transactionType, setTransactionType] = useState(""); //withdrawal or deposit
  const [transactionResultMessage, setTransactionResultMessage] = useState("");
  const [transactionResultAlertVariant, setTransactionResultAlertVariant] =
    useState("");

  //----Component visibility states----
  const [showTransactionWindow, setShowTransactionWindow] = useState(false);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  const [showTransactionResultMessage, setShowTransactionResultMessage] =
    useState(false);

  // functionality
  function addCommaSeparators(num, separator = ",") {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }

  function openTransactionHistory() {
    window.event.preventDefault();
    setShowTransactionHistory(!showTransactionHistory);
  }

  function redudantButtonClick(e) {
    const buttonClickedValue = e.target.innerText;
    if (buttonClickedValue === transactionType && showTransactionWindow) {
      //console.log("Redundant button click", buttonClickedValue);
      setShowTransactionWindow(false);
    } else {
      //console.log("New button click", buttonClickedValue);
      setTransactionType(buttonClickedValue);
      setShowTransactionWindow(true);
      setShowTransactionResultMessage(false);
    }
  }

  useEffect(() => {
    setCurrentPath("/maketransactions/");
  }, []);

  return (
    <div className="container">
      <Card>
        <Card.Header>
          <h1>{`Account Balance: $${addCommaSeparators(
            activeAccount.balance
          )}`}</h1>
        </Card.Header>
        <Card.Header id="transaction-button-tray">
          <Button
            onClick={(e) => {
              redudantButtonClick(e);
            }}
            variant="success m-3"
          >
            Deposit
          </Button>
          <Button
            onClick={(e) => {
              redudantButtonClick(e);
            }}
            variant="success m-3"
          >
            Withdrawal
          </Button>
          <Button
            onClick={() => {
              openTransactionHistory();
              setShowTransactionResultMessage(false);
            }}
            variant="success m-3"
          >
            Transaction History
          </Button>
        </Card.Header>
        {/* Displaying Transaction window while determines transaction details */}
        {showTransactionWindow && (
          <TransactionWindow
            transactionType={transactionType}
            setTransactionResultAlertVariant={setTransactionResultAlertVariant}
            setShowTransactionResultMessage={setShowTransactionResultMessage}
            setTransactionResultMessage={setTransactionResultMessage}
            setShowTransactionWindow={setShowTransactionWindow}
          />
        )}
        {/* Displaying post transaction submit message */}
        {showTransactionResultMessage && (
          <Alert variant={transactionResultAlertVariant}>
            {transactionResultMessage}
          </Alert>
        )}
        {/* Displaying transaction history */}
        {showTransactionHistory && (
          <div className="container">
            <TransactionHistory activeAccount={activeAccount} />
          </div>
        )}
      </Card>
    </div>
  );
}
export default MakeTransactions;
