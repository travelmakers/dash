import React from "react";
import getPayMethod from "../getPayMethod";

export default {
  title: "@travelmakers/utils/getPayMethod",
};

export const Default = (props) => {
  return (
    <div>
      {getPayMethod("card", "samsung", 3, "ko")}
      <br />
      {getPayMethod("card", "samsung", 3, "en")}
      <br />
      {getPayMethod("card", "samsung", 0, "en")}
      <br />

      {getPayMethod("vbank", "samsung", 3, "ko")}
      <br />
      {getPayMethod("vbank", "samsung", 3, "en")}
      <br />

      {getPayMethod("naverpay", "samsung", 3, "ko")}
      <br />
      {getPayMethod("naverpay", "samsung", 3, "en")}
      <br />
      {getPayMethod("naverpay", "samsung", 0, "en")}
      <br />

      {getPayMethod("kakaopay", "samsung", 3, "ko")}
      <br />
      {getPayMethod("kakaopay", "samsung", 3, "en")}
      <br />
      {getPayMethod("kakaopay", "samsung", 0, "en")}
      <br />

      {getPayMethod("samsung", "samsung", 3, "ko")}
      <br />
      {getPayMethod("samsung", "samsung", 3, "en")}
      <br />
      {getPayMethod("samsung", "samsung", 0, "en")}
      <br />
    </div>
  );
};
