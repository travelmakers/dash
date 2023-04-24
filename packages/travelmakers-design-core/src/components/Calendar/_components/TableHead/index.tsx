import useStyles from "../../Calendar.style";
import HeadMonthly from "../HeadMonthly";
import HeadTitle from "../HeadTitle";
import { week } from "../../Calendar.type";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

const TableHead = ({ week, index }: { week: week; index: number }) => {
  const { classes, cx } = useStyles();
  if (week.weekIndex === 0) {
    return (
      <thead className={index !== 0 && classes.mt10}>
        <HeadMonthly week={week} />
        <HeadTitle />
      </thead>
    );
  }
  return <></>;
};

export default TableHead;
