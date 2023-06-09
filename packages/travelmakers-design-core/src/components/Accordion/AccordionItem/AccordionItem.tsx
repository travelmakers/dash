import React, { useContext, useState } from "react";
import { Divider } from "../../Divider";
import { Icon } from "../../Icon";
import { AccordionContext } from "../Accordion/Accordion";
import useStyles from "./AccordionItem.style";

const ACCORDION_ICON_SIZE = {
  small: 16,
  medium: 24,
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  content: string;
  handleHeader?: () => void;
}

export const AccordionItem = ({
  header,
  content,
  handleHeader,
  ...props
}: Props) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const { type, gap } = useContext(AccordionContext);
  const { classes, cx } = useStyles({ type, gap, isCollapse });

  const handleClick = () => {
    setIsCollapse((isOpen) => !isOpen);
    handleHeader?.();
  };

  return (
    <div className={classes.item} {...props}>
      <dt className={classes.header} onClick={handleClick}>
        {header}
        <Icon
          className={cx(classes.icon)}
          src={"IcAngleDown"}
          width={ACCORDION_ICON_SIZE[type]}
        />
      </dt>
      <dd className={classes.detail}>
        <Divider
          className={classes.divider}
          type={"horizontal"}
          color={"outline"}
          width="auto"
        />
        <p
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </dd>
    </div>
  );
};

AccordionItem.displayName = "AccordionItem";
