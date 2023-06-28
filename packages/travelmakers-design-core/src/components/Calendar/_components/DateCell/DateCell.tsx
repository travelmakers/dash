import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useDeferredValue } from "react";
import { View } from "../../../View";
import useStyles from "./DateCell.style";
import { DateCellDay, DateCellProps, ReturnType } from "./DateCell.type";
import { SelectedDays } from "../../Calendar.type";
import { isEqual } from "date-fns";
import { getDate } from "@travelmakers/utils";

export interface Props {
  selectableDates: string[];
  disabledDays?: string[];
  day: DateCellDay;
  checked: SelectedDays;
  visible: boolean;
  onClick?: (day: DateCellDay) => void;
}

export const DateCell = React.memo(
  forwardRef(
    <C extends React.ElementType = "td">(
      {
        day,
        visible,
        checked,
        selectableDates,
        disabledDays,
        onClick,
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

      // =========
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

      // =========

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
              <div className={cx(classes.background)} />
              <div className={classes.box}>
                <span
                  className={cx(
                    classes.boxText,
                    ...DAY_CLASSES[deferredDay.dayIndex],
                    classes[isDisabledDay(day) && "disabled"]
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
