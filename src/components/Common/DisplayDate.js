import React, { Fragment } from "react";

const DisplayDate = ({ value }) => {
  const val = new Date(value);
  return (
    <Fragment>
      {`${val
        .toLocaleString("utc", { month: "long" })
        .toString()
        .substr(0, 3)} ${val.getDate()}, ${val.getFullYear()}`}
    </Fragment>
  );
};

export default DisplayDate;
