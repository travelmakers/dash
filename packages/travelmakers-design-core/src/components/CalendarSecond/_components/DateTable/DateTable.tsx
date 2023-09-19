import { PolymorphicRef } from "@travelmakers/styles";
import { forwardRef, useState } from "react";
import { DateTableProps, ReturnType } from "./DateTable.type";
import React from "react";
import { DateCellDay, DateCellType } from "../DateCell/DateCell.type";
import { SelectedDays } from "../../Calendar.type";
import { addDays, differenceInDays, isEqual } from "date-fns";
import { getDate } from "@travelmakers/utils";

import { CalendarState } from "@travelmakers/hooks/src/useCalendar/useCalendar.type";
import { DateYear } from "../DateYear/DateYear";

export interface Props {
  checked: SelectedDays;
  setChecked: React.Dispatch<React.SetStateAction<SelectedDays>>;
  type: "tour" | "move-in";
  selectableDates: string[];
  disabledDays?: string[];
  minNight: number;
  maxNight: number;
  hotelName?: string;
  notAllowedMessage?: () => string;
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
       * ANCHOR: 선택 불가능한 날짜(disabledDays) 사이에 대해서 체크
       * @param day
       * @returns
       */
      const isDisabledDay = (day: DateCellDay) => {
        const isDisable = disabledDays.some((disabledDay) =>
          isEqual(getDate(disabledDay).date, day.date)
        );
        const isSelectable = !selectableDates.some((selectableDate) =>
          isEqual(getDate(selectableDate).date, day.date)
        );
        return isDisable || isSelectable;
      };

      const onClear = () => {
        setChecked({
          to: null,
          from: null,
          time: { hour: null, minutes: null },
        });
      };

      const onClick = (day: DateCellDay) => {
        if (isDisabledDay(day)) {
          notAllowedMessage();
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
          notAllowedMessage();
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
      };


      return (
        <>
          {months.map((month, index) => {
            const year = years[index];
            if (!year) return null;
            const title = `${year}년 ${month}`;
            return (
              <DateYear
                key={title}
                checked={checked}
                type={type}
                disabledDays={disabledDays}
                selectableDates={selectableDates}
                title={title}
                hotelName={hotelName}
                year={year}
                month={month}
                weeks={weeks}
                onClick={onClick}
                onClear={onClear}
                enabledDays={enabledDays}
                minNight={minNight}
              />
            );
          })}
        </>
      );
    }
  )
) as unknown as ReturnType;
