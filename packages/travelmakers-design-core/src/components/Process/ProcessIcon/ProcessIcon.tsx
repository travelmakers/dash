import { SequenceType } from "../Process/Process.type";
import useStyles from "./ProcessIcon.style";

export const ProcessIcon = ({
  isProcessing,
}: Pick<SequenceType, "isProcessing">) => {
  const { classes } = useStyles({ isProcessing });

  const renderPaths = () => {
    if (isProcessing) {
      return (
        <>
          <path
            className={classes.first}
            d="M1.84326 5L4.67169 7.82843L1.84326 10.6569"
          />
          <path
            className={classes.second}
            d="M6.5 5L9.32843 7.82843L6.5 10.6569"
          />
          <path
            className={classes.third}
            d="M11.1567 5L13.9852 7.82843L11.1567 10.6569"
          />
        </>
      );
    }

    return (
      <path className={classes.first} d="M7 5L9.82843 7.82843L7 10.6569" />
    );
  };

  return (
    <svg
      className={classes.root}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderPaths()}
    </svg>
  );
};
