import React from "react";
import useStyles from "./Indicator.style";
import { getDate, getDay } from "@travelmakers/utils";
import { Typography } from "../../../Typography";
import { Divider } from "../../../Divider";
import { differenceInDays } from "date-fns";
import { SelectedDays } from "../../Calendar.type";

export interface Props {
  selected: SelectedDays;
  type: "tour" | "move-in";
  text: {
    from: string;
    to: string;
    descriptionFrom: string;
    descriptionTo: string;
  };
  topIndicatorPosition?: string;
  locale?: "ko" | "en";
}

export const Indicator: React.FC<Props> = ({
  selected,
  type,
  topIndicatorPosition,
  text,
  locale = "ko",
}) => {
  const { classes } = useStyles({ topIndicatorPosition });
  const isTour = type === "tour";

  const generateToHeadlineText = () => {
    if (isTour) {
      if (!selected.time?.hour || !selected.time?.minutes) {
        return (
          <Typography
            level="caption"
            color="primary3"
            dangerouslySetInnerHTML={{ __html: text.descriptionTo }}
          />
        );
      }
      return (
        <div className={classes.indicatorSelectedDay}>
          <Typography level="subhead1" color="primary1" strong>
            {`${selected.time.hour}:${selected.time.minutes}`}
          </Typography>
        </div>
      );
    } else {
      if (!selected.to) {
        return (
          <Typography
            level="caption"
            color="primary3"
            dangerouslySetInnerHTML={{ __html: text.descriptionTo }}
          />
        );
      }
      return (
        <div className={classes.indicatorSelectedDay}>
          <Typography level="subhead1" color="primary1" strong>
            {getDate(selected.to.date).format}
          </Typography>
          <Typography level="caption" color="primary1">
            {getDay(selected.to.date, locale)}
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
            {text.from}
          </Typography>

          {!selected.from ? (
            <Typography
              level="caption"
              color="primary3"
              dangerouslySetInnerHTML={{ __html: text.descriptionFrom }}
            />
          ) : (
            <div className={classes.indicatorSelectedDay}>
              <Typography level="subhead1" color="primary1" strong>
                {getDate(selected.from.date).format}
              </Typography>
              <Typography level="caption" color="primary1">
                {getDay(selected.from.date, locale)}
              </Typography>
            </div>
          )}
        </div>
        <Divider type={"vertical"} color="outline" />
        <div>
          <Typography level="body3" color="secondary1" strong>
            {text.to}
          </Typography>

          {generateToHeadlineText()}
        </div>
      </div>
      {selected.from && selected.to && !isTour && (
        <div className={classes.indicatorDateCountBox}>
          <div>
            <Typography
              className={classes.indicatorNight}
              level="subhead2"
              color="primary1"
            >
              {differenceInDays(selected.to.date, selected.from.date)}박
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Indicator;
