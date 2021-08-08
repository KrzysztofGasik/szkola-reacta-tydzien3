import React from "react";

const active = {
  color: "red",
};

export default function MenuLink({ to, label, style, isActive }) {
  return (
    <a href={to} style={isActive ? {...style,...active} : style}>
      {label}
    </a>
  );
}
