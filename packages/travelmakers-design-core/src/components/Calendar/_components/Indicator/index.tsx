import React from "react";
import useStyles from "./Indicator.style";
import { getDate, getDay } from "@travelmakers/utils";
import { Typography } from "../../../Typography";
import { Divider } from "../../../Divider";
import { differenceInDays } from "date-fns";
import { SelectedDays } from "../../Calendar.type";

interface Props {
  checked: SelectedDays;
  type: "tour" | "move-in";
}

const Indicator: React.FC<Props> = ({ checked, type }) => {
  const { classes, cx } = useStyles();
  const isTour = type === "tour";
  const headlineText = {
    from: !isTour ? "체크인" : "투어 예정일",
    to: !isTour ? "체크아웃" : "투어 예정 시간",
    description: !isTour
      ? "일정을 <br /> 선택해주세요."
      : "시간을 <br /> 선택해주세요.",
  };

  const generateToHeadlineText = () => {
    if (isTour) {
      if (!checked.time?.hour && !checked.time?.minutes) {
        return (
          <Typography
            level="caption"
            color="primary3"
            dangerouslySetInnerHTML={{ __html: headlineText.description }}
          />
        );
      }
      return (
        <div className={classes.indicatorSelectedDay}>
          <Typography level="subhead1" color="primary1" strong>
            {`${checked.time.hour}:${checked.time.minutes}`}
          </Typography>
        </div>
      );
    } else {
      if (!checked.to) {
        return (
          <Typography
            level="caption"
            color="primary3"
            dangerouslySetInnerHTML={{ __html: headlineText.description }}
          />
        );
      }
      return (
        <div className={classes.indicatorSelectedDay}>
          <Typography level="subhead1" color="primary1" strong>
            {getDate(checked.to.date).format}
          </Typography>
          <Typography level="caption" color="primary1">
            {getDay(checked.to.date)}
          </Typography>
        </div>
      );
    }
  };

  return (
    <div className={classes.indicatorBox}>
      <div className={classes.indicatorInnerBox}>
        <div>
          <Typography level="body3" color="secondary1" strong>
            {headlineText.from}
          </Typography>

          {!checked.from ? (
            <Typography level="caption" color="primary3">
              일정을 <br /> 선택해주세요.
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
            {headlineText.to}
          </Typography>

          {generateToHeadlineText()}
        </div>
      </div>
      {checked.from && checked.to && !isTour && (
        <div className={classes.indicatorDateCountBox}>
          <div>
            <Typography level="subhead2" color="primary1">
              {differenceInDays(checked.to.date, checked.from.date)}박
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Indicator;
