import React from "react";
import useStyles from "./Indicator.style";
import { getDate, getDay } from "@travelmakers-design-v2/utils";
import { Typography } from "../../../Typography";
import { Divider } from "../../../Divider";
import { differenceInDays } from "date-fns";

const Indicator = ({ checked, onClear }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.indicatorBox}>
      <div className={classes.indicatorInnerBox}>
        <div>
          <Typography level="body3" color="secondary1" strong>
            체크인
          </Typography>

          {!checked.from ? (
            <Typography level="caption" color="primary3">
              일정을 <br />
              선택해주세요.
            </Typography>
          ) : (
            <div className={classes.indicatorSelectedDay}>
              <Typography level="subhead1" color="primary1" strong>
                {getDate(checked.from.date).format}
              </Typography>
              <Typography level="caption" color="primary1">
                {getDay(checked.from.date)}
              </Typography>
            </div>
          )}
        </div>
        <Divider type={"vertical"} color="outline" />
        <div>
          <Typography level="body3" color="secondary1" strong>
            체크아웃
          </Typography>
          {!checked.to ? (
            <Typography level="caption" color="primary3">
              일정을 <br />
              선택해주세요.
            </Typography>
          ) : (
            <div className={classes.indicatorSelectedDay}>
              <Typography level="subhead1" color="primary1" strong>
                {getDate(checked.to.date).format}
              </Typography>
              <Typography level="caption" color="primary1">
                {getDay(checked.to.date)}
              </Typography>
            </div>
          )}
        </div>
      </div>
      {checked.from && checked.to && (
        <div className={classes.indicatorDateCountBox}>
          <div>
            <Typography level="subhead2" color="primary1">
              {differenceInDays(checked.to.date, checked.from.date)}박
            </Typography>
            {/* <br />
            <Typography
              level="caption"
              color="primary1"
              style={{ cursor: "pointer" }}
              onClick={() => onClear()}
              underline
            >
              일정변경
            </Typography> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Indicator;
