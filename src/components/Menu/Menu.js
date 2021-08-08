import React from "react";

import MenuLink from "./MenuLink";

const styles={
  margin: '1em',
  a: {
  textDecoration: 'none',
  color: "#000",
  margin: '1em',
  padding: '0 1em'
}
}

export default function Menu() {
  return (
    <div style={styles}>
      <MenuLink to="/" label="Home" style={styles.a}/>
      <MenuLink to="/about" label="About" style={styles.a}/>
      <MenuLink to="/contact" isActive label="Contact" style={styles.a}/>
      <MenuLink to="/posts" label="Posts" style={styles.a}/>
    </div>
  );
}
