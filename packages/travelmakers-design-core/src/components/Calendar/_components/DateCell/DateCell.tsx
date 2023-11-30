import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useDeferredValue } from "react";
import { View } from "../../../View";
import useStyles from "./DateCell.style";
import {
  DateCellDay,
  DateCellProps,
  DateCellType,
  ReturnType,
} from "./DateCell.type";
import { SelectedDays } from "../../Calendar.type";
import { differenceInDays, isEqual } from "date-fns";
import { log } from "next/dist/server/typescript/utils";

export interface Props {
  selectableDates: string[];
  disabledDays?: string[];
  betweenDays: Date[];
  dateBreak: boolean;
  day: DateCellDay;
  checked: SelectedDays;
  visible: boolean;
  onClick?: (day: DateCellDay) => void;
  enabledDays: Date;
  minNight: number;
  type: "tour" | "move-in";
  locale?: "ko" | "en";
}

export const DateCell = React.memo(
  forwardRef(
    <C extends React.ElementType = "td">(
      {
        locale,
        day,
        visible,
        checked,
        dateBreak,
        betweenDays,
        selectableDates,
        disabledDays,
        onClick,
        enabledDays,
        minNight,
        type,
        className,
        ...props
      }: DateCellProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const { classes, cx } = useStyles({ day, checked, visible });
      const deferredDay = useDeferredValue(day);
      const DAY_CLASSES = {
        /** 일요일 */
        0: [classes.sunday],
        /** 월요일 */
        1: [],
        /** 화요일 */
        2: [],
        /** 수요일 */
        3: [],
        /** 목요일 */
        4: [],
        /** 금요일 */
        5: [],
        /** 토요일 */
        6: [classes.saturday],
      };

      /**
       * ANCHOR: From Date, To Date 날짜 사이에 대해서 체크
       * @param day
       * @returns
       */
      const isBetweenFromAndToDays = (day: DateCellDay) => {
        return (
          checked.from &&
          checked.to &&
          differenceInDays(day.date, checked.from.date) > 0 &&
          differenceInDays(checked.to.date, day.date) > 0
        );
      };

      /**
       * ANCHOR: 선택하지 않은 날짜 사이에 대해서 체크
       * @param day
       * @returns
       */
      const isBetweenNotSelectedDays = (day: DateCellDay) => {
        return (
          checked.from &&
          !checked.to &&
          differenceInDays(day.date, checked.from.date) > 0 &&
          differenceInDays(enabledDays, day.date) >= 0
        );
      };

      const isMinNightDays = (day: DateCellDay) => {
        if (checked.from) {
          const resultDay = differenceInDays(day.date, checked.from.date);
          return resultDay > minNight;
        }
        return false;
      };

      const onType = (day: DateCellDay): DateCellType => {
        if (day.disabled) {
          return getDisabledDayType(day);
        } else {
          return getEnabledDayType(day);
        }
      };

      const getDisabledDayType = (day: DateCellDay): DateCellType => {
        // betweenDays
        if (checked.from && isEqual(checked.to?.date, day.date)) {
          return "disabled-to-between";
        }

        if (
          isDayWithinEnabledRange(day) &&
          (!checked.to || isDayBeforeCheckedTo(day))
        ) {
          const isMinNight = isMinNightDays(day);
          if (
            isMinNight &&
            betweenDays.some((betweenDay) => isEqual(betweenDay, day.date))
          ) {
            return "default-between";
          }
          return isDayBeforeEnabledDay(day)
            ? "disabled-between"
            : "disabled-to-between";
        }

        return "disabled";
      };

      const getEnabledDayType = (day: DateCellDay): DateCellType => {
        const isBetweenDays = betweenDays.some((betweenDay) =>
          isEqual(betweenDay, day.date)
        );
        if (isBetweenNotSelectedDays(day)) {
          const isMinNight = isMinNightDays(day);

          if (isDayBeforeEnabledDay(day)) {
            return isMinNight && isBetweenDays
              ? "default-between"
              : "disabled-between";
          }
          return isMinNight && isBetweenDays
            ? "to-between"
            : "disabled-to-between";
        }

        if (isEqual(day.date, checked.from?.date)) {
          return type === "move-in" ? "from" : "focus";
        }

        if (isEqual(day.date, checked.to?.date)) {
          return "to";
        }

        if (isBetweenFromAndToDays(day)) {
          return "default-between";
        }

        return "default";
      };

      const isDayWithinEnabledRange = (day: DateCellDay): boolean =>
        checked.from &&
        differenceInDays(day.date, checked.from.date) > 0 &&
        differenceInDays(enabledDays, day.date) >= 0;

      const isDayBeforeCheckedTo = (day: DateCellDay): boolean =>
        !checked.to || differenceInDays(checked.to?.date, day.date) >= 0;

      const isDayBeforeEnabledDay = (day: DateCellDay): boolean =>
        differenceInDays(enabledDays, day.date) > 0;

      return (
        <View<React.ElementType>
          component={"td"}
          ref={ref}
          className={cx(className, classes.container)}
          onClick={() => visible && onClick?.(deferredDay)}
          {...props}
        >
          {visible && (
            <div className={cx(classes.calendar)}>
              <div
                className={cx(
                  classes.background,
                  classes[`background-${onType(day)}`],
                  classes[isBetweenFromAndToDays(day) && "betweenDays"],
                  classes[
                    type === "move-in" &&
                      checked.from?.date === day.date &&
                      "background-from"
                  ],
                  classes[
                    type === "move-in" &&
                      checked.to?.date === day.date &&
                      "background-to"
                  ]
                )}
              />
              <div className={classes.box}>
                <span
                  className={cx(
                    classes.boxText,
                    ...DAY_CLASSES[deferredDay.dayIndex],
                    classes[onType(day)],
                    classes[
                      !checked.from && deferredDay.disabled && "disabled"
                    ],
                    classes[checked.from?.date === day.date && "focusDay"],
                    classes[checked.to?.date === day.date && "focusDay"]
                  )}
                >
                  {deferredDay.dayOfMonth}
                </span>
              </div>
              <div className={classes.strikeBox}>
                <span className={classes.strike} />
              </div>
            </div>
          )}
        </View>
      );
    }
  )
) as unknown as ReturnType;

DateCell.displayName = "DateCell";
