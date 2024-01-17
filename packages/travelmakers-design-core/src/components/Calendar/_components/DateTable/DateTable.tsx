import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useEffect, useState } from "react";
import { DateTableProps, ReturnType } from "./DateTable.type";
import { DateCellDay } from "../DateCell/DateCell.type";
import { SelectedDays } from "../../Calendar.type";
import { addDays, differenceInDays, isEqual } from "date-fns";
import { getInnerDate } from "@travelmakers/utils";

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
      const [betweenDays, setBetweenDays] = useState<Date[]>([]);

      const calculateAvailableDatesUpToLimit = () => {
        const dates: Date[] = [];
        const lastDate = getInnerDate(checked.from.date)
          .dayjs.add(maxNight, "days")
          .toDate();
        const result = differenceInDays(lastDate, checked.from.date);

        const selectedArray = Array.from({ length: result });
        for (let index = 0; index < selectedArray.length; index++) {
          const today = getInnerDate(checked.from.date, "YYYY-MM-DD")
            .dayjs.add(index + 1, "days")
            .toDate();
          const isSelectable = !selectableDates.some((selectableDate) =>
            isEqual(getInnerDate(selectableDate).date, today)
          );
          dates.push(today);
          if (isSelectable) break;
        }

        setBetweenDays(dates);
      };
      useEffect(() => {
        if (checked.from) {
          calculateAvailableDatesUpToLimit();
        }
      }, [checked.from]);

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
       * ANCHOR: 선택 불가능한 날짜(disabledDays) 사이에 대해서 체크
       * @param day
       * @returns
       */
      const isDisabledDay = (day: DateCellDay) => {
        const isDisable = disabledDays.some((disabledDay) =>
          isEqual(getInnerDate(disabledDay).date, day.date)
        );
        const isSelectable = !selectableDates.some((selectableDate) =>
          isEqual(getInnerDate(selectableDate).date, day.date)
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
        const isTourType = type === "tour";
        const hasNoFromDate = !checked.from;

        if (shouldShowNotAllowedMessage(day)) {
          notAllowedMessage();
          return;
        }

        if (isTourType) {
          setCheckedForTourType(day);
        } else if (hasNoFromDate) {
          setFromDateAndEnabledDays(day);
        } else if (isBetweenNotSelectedDays(day)) {
          setToDate(day);
        } else {
          resetCheckedState();
        }
      };

      /**
       * ANCHOR: 선택 불가능한 날짜(disabledDays) 사이에 대해서 체크
       * @param day
       */
      const shouldShowNotAllowedMessage = (day) => {
        const isBetweenDays = checked.from
          ? betweenDays.some((betweenDay) => isEqual(betweenDay, day.date))
          : true;

        return (
          (!checked.from && isDisabledDay(day)) ||
          (checked.from && !isBetweenDays) ||
          (isBetweenNotSelectedDays(day) && !isMinNightDays(day))
        );
      };

      /**
       * ANCHOR: 투어 타입에서 선택한 날짜에 대해서 체크
       * @param day
       */
      const setCheckedForTourType = (day) => {
        setChecked((prev) => ({ ...prev, from: day, to: day }));
      };

      /**
       * ANCHOR: From Date, To Date 날짜 사이에 대해서 체크
       * @param day
       */
      const setFromDateAndEnabledDays = (day) => {
        setChecked((prev) => ({ ...prev, from: day }));
        setEnabledDays(addDays(day.date, maxNight));
      };

      /**
       * ANCHOR: 선택하지 않은 날짜 사이에 대해서 체크
       * @param day
       */
      const setToDate = (day) => {
        setChecked((prev) => ({ ...prev, to: day }));
        setEnabledDays(addDays(day.date, maxNight));
      };

      const resetCheckedState = () => {
        setChecked({
          to: null,
          from: null,
          time: { hour: null, minutes: null },
        });
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
                betweenDays={betweenDays}
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
