import useStyles from "./CalloutItem.style";

export interface Props {
  content: string;
  isEmpty?: boolean;
}

export const CalloutItem = ({ content, isEmpty = false, ...props }: Props) => {
  const { classes, cx } = useStyles();

  return (
    <dd className={cx(classes.root, { "sr-only": isEmpty })} {...props}>
      {content}
    </dd>
  );
};
