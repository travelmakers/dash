import { Typography } from "../../../Typography";
import { Button } from "../../../Button";
import { week } from "../../Calendar.type";
import useStyles from "../../Calendar.style";

const HeadMonthly = ({ week }: { week: week }) => {
  const { classes, cx } = useStyles();
  return (
    <tr className={classes.tableHead}>
      <td colSpan={4}>
        <Typography level="subhead2" color="primary1" strong>
          {week.year}년 {week.month}
        </Typography>
      </td>
      <td colSpan={3} className={classes.tableMonthly}>
        <Button variant="secondary" size="small" roundness>
          더보기
        </Button>
      </td>
    </tr>
  );
};

export default HeadMonthly;
