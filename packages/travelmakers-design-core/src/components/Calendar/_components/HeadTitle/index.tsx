import { Typography } from "../../../Typography";
import useStyles from "../../Calendar.style";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

const HeadTitle: React.FC = () => {
  const { classes, cx } = useStyles();
  return (
    <tr>
      {DAYS.map((day) => {
        return (
          <th key={day} className={classes.tableCell}>
            <Typography level="body2" color="primary1" strong>
              {day}
            </Typography>
          </th>
        );
      })}
    </tr>
  );
};

export default HeadTitle;
