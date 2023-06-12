import React from "react";
import { Typography } from "../../../Typography";
import { Button } from "../../../Button";

const HeadMonthly = ({
  title,
  onClear,
}: {
  title: string;
  onClear: () => void;
}) => {
  return (
    <>
      <Typography level="subhead2" color="primary1" strong>
        {title}
      </Typography>
      <Button variant="text" size="small" roundness onClick={onClear}>
        초기화
      </Button>
    </>
  );
};

export default HeadMonthly;
