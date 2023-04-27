import React, { useEffect, useState } from "react";
import useStyles from "./OptionBox.style";
import { Typography } from "../../../Typography";
import { Icon } from "../../../Icon";
import { Button } from "../../../Button";
import { DateCellDay } from "../DateCell/DateCell.type";

interface Props {
  checked?: {
    from: DateCellDay;
    to: DateCellDay;
  };
  children: React.ReactNode;
  title: string;
  buttonTitle: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const OptionBox: React.FC<Props> = ({
  checked = {
    from: null,
    to: null,
  },
  children,
  title,
  buttonTitle,
  onClick,
}) => {
  const [open, setOpen] = useState(false);
  const { classes, cx } = useStyles({ open });

  useEffect(() => {
    if (!checked.from || !checked.to) {
      setOpen(false);
    }
  }, [checked]);

  return (
    <div className={classes.optionBox}>
      <div className={classes.titleBox}>
        <Typography level="body2" color="primary1" strong>
          {title}
        </Typography>
        <Icon
          src="IcAngleUp"
          width={24}
          height={24}
          onClick={() => checked.from && checked.to && setOpen((prev) => !prev)}
        />
      </div>
      <div className={classes.contentBox}>{children}</div>
      <Button size="medium" onClick={onClick}>
        {buttonTitle}
      </Button>
    </div>
  );
};

export default OptionBox;
