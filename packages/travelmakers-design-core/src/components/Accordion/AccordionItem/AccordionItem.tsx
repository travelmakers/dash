import { useContext, useState } from "react";
import { Icon } from "../../Icon/Icon";
import { View } from "../../View";
import { AccordionContext } from "../Accordion/Accordion";
import useStyles from "./AccordionItem.style";

const ACCORDION_ICON_SIZE = {
  small: 16,
  medium: 24,
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  idx: number | string;
  header: React.ReactNode;
  content: React.ReactNode;
  handleHeader?: () => void;
}

export const AccordionItem = ({
  idx,
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
    handleHeader && handleHeader();
  };

  return (
    <View<React.ElementType> key={idx} className={classes.item} {...props}>
      <dt className={classes.header} onClick={handleClick}>
        {header}
        <Icon
          className={cx(classes.icon)}
          type={"control"}
          src={"IcAngleDown"}
          width={ACCORDION_ICON_SIZE[type]}
        />
      </dt>
      <dd className={classes.detail}>
        <div className={classes.divider} />
        <p className={classes.content}>{content}</p>
      </dd>
    </View>
  );
};

AccordionItem.displayName = "AccordionItem";
