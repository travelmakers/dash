import React from "react";
import { Typography } from "../../../Typography";
import { Button } from "../../../Button";

const HeadMonthly = ({
  title,
  onClear,
  locale = "ko",
}: {
  title: string;
  onClear: () => void;
  locale?: "ko" | "en";
}) => {
  return (
    <>
      <Typography level="subhead2" color="primary1" strong>
        {title}
      </Typography>
      <Button variant="text" size="small" roundness onClick={onClear}>
        {locale === "ko" ? "초기화" : "clear"}
      </Button>
    </>
  );
};

export default HeadMonthly;
