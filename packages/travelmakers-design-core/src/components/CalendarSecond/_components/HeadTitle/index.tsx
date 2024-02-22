import React from "react";
import { Typography } from "../../../Typography";
import useStyles from "../../Calendar.style";

const DAYS_KO = ["일", "월", "화", "수", "목", "금", "토"];
const DAYS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const HeadTitle: React.FC<{ locale?: "ko" | "en" }> = ({ locale = "ko" }) => {
  const { classes, cx } = useStyles();
  const days = locale === "ko" ? DAYS_KO : DAYS_EN;
  return (
    <tr>
      {days.map((day) => {
        return (
          <th key={day} className={classes.tableCell}>
            <Typography level="body2" color="primary1">
              {day}
            </Typography>
          </th>
        );
      })}
    </tr>
  );
};

export default HeadTitle;
