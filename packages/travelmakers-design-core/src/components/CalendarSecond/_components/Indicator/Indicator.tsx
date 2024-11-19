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
  isBridgeCalender?: boolean;
  onBridgeCalenderClick?: () => void;
}

export const Indicator: React.FC<Props> = ({
  selected,
  type,
  topIndicatorPosition,
  text,
  locale = "ko",
                                             isBridgeCalender,
  onBridgeCalenderClick
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
            dangerouslySetInnerHTML={{ __html: text?.descriptionTo }}
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
            dangerouslySetInnerHTML={{ __html: text?.descriptionTo }}
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
        <div className={classes.indicatorSelectedDayContainer}>
          <Typography level="body3" color="secondary1" strong>
            {text?.from}
          </Typography>

          {!selected.from ? (
            <Typography
              level="caption"
              color="primary3"
              dangerouslySetInnerHTML={{ __html: text?.descriptionFrom }}
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
        <div className={classes.indicatorSelectedDayContainer}>
          <Typography level="body3" color="secondary1" strong>
            {text?.to}
          </Typography>

          {generateToHeadlineText()}
        </div>
      </div>
      {isBridgeCalender && !isTour && !selected.to && (
          <div className={classes.indicatorContractUsBox} onClick={onBridgeCalenderClick}>
            <div>
              <Typography
                  className={classes.indicatorNight}
                  level="subhead2"
                  color="primary1"
              >
                {locale === "ko" ? "문의" : " Contact Us"}
              </Typography>
            </div>
              <img
                  className={classes.bridgeTooltip}
                  src={locale==="ko"? "https://hotel-01.s3.ap-northeast-2.amazonaws.com/next/event/bridge_calendar/tooltip_bridge_calendar_ko.png" : "https://hotel-01.s3.ap-northeast-2.amazonaws.com/next/event/bridge_calendar/tooltip_bridge_calendar_en.png"}
                  width={locale==="ko"? "243" : "184"}
                  height={locale==="ko"? "46" : "56"}
                  alt={"tooltip_bridge"}
              />
          </div>
      )}
      {selected.from && selected.to && !isTour && (
          <div className={classes.indicatorDateCountBox}>
            <div>
              <Typography
                  className={classes.indicatorNight}
                  level="subhead2"
                  color="primary1"
              >
                {differenceInDays(selected.to.date, selected.from.date)}
                {locale === "ko" ? "박" : " nights"}
              </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Indicator;
