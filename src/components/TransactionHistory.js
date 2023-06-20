import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../utils/context";
import { Button, Card, Form, ListGroup, Row, Col } from "react-bootstrap";
import TransactionHistoryRecord from "./TransactionHistoryRecord";

function TransactionHistory(props) {
  const { activeAccount } = useContext(UserContext);
  console.log(activeAccount.transactions);

  //   const transactionCount = props.activeAccount.transactions.length;
  let isTransactionsEmpty = true;
  let transactionCount = props.activeAccount.transactions.length;

  if (
    transactionCount === 0 ||
    transactionCount === null ||
    transactionCount === undefined
  ) {
    isTransactionsEmpty = true;
  } else {
    isTransactionsEmpty = false;
  }
  

  return (
    <Card>
      <Card.Header>
        <h1>Transaction History</h1>
      </Card.Header>
      <Card.Header>
        <Row>
          <Col className="sm">
            <h5>Date</h5>
          </Col>
          <Col className="sm">
            <h5>Type</h5>
          </Col>
          <Col className="sm">
            <h5>Vendor</h5>
          </Col>
          <Col className="sm">
            <h5>catagoty</h5>
          </Col>
          <Col className="sm">
            <h5>Transactor</h5>
          </Col>
          <Col className="sm">
            <h5>Amount</h5>
          </Col>
          <Col className="sm">
            <h5>Updated Balance</h5>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {/* { isShowTransactionsEnabled && ()} */}
        {isTransactionsEmpty && (
          <Row className="text-center">
            <h5>No transactions to show</h5>
          </Row>
        )}
        {!isTransactionsEmpty &&
          props.activeAccount.transactions.map((transaction, index) => {
            return (
              <TransactionHistoryRecord key={index} transaction={transaction} />
            );
          })}
      </Card.Body>
    </Card>
  );
}

export default TransactionHistory;
