import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import React, { forwardRef, useEffect, useState } from "react";
import { View } from "../View";
import useStyles from "./Calendar.style";
import {
  CalendarProps,
  CalendarComponent,
  SelectedDays,
} from "./Calendar.type";
import {
  useCalendar,
  useToast,
  useUpdateEffect,
} from "@travelmakers-design-v2/hooks";
import { DateCell } from "./_components/DateCell";
import {
  DateCellDay,
  DateCellType,
} from "./_components/DateCell/DateCell.type";
import TableHead from "./_components/TableHead";
import { addDays, differenceInDays, isEqual } from "date-fns";
import _ from "lodash";

export interface Props {
  /** initial Date */
  selected?: SelectedDays;

  /** soldOut 되어서 선택이 불가능한 일자 */
  notAllowedDays?: Date[];

  /** 선택 불가능한 일자 */
  disabledDays?: Date[];

  /** 한번에 보여줄 개월 수 */
  visibleMonth: number;

  /** 선택할 수 있는 날짜 수 */
  visibleDay: number;

  /** 허용하지 않는 날짜를 클릭하였을 경우 출력할 메시지 */
  notAllowedMessage?: string;

  onChange: (selected: SelectedDays) => void;
}

export const Calendar: CalendarComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      selected,
      notAllowedDays = [],
      disabledDays = [],
      visibleMonth = 3,
      visibleDay = 30,
      notAllowedMessage = "해당 일자는 예약이 불가합니다. \n다른 일자를 선택해주세요.",
      onChange,
      className,
      ...props
    }: CalendarProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { toast } = useToast();
    const { classes, cx } = useStyles();
    const [state, actions] = useCalendar(null);
    const [enabledDays, setEnabledDays] = useState<Date>();
    const [checked, setChecked] = useState({
      from: selected?.from,
      to: selected?.to,
    });

    useUpdateEffect(() => {
      onChange?.(checked);
    }, [checked]);

    /**
     * ANCHOR: 선택하지 않은 날짜 사이에 대해서 체크
     * @param day
     * @returns
     */
    const isBetweenNotSelectedDays = (day: DateCellDay) => {
      if (
        checked.from &&
        !checked.to &&
        differenceInDays(day.date, checked.from.date) > 0 &&
        differenceInDays(enabledDays, day.date) >= 0
      ) {
        return true;
      }
      return false;
    };

    /**
     * ANCHOR: From Date, To Date 날짜 사이에 대해서 체크
     * @param day
     * @returns
     */
    const isBetweenFromAndToDays = (day: DateCellDay) => {
      if (
        checked.from &&
        checked.to &&
        differenceInDays(day.date, checked.from.date) > 0 &&
        differenceInDays(checked.to.date, day.date) > 0
      ) {
        return true;
      }
      return false;
    };

    /**
     * ANCHOR: 허용하지 않는 날짜(notAllowedDays) 사이에 대해서 체크
     * @param day
     * @returns
     */
    const isNotAllowedDay = (day: DateCellDay) => {
      let isCloset = false;
      for (const notAllowedDay of notAllowedDays) {
        if (isEqual(notAllowedDay, day.date)) {
          isCloset = true;
          break;
        }
      }
      return isCloset;
    };

    /**
     * ANCHOR: 선택 불가능한 날짜(disabledDays) 사이에 대해서 체크
     * @param day
     * @returns
     */
    const isDisabledDay = (day: DateCellDay) => {
      let isCloset = false;
      for (const disabledDay of disabledDays) {
        if (isEqual(disabledDay, day.date)) {
          isCloset = true;
          break;
        }
      }
      return isCloset;
    };

    const onClear = () => {
      setChecked({ to: null, from: null });
    };

    const onClick = (day: DateCellDay) => {
      if (isNotAllowedDay(day) || isDisabledDay(day)) {
        toast({
          text: notAllowedMessage,
        });
      } else if (!checked.from) {
        setChecked((prev) => {
          return { ...prev, from: day };
        });
        setEnabledDays(addDays(day.date, visibleDay));
      } else if (isBetweenNotSelectedDays(day)) {
        setChecked((prev) => {
          return { ...prev, to: day };
        });
        setEnabledDays(addDays(day.date, visibleDay));
      } else {
        setChecked({ to: null, from: null });
      }
    };

    const onType = (day: DateCellDay): DateCellType => {
      if (isDisabledDay(day)) {
        if (checked.from && isEqual(checked.to?.date, day.date)) {
          return "disabled-to-between";
        } else if (
          checked.from &&
          differenceInDays(day.date, checked.from.date) > 0 &&
          differenceInDays(enabledDays, day.date) >= 0 &&
          (!checked.to || differenceInDays(checked.to?.date, day.date) >= 0)
        ) {
          if (differenceInDays(enabledDays, day.date) > 0) {
            return "disabled-between";
          } else {
            return "disabled-to-between";
          }
        } else {
          return "disabled";
        }
      }

      if (isNotAllowedDay(day)) {
        if (checked.from && isEqual(checked.to?.date, day.date)) {
          return "not-allowed-to-between";
        } else if (
          checked.from &&
          differenceInDays(day.date, checked.from.date) > 0 &&
          differenceInDays(enabledDays, day.date) >= 0 &&
          (!checked.to || differenceInDays(checked.to?.date, day.date) >= 0)
        ) {
          if (differenceInDays(enabledDays, day.date) > 0) {
            return "not-allowed-between";
          } else {
            return "not-allowed-to-between";
          }
        } else {
          return "not-allowed";
        }
      }

      if (isBetweenNotSelectedDays(day)) {
        if (differenceInDays(enabledDays, day.date) > 0) {
          return "default-between";
        } else {
          return "to-between";
        }
      } else if (isEqual(day.date, checked.from?.date)) {
        return "from";
      } else if (isEqual(day.date, checked.to?.date)) {
        return "to";
      } else if (isBetweenFromAndToDays(day)) {
        return "default-between";
      }

      return "default";
    };

    const handleCalendar = () => {
      Array.from({ length: visibleMonth }).map(() => {
        actions.getInfiniteNextMonth();
      });
    };

    useEffect(() => {
      state && handleCalendar();
    }, []);

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <table>
          {state.weeks.map((week, index) => (
            <>
              <TableHead week={_.first(week)} index={index} onClear={onClear} />
              <tr key={index}>
                {week.map((day) => (
                  <DateCell day={day} type={onType(day)} onClick={onClick} />
                ))}
              </tr>
            </>
          ))}
        </table>
      </View>
    );
  }
);

Calendar.displayName = "Calendar";
