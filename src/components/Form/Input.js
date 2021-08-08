import React from "react";

import propTypes from "prop-types";
import matchColor from "./ColorDictionary";

const styles = {
  padding: "1em",
  margin: "1em 0",
};

function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
  return (
    <input
      type="text"
      name="textInput"
      style={{
        ...styles,
        backgroundColor: matchColor(bgColor),
        color: matchColor(color),
        borderWidth: borderSize,
        borderRadius: borderRadius,
        borderColor: matchColor(borderColor),
      }}
    />
  );
}

Input.propTypes = {
  bgColor: propTypes.string,
  color: propTypes.string,
  borderSize: propTypes.string,
  borderRadius: propTypes.string,
  borderColor: propTypes.string,
};

Input.defaultProps = {
  bgColor: "junebud",
  color: "deep cove",
  borderSize: "5px",
  borderRadius: "10px",
  borderColor: "pureapple",
};

export default Input;
