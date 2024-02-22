import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import useStyles from "./DateYear.style";
import { DateYearProps, ReturnType } from "./DateYear.type";
import HeadMonthly from "../HeadMonthly";
import HeadTitle from "../HeadTitle";
import { CalendarState } from "@travelmakers/hooks/src/useCalendar/useCalendar.type";
import { DateCell } from "../DateCell";
import _ from "lodash";
import { getMonth } from "date-fns";
import { DateCellDay } from "../DateCell/DateCell.type";
import { SelectedDays } from "../../Calendar.type";
import { getDate } from "@travelmakers/utils";

export interface Props {
  title: string;
  hotelName: string;
  checked: SelectedDays;
  betweenDays: Date[];
  disabledDays?: string[];
  selectableDates: string[];
  year: number;
  month: string;
  weeks?: CalendarState["weeks"];
  onClick: (day: DateCellDay) => void;
  onClear: () => void;
  enabledDays: Date;
  minNight: number;
  type: "tour" | "move-in";
  locale?: "ko" | "en";
}

export const DateYear = React.memo(
  forwardRef(
    <C extends React.ElementType = "div">(
      {
        locale,
        title,
        hotelName,
        checked,
        betweenDays,
        disabledDays,
        selectableDates,
        year,
        month,
        weeks,
        onClick,
        onClear,
        enabledDays,
        minNight,
        type,
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
            <HeadMonthly title={title} onClear={onClear} locale={locale} />
          </div>
          <table>
            <caption className={"sr-only"}>
              {hotelName && `${hotelName} :`} {title} 달력
            </caption>
            <thead className={classes.mt10}>
              <HeadTitle locale={locale} />
            </thead>
            <tbody>
              {weeks
                .filter(
                  (week) =>
                    _.first(week).month === month && _.first(week).year === year
                )
                .map((week, index) => {
                  if (!year) return null;
                  const weeklyKey = `${year}year-${month}month-${index}week`;
                  let dateBreak = false;
                  return (
                    <React.Fragment key={weeklyKey}>
                      <tr>
                        {week.map((day) => {
                          if (!day.year) return null;
                          const visibleKO =
                            _.first(week).month ===
                            `${getMonth(day.date) + 1}월`;
                          const visibleEN =
                            _.first(week).month ===
                            getDate(day.date, "MMMM").format;
                          return (
                            <DateCell
                              key={`${weeklyKey}-${day.dayOfMonth}day`}
                              locale={locale}
                              day={day}
                              betweenDays={betweenDays}
                              dateBreak={dateBreak}
                              type={type}
                              enabledDays={enabledDays}
                              minNight={minNight}
                              checked={checked}
                              disabledDays={disabledDays}
                              selectableDates={selectableDates}
                              onClick={onClick}
                              visible={locale === "ko" ? visibleKO : visibleEN}
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
