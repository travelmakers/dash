import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { View } from "../../../View";
import useStyles from "./DateCell.style";
import {
  DateCellDay,
  DateCellProps,
  DateCellType,
  ReturnType,
} from "./DateCell.type";

export interface Props {
  day: DateCellDay;
  type: DateCellType;
  visible: boolean;
  onClick?: (day: DateCellDay) => void;
}

export const DateCell = forwardRef(
  <C extends React.ElementType = "td">(
    { day, type, visible, onClick, className, ...props }: DateCellProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type, visible });
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

    return (
      <View<React.ElementType>
        component={"td"}
        ref={ref}
        className={cx(className, classes.container)}
        onClick={() => visible && onClick?.(day)}
        {...props}
      >
        {visible && (
          <div className={cx(classes.calendar)}>
            <div
              className={cx(classes.background, classes[`background-${type}`])}
            />
            <div className={classes.box}>
              <span
                className={cx(
                  classes.boxText,
                  ...DAY_CLASSES[day.dayIndex],
                  classes[type]
                )}
              >
                {day.dayOfMonth}
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
) as unknown as ReturnType;

DateCell.displayName = "DateCell";
