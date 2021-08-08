import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faHeart,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#757575",
  padding: "0 1em",
  left: {
    icon: {
      margin: "1em 0.5em",
    },
  },
  right: {
    cursor: "pointer",
  },
};

const shareIcon = (
  <FontAwesomeIcon icon={faShareAlt} style={styles.left.icon} />
);
const likeIcon = (
  <FontAwesomeIcon icon={faHeart} style={styles.left.icon} />
);
const arrowIcon = <FontAwesomeIcon icon={faArrowDown} />;

export default function CardBottom({ onClick }) {

  return (
    <div style={styles}>
      <div style={styles.left}>
        {likeIcon}
        {shareIcon}
      </div>
      <div onClick={onClick} style={styles.right}>
        {arrowIcon}
      </div>
    </div>
  );
}
