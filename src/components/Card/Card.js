import { React, useState } from "react";

import CardTop from "./CardTop";
import CardImage from "./CardImage";
import CardDesc from "./CardDesc";
import CardBottom from "./CardBottom";
import CardMore from "./CardMore";

const styles = {
  width: 340,
  margin: "0 auto",
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
};

export default function Card() {
  const [toggle, setViewMore] = useState(false);

  const showMore = () => {
    setViewMore(!toggle);
  };
  return (
    <div style={styles}>
      <CardTop />
      <CardImage />
      <CardDesc />
      <CardBottom onClick={showMore} />
      {toggle === true && <CardMore />}
    </div>
  );
}
