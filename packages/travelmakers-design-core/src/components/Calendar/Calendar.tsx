import { useCalendar, useUpdateEffect } from "@travelmakers/hooks";
import { PolymorphicRef } from "@travelmakers/styles";
import _ from "lodash";
import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { View } from "../View";
import useStyles from "./Calendar.style";
import { CalendarProps, ReturnType, SelectedDays } from "./Calendar.type";
import { Indicator } from "./_components/Indicator";
import OptionBox from "./_components/OptionBox";
import { DateTable } from "./_components/DateTable/DateTable";

export interface Props {
  hotelName?: string;

  /** 캘린더의 타입 */
  type: "tour" | "move-in";

  /** 선택 가능한 일자 */
  selectableDates: string[];

  /** 선택가능한 최소 일자 */
  minNight: number;

  /** 선택가능한 최대 일자 */
  maxNight: number;

  onChange: (selected: SelectedDays) => void;

  /** initial Date */
  selected?: SelectedDays;

  /** 선택 불가능한 일자 */
  disabledDays?: string[];

  /** 허용하지 않는 날짜를 클릭하였을 경우 출력할 메시지 */
  notAllowedMessage?: () => string;

  /** 표출할 개월수 */
  displayMonth: number;

  topIndicatorPosition?: string;
}

/**
 * ANCHOR: Travelmakers Calendar
 * - type이 'tour(투어)' 일 경우 일자는 범위 선택이 아니라 하나의 일자에 대해서만 선택이 가능하다.
 * - type이 'move-in(입주)' 일 경우 범위(from~to)형태로 일자를 선택한다.
 * - selectableDates에 선택 가능한 일자를 넣어야만 정상적으로 일자에 대한 선택이 가능하다.
 * - minNight로 최소 선택가능 범위를 작성해주어야한다.
 * - maxNight로 최대 선택가능 범위를 작성해주어야한다.
 * - onChange함수를 통해 선택한 일자에 대해서 확인할 수 있다.
 * - displayMonth: 표출할 개월수에 대해서 확인한다.
 */
export const Calendar = forwardRef(
  <C extends React.ElementType = "div">(
    {
      hotelName = "",
      type = "move-in",
      selected,
      disabledDays = [],
      selectableDates = [],
      notAllowedMessage,
      minNight = 30,
      maxNight = 59,
      topIndicatorPosition = "48px",
      displayMonth,
      onChange,
      children,
      className,
      ...props
    }: PropsWithChildren<CalendarProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();
    const [state, actions] = useCalendar(null);
    const [checked, setChecked] = useState<SelectedDays>({
      from: selected?.from,
      to: selected?.to,
      time: selected.time,
    });

    useUpdateEffect(() => {
      onChange?.(checked);
    }, [checked]);

    const handleCalendar = () => {
      Array.from({ length: displayMonth }).map(() => {
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
          <Indicator
            selected={selected}
            type={type}
            topIndicatorPosition={topIndicatorPosition}
          />
          <div className={classes.calendar}>
            {state && (
              <DateTable
                checked={checked}
                setChecked={setChecked}
                type={type}
                selectableDates={selectableDates}
                disabledDays={disabledDays}
                minNight={minNight}
                maxNight={maxNight}
                hotelName={hotelName}
                notAllowedMessage={notAllowedMessage}
                months={[...state.month]}
                years={[...state.year]}
                weeks={[...state.weeks]}
              />
            )}
          </div>
          {children}
        </View>
      </View>
    );
  }
) as unknown as ReturnType;

Calendar.displayName = "Calendar";
Calendar.OptionBox = OptionBox;
