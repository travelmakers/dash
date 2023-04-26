import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { addDays, differenceInDays, getMonth, isEqual } from "date-fns";
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
import Indicator from "./_components/Indicator";
import OptionBox from "./_components/OptionBox";
import _ from "lodash";

export interface Props {
  /** 캘린더의 타입 */
  type: "tour" | "move-in";

  /** 선택 가능한 일자 */
  selectableDates: Date[];

  /** 선택가능한 최소 일자 */
  minNight: number;

  /** 선택가능한 최대 일자 */
  maxNight: number;

  onChange: (selected: SelectedDays) => void;

  /** initial Date */
  selected?: SelectedDays;

  /** 선택 불가능한 일자 */
  disabledDays?: Date[];

  /** 허용하지 않는 날짜를 클릭하였을 경우 출력할 메시지 */
  notAllowedMessage?: string;
}

/**
 * ANCHOR: Travelmakers Calendar
 * - type이 'tour(투어)' 일 경우 일자는 범위 선택이 아니라 하나의 일자에 대해서만 선택이 가능하다.
 * - type이 'move-in(입주)' 일 경우 범위(from~to)형태로 일자를 선택한다.
 * - selectableDates에 선택 가능한 일자를 넣어야만 정상적으로 일자에 대한 선택이 가능하다.
 * - minNight로 최소 선택가능 범위를 작성해주어야한다.
 * - maxNight로 최대 선택가능 범위를 작성해주어야한다.
 * - onChange함수를 통해 선택한 일자에 대해서 확인할 수 있다.
 */
export const Calendar: CalendarComponent & {
  displayName?: string;
  OptionBox?: typeof OptionBox;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type = "move-in",
      selected,
      disabledDays = [],
      selectableDates = [],
      notAllowedMessage = "해당 일자는 예약이 불가합니다. \n다른 일자를 선택해주세요.",
      minNight = 30,
      maxNight = 59,
      onChange,
      children,
      className,
      ...props
    }: PropsWithChildren<CalendarProps<C>>,
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

    const isMinNightDays = (day: DateCellDay) => {
      if (checked.from) {
        const resultDay = differenceInDays(day.date, checked.from.date);
        if (resultDay > minNight) return true;
        return false;
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
     * ANCHOR: 선택 불가능한 날짜(disabledDays) 사이에 대해서 체크
     * @param day
     * @returns
     */
    const isDisabledDay = (day: DateCellDay) => {
      let isCloset = true;
      for (const disabledDay of disabledDays) {
        if (isEqual(disabledDay, day.date)) {
          isCloset = true;
          break;
        }
      }

      for (const selectableDate of selectableDates) {
        if (isEqual(selectableDate, day.date)) {
          isCloset = false;
          break;
        }
      }
      return isCloset;
    };

    const onClear = () => {
      setChecked({ to: null, from: null });
    };

    const onClick = (day: DateCellDay) => {
      if (isDisabledDay(day)) {
        toast({
          text: notAllowedMessage,
        });
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
        toast({
          text: notAllowedMessage,
        });
      } else if (isBetweenNotSelectedDays(day)) {
        setChecked((prev) => {
          return { ...prev, to: day };
        });
        setEnabledDays(addDays(day.date, maxNight));
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

      if (isBetweenNotSelectedDays(day)) {
        const isMinNight = isMinNightDays(day);
        if (differenceInDays(enabledDays, day.date) > 0) {
          if (isMinNight) {
            return "default-between";
          } else {
            return "disabled-between";
          }
        } else {
          if (isMinNight) {
            return "to-between";
          } else {
            return "disabled-to-between";
          }
        }
      } else if (isEqual(day.date, checked.from?.date)) {
        if (type === "move-in") {
          return "from";
        } else {
          return "focus";
        }
      } else if (isEqual(day.date, checked.to?.date)) {
        return "to";
      } else if (isBetweenFromAndToDays(day)) {
        return "default-between";
      }

      return "default";
    };

    const handleCalendar = () => {
      const months = Math.ceil(maxNight / 30);
      Array.from({ length: months }).map(() => {
        actions.getInfiniteNextMonth();
      });
    };

    useEffect(() => {
      state && handleCalendar();
    }, []);

    return (
      <View<React.ElementType> component={"div"} className={cx(classes.root)}>
        <View<React.ElementType>
          component={"div"}
          ref={ref}
          className={cx(className, classes.container)}
          {...props}
        >
          <Indicator checked={checked} onClear={onClear} />
          <div className={classes.calendar}>
            <table>
              {state.weeks.map((week, index) => (
                <>
                  <TableHead
                    week={_.first(week)}
                    index={index}
                    onClear={onClear}
                  />
                  <tr key={index}>
                    {week.map((day) => {
                      return (
                        <DateCell
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
                </>
              ))}
            </table>
          </div>
          {children}
        </View>
      </View>
    );
  }
);

Calendar.displayName = "Calendar";
Calendar.OptionBox = OptionBox;
