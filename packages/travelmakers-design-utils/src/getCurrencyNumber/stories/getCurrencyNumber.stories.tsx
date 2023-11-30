import React from "react";
import { getCurrencyNumber } from "../getCurrencyNumber";

export default {
  title: "@travelmakers/utils/getCurrencyNumber",
};

export const Default = (props) => {
  return (
    <div>
      {getCurrencyNumber(50000)}
      <br />
    </div>
  );
};
