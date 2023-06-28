import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef } from "react";
import useStyles from "./DateYear.style";
import { DateYearProps, ReturnType } from "./DateYear.type";
import React from "react";
import HeadMonthly from "../HeadMonthly";
import HeadTitle from "../HeadTitle";
import { CalendarState } from "@travelmakers/hooks/src/useCalendar/useCalendar.type";
import { DateCell } from "../DateCell";
import _ from "lodash";
import { getMonth } from "date-fns";
import { DateCellDay, DateCellType } from "../DateCell/DateCell.type";

export interface Props {
  title: string;
  hotelName: string;
  year: number;
  month: string;
  weeks?: CalendarState["weeks"];
  onType: (day: DateCellDay) => DateCellType;
  onClick: (day: DateCellDay) => void;
  onClear: () => void;
}

export const DateYear = React.memo(
  forwardRef(
    <C extends React.ElementType = "div">(
      {
        title,
        hotelName,
        year,
        month,
        weeks,
        onType,
        onClick,
        onClear,
        className,
        children,
        ...props
      }: DateYearProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const { classes } = useStyles();

      return (
        <>
          <div className={classes.tableHead}>
            <HeadMonthly title={title} onClear={onClear} />
          </div>
          <table>
            <caption className={"sr-only"}>
              {hotelName && `${hotelName} :`} {title} 달력
            </caption>
            <thead className={classes.mt10}>
              <HeadTitle />
            </thead>
            <tbody>
              {weeks
                .filter((week) => _.first(week).month === month)
                .map((week, index) => {
                  if (!year) return null;
                  const weeklyKey = `${year}year-${month}month-${index}week`;
                  return (
                    <React.Fragment key={weeklyKey}>
                      <tr>
                        {week.map((day) => {
                          if (!day.year) return null;
                          return (
                            <DateCell
                              key={`${weeklyKey}-${day.dayOfMonth}day`}
                              day={day}
                              type={onType(day)}
                              onClick={onClick}
                              visible={
                                _.first(week).month ===
                                `${getMonth(day.date) + 1}월`
                              }
                            />
                          );
                        })}
                      </tr>
                    </React.Fragment>
                  );
                })}
            </tbody>
          </table>
        </>
      );
    }
  )
) as unknown as ReturnType;
