import React from "react";

import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import matchColor from "./ColorDictionary";

const userIcon = <FontAwesomeIcon icon={faUser} />;

const styles = {
  padding: "1em",
  margin: "1em 0",
  border: "none",
  borderRadius: "0.5em",
  fontSize: "1.2em",
  fontWeight: "bold",
};

function Button({ label, bgColor, color }) {
  return (
    <button
      style={{
        ...styles,
        backgroundColor: matchColor(bgColor),
        color: matchColor(color),
        cursor: "pointer",
      }}
    >
      {userIcon} {label}
    </button>
  );
}

Button.propTypes = {
  label: propTypes.string,
  bgColor: propTypes.string,
  color: propTypes.string,
};

Button.defaultProps = {
  label: "Click me",
  bgColor: "turbo",
  color: "deep cove",
};

export default Button;
