import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef, useMemo, useState } from "react";
import { DateTableProps, ReturnType } from "./DateTable.type";
import React from "react";
import { DateCellDay, DateCellType } from "../DateCell/DateCell.type";
import { SelectedDays } from "../../Calendar.type";
import { addDays, differenceInDays, isEqual } from "date-fns";
import { getDate } from "@travelmakers/utils";
import _ from "lodash";
import { CalendarState } from "@travelmakers/hooks/src/useCalendar/useCalendar.type";
import { DateYear } from "../DateYear/DateYear";
import { View } from "../../../View";

export interface Props {
  checked: SelectedDays;
  setChecked: React.Dispatch<React.SetStateAction<SelectedDays>>;
  type: "tour" | "move-in";
  selectableDates: string[];
  disabledDays?: string[];
  minNight: number;
  maxNight: number;
  hotelName?: string;
  notAllowedMessage?: string;
  months: string[];
  years: number[];
  weeks?: CalendarState["weeks"];
}

export const DateTable = React.memo(
  forwardRef(
    <C extends React.ElementType = "div">(
      {
        checked,
        setChecked,
        type,
        selectableDates,
        disabledDays,
        minNight,
        maxNight,
        hotelName,
        notAllowedMessage,
        months,
        years,
        weeks,
        className,
        ...props
      }: DateTableProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const [enabledDays, setEnabledDays] = useState<Date>();

      /**
       * ANCHOR: 선택하지 않은 날짜 사이에 대해서 체크
       * @param day
       * @returns
       */
      const isBetweenNotSelectedDays = useMemo(
        () => (day: DateCellDay) => {
          return (
            checked.from &&
            !checked.to &&
            differenceInDays(day.date, checked.from.date) > 0 &&
            differenceInDays(enabledDays, day.date) >= 0
          );
        },
        [checked, enabledDays]
      );

      const isMinNightDays = useMemo(
        () => (day: DateCellDay) => {
          if (checked.from) {
            const resultDay = differenceInDays(day.date, checked.from.date);
            return resultDay > minNight;
          }
          return false;
        },
        [checked, minNight]
      );

      /**
       * ANCHOR: From Date, To Date 날짜 사이에 대해서 체크
       * @param day
       * @returns
       */
      const isBetweenFromAndToDays = useMemo(
        () => (day: DateCellDay) => {
          return (
            checked.from &&
            checked.to &&
            differenceInDays(day.date, checked.from.date) > 0 &&
            differenceInDays(checked.to.date, day.date) > 0
          );
        },
        [checked]
      );

      /**
       * ANCHOR: 선택 불가능한 날짜(disabledDays) 사이에 대해서 체크
       * @param day
       * @returns
       */
      const isDisabledDay = useMemo(
        () => (day: DateCellDay) => {
          const isDisable = disabledDays.some((disabledDay) =>
            isEqual(getDate(disabledDay).date, day.date)
          );
          const isSelectable = !selectableDates.some((selectableDate) =>
            isEqual(getDate(selectableDate).date, day.date)
          );
          return isDisable || isSelectable;
        },
        [disabledDays, selectableDates]
      );

      const onClear = useMemo(
        () => () => {
          setChecked({
            to: null,
            from: null,
            time: { hour: null, minutes: null },
          });
        },
        []
      );

      const onClick = useMemo(
        () => (day: DateCellDay) => {
          if (isDisabledDay(day)) {
            notAllowedMessage;
          } else if (type === "tour") {
            setChecked((prev) => {
              return { ...prev, from: day, to: day };
            });
          } else if (!checked.from) {
            setChecked((prev) => {
              return { ...prev, from: day };
            });
            setEnabledDays(addDays(day.date, maxNight));
          } else if (
            isBetweenNotSelectedDays(day) &&
            (isDisabledDay(day) || !isMinNightDays(day))
          ) {
            notAllowedMessage;
          } else if (isBetweenNotSelectedDays(day)) {
            setChecked((prev) => {
              return { ...prev, to: day };
            });
            setEnabledDays(addDays(day.date, maxNight));
          } else {
            setChecked({
              to: null,
              from: null,
              time: { hour: null, minutes: null },
            });
          }
        },
        [notAllowedMessage, type, checked]
      );

      const onType = useMemo(
        () =>
          (day: DateCellDay): DateCellType => {
            if (isDisabledDay(day)) {
              if (checked.from && isEqual(checked.to?.date, day.date)) {
                return "disabled-to-between";
              } else if (
                checked.from &&
                differenceInDays(day.date, checked.from.date) > 0 &&
                differenceInDays(enabledDays, day.date) >= 0 &&
                (!checked.to ||
                  differenceInDays(checked.to?.date, day.date) >= 0)
              ) {
                return differenceInDays(enabledDays, day.date) > 0
                  ? "disabled-between"
                  : "disabled-to-between";
              } else {
                return "disabled";
              }
            }

            if (isBetweenNotSelectedDays(day)) {
              const isMinNight = isMinNightDays(day);
              if (differenceInDays(enabledDays, day.date) > 0) {
                return isMinNight ? "default-between" : "disabled-between";
              } else {
                return isMinNight ? "to-between" : "disabled-to-between";
              }
            } else if (isEqual(day.date, checked.from?.date)) {
              return type === "move-in" ? "from" : "focus";
            } else if (isEqual(day.date, checked.to?.date)) {
              return "to";
            } else if (isBetweenFromAndToDays(day)) {
              return "default-between";
            }

            return "default";
          },
        [enabledDays, checked]
      );

      return (
        <>
          {months.map((month, index) => {
            const year = years[index];
            if (!year) return null;
            const title = `${year}년 ${month}`;
            return (
              <DateYear
                key={title}
                title={title}
                hotelName={hotelName}
                year={year}
                month={month}
                weeks={weeks}
                onType={onType}
                onClick={onClick}
                onClear={onClear}
              />
            );
          })}
        </>
      );
    }
  )
) as unknown as ReturnType;
