import React from "react";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function NavOption(props) {
  return (
    <li key={`${props.index}`} className={props.navLink.parentClassName}>
      <OverlayTrigger
        overlay={
          <Tooltip id={props.navLink.tooltip}>{props.navLink.tooltip}</Tooltip>
        }
        placement="top"
      >
        <Link
          to={props.navLink.to}
          id={props.navLink.id}
          className={props.navLink.className}
        >
          {props.navLink.text}
        </Link>
      </OverlayTrigger>
    </li>
  );
}

export default NavOption;


