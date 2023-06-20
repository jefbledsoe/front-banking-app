import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../utils/context";
import { Button, Card, Form, ListGroup, Row, Col } from "react-bootstrap";

function TransactionHistoryRecord(props) {
  function addCommaSeparators(num, separator = ",") {
    if (num === undefined) {
      return "0";
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
  return (
    <Row>
      <Col className="sm">{props.transaction.date}</Col>
      <Col className="sm">{props.transaction.type}</Col>
      <Col className="sm">{props.transaction.vendor}</Col>
      <Col className="sm">{props.transaction.category}</Col>
      <Col className="sm">{props.transaction.transactor}</Col>
      <Col className="sm">{`$${addCommaSeparators(
        props.transaction.amount
      )}`}</Col>
      <Col className="sm">{`$${addCommaSeparators(
        props.transaction.balance
      )}`}</Col>
    </Row>
  );
}

export default TransactionHistoryRecord;
