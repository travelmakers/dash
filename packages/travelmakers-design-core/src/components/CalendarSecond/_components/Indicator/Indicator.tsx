import React from "react";
import useStyles from "./Indicator.style";
import { getDate, getDay } from "@travelmakers/utils";
import { Typography } from "../../../Typography";
import { CalendarIndicator, SelectedDays } from "../../Calendar.type";
import { Button } from "../../../Button";
import { Icon } from "../../../Icon";
import { Tag } from "../../../Tag";

export interface Props {
  indicator?: CalendarIndicator;
  selected: SelectedDays;
  type: "tour" | "move-in";
  topIndicatorPosition?: string;
  setChecked: React.Dispatch<React.SetStateAction<SelectedDays>>;
  locale?: "ko" | "en";
}

const DATE_FORMAT = "MM.DD";

export const Indicator: React.FC<Props> = ({
  indicator,
  selected,
  type,
  topIndicatorPosition,
  setChecked,
  locale = "ko",
}) => {
  const {
    headerText,
    subHeaderText,
    percent,
    tourButtonText,
    tourSoldOut,
    onClick,
  } = indicator || {};
  const { classes, cx } = useStyles({ topIndicatorPosition });
  const isTour = type === "tour";

  const generateToHeadlineText = () => {
    const visibleFromDateText = `${
      getDate(selected.from?.date, DATE_FORMAT).format
    } (${getDay(selected.from?.date, locale)})`;
    const visibleToDateText = `${
      getDate(selected.to?.date, DATE_FORMAT).format
    } (${getDay(selected.to?.date, locale)})`;

    if (isTour) {
      if (!selected.from) {
        return subHeaderText;
      }
      return visibleFromDateText;
    } else {
      if (!selected.from && !selected.to) {
        return subHeaderText;
      } else if (!selected.to) {
        return <>{visibleFromDateText} -</>;
      }
      return (
        <>
          {visibleFromDateText} - {visibleToDateText}
          {percent && percent !== 0 && (
            <Tag
              style={{ marginLeft: "8px" }}
              color="green"
              items={[<Tag.Item key="0" label={`${percent}%`} />]}
              roundness="full"
              type="line"
            />
          )}
        </>
      );
    }
  };

  return (
    <div className={classes.indicatorBox}>
      <div className={classes.indicatorInnerBox}>
        <div>
          <div>
            <Typography level="subhead1" color="primary" strong>
              {headerText}
            </Typography>
          </div>
          <div>
            <Typography level="body2" color="primary">
              {generateToHeadlineText()}
            </Typography>
          </div>
        </div>
        {!tourSoldOut && (
          <div style={{ justifyContent: "center" }}>
            <Button
              onClick={() => {
                if (onClick) {
                  onClick();
                  setChecked({
                    to: null,
                    from: null,
                    time: { hour: null, minutes: null },
                  });
                }
              }}
              variant="tonal"
              size="medium"
              leftIcon={
                <div
                  className={cx(
                    classes.iconGroup,
                    type === "tour" && classes.iconCheck
                  )}
                >
                  <Icon src="IcCheck" color={"white"} width={16} height={16} />
                </div>
              }
            >
              {tourButtonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Indicator;
