import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";


const styles = {
        display: "flex",
        alignItems: "center",
        icon: {
          background: "#f44336",
          width: "40px",
          height: "40px",
          display: "grid",
          placeContent: "center",
          borderRadius: "50%",
          color: "#fff",
          margin: "1em",
        },
        desc: {
          lineHeight: "0.5em",
        },
        menuIcon: {
          margin: "0 1em 0 auto",
          color: "#757575",
        },
}

export default function CardTop() {
  return (
    <div style={styles}>
      <div style={styles.icon}>R</div>
      <div style={styles.desc}>
        <p>Shrimp and Chorizo Paella</p>
        <p>September 14, 2016</p>
      </div>
      <div style={styles.menuIcon}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
}
