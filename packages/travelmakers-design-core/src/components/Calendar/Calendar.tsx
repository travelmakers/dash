import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import React, { forwardRef, useEffect, useState } from "react";
import { View } from "../View";
import useStyles from "./Calendar.style";
import { CalendarProps, CalendarComponent } from "./Calendar.type";
import { useCalendar } from "@travelmakers-design-v2/hooks";
import { DateCell } from "./_components/DateCell";
import {
  DateCellDay,
  DateCellType,
} from "./_components/DateCell/DateCell.type";
import TableHead from "./_components/TableHead";
import _ from "lodash";
import { addDays, differenceInDays, differenceInHours } from "date-fns";

export interface Props {
  width?: number;
  height?: number;
  selected: { from: DateCellDay; to: DateCellDay };
  disabledDays?: Date[];
  visibleMonth: number;
  onChange: (date: Date) => void;
}

export const Calendar: CalendarComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      width,
      height,
      selected,
      disabledDays,
      visibleMonth,
      onChange,
      className,
      ...props
    }: CalendarProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const [state, actions] = useCalendar(null);
    const [enabledDays, setEnabledDays] = useState<Date>();
    const [checked, setChecked] = useState({
      from: selected?.from,
      to: selected?.to,
    });

    const handleCalendar = () => {
      actions.getInfiniteNextMonth();
      actions.getInfiniteNextMonth();
      actions.getInfiniteNextMonth();
    };

    const isBetweenDays = (day: DateCellDay) => {
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

    const onClick = (day: DateCellDay) => {
      if (!checked.from) {
        setChecked((prev) => {
          return { ...prev, from: day };
        });
        setEnabledDays(addDays(day.date, 30));
      } else if (isBetweenDays(day)) {
        setChecked((prev) => {
          return { ...prev, to: day };
        });
        setEnabledDays(addDays(day.date, 30));
      } else {
        setChecked((prev) => {
          return { ...prev, to: null, from: null };
        });
      }
    };

    const onType = (day: DateCellDay): DateCellType => {
      if (isBetweenDays(day)) {
        // TODO: disabled-between 부분도 고려 필요
        if (differenceInDays(enabledDays, day.date) > 0) {
          return "default-between";
        } else {
          return "to-between";
        }
      }

      if (isBetweenFromAndToDays(day)) {
        return "default-between";
      }

      if (_.isEqual(day, checked.from)) {
        return "from";
      } else if (_.isEqual(day, checked.to)) {
        return "to";
      } else if (differenceInDays(day.date, enabledDays) > 0) {
        return "default";
      }

      return "default";
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
              <TableHead week={_.first(week)} index={index} />
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
