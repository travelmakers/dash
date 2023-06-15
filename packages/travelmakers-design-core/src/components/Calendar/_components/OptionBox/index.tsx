import React, { useEffect, useState } from "react";
import useStyles from "./OptionBox.style";
import { Typography } from "../../../Typography";
import { Icon } from "../../../Icon";
import { Button, ButtonProps } from "../../../Button";
import { SelectedDays } from "../../Calendar.type";
import Link from "next/link";

interface Props {
  checked?: SelectedDays;
  initOpen?: boolean;
  children: React.ReactNode;
  title: string;
  buttonTitle: string;
  buttonProps: ButtonProps<typeof Button>;
  href?: string;
}

const OptionBox: React.FC<Props> = ({
  checked = {
    from: null,
    to: null,
    time: { hour: null, minutes: null },
  },
  initOpen = false,
  children,
  title,
  buttonTitle,
  href = "",
  buttonProps,
}) => {
  const [open, setOpen] = useState(initOpen);
  const { classes } = useStyles({ open });

  useEffect(() => {
    setOpen(initOpen);
  }, [initOpen]);

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
      <Button
        component={Link}
        href={href}
        size="medium"
        className={classes.submitButton}
        {...buttonProps}
      >
        {buttonTitle}
      </Button>
    </div>
  );
};

export default OptionBox;
