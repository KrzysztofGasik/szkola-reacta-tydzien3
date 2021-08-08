import React from "react";

import propTypes from "prop-types";
import matchColor from "./ColorDictionary";

const styles = {
  padding: "1em",
  margin: "1em",
  height: 200,
  width: 400
};

function TextArea({ bgColor, color, borderSize, borderRadius, borderColor }) {
  return (
    <textarea
      type="text"
      name="textAreaField"
      style={{
        ...styles,
        backgroundColor: matchColor(bgColor),
        color: matchColor(color),
        borderWidth: borderSize,
        borderRadius: borderRadius,
        borderColor: matchColor(borderColor),
      }}
    ></textarea>
  );
}

TextArea.propTypes = {
  bgColor: propTypes.string,
  color: propTypes.string,
  borderSize: propTypes.string,
  borderRadius: propTypes.string,
  borderColor: propTypes.string,
};

TextArea.defaultProps = {
  bgColor: "exodusfruit",
  color: "white",
  borderSize: "5px",
  borderRadius: "10px",
  borderColor: "deepkoamaru",
};

export default TextArea;
