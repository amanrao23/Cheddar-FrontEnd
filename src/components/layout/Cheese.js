import React, { Fragment } from "react";
import cheese from "../../img/cheese.gif";

const Cheese = () => (
  <Fragment>
    <img
      src={cheese}
      style={{
        marginTop: 300,
        width: "200px",
        margin: "auto",
        display: "block",
      }}
      alt="Loading..."
    />
  </Fragment>
);

export default Cheese;
