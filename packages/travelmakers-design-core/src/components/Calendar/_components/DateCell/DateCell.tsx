import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef } from "react";
import { View } from "../../../View";
import useStyles from "./DateCell.style";
import {
  DateCellProps,
  DateCellComponent,
  DateCellDay,
  DateCellType,
} from "./DateCell.type";
import { Typography } from "src/components/Typography";

export interface Props {
  day: DateCellDay;
  type: DateCellType;
  onClick?: (day: DateCellDay) => void;
}

export const DateCell: DateCellComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "td">(
    { day, type, onClick, className, ...props }: DateCellProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });
    const DAY_CLASSES = {
      0: [classes.sunday],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [classes.saturday],
    };

    return (
      <View<React.ElementType>
        component={"td"}
        ref={ref}
        className={cx(
          className,
          classes.container,
          classes[`background-${type}`]
        )}
        onClick={() => onClick(day)}
        {...props}
      >
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
        {/* <div className={classes[`background-${type}`]} /> */}
      </View>
    );
  }
);

DateCell.displayName = "DateCell";
