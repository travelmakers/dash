import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  return {
    indicatorBox: {
      width: "100%",
      height: "64px",
      top: 0,
      maxWidth: theme.deviceSizes.mobile,
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: theme.colors.surface,
      padding: `${theme.spacing.spacing10} ${theme.spacing.spacing50}`,
    },
    indicatorInnerBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: theme.spacing.spacing30,
      color: "black",
      width: "233px",
      height: "100%",
      ["& > div"]: {
        display: "flex",
        flexDirection: "column",
        ["& > span"]: {
          height: theme.lineHeights.caption,
        },
      },
    },
    indicatorSelectedDay: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      ["& > span"]: {
        height: theme.lineHeights.caption,
      },
    },
    indicatorDateCountBox: {
      margin: "auto 0",
      ["& > div"]: {
        width: "56px",
        height: "28px",
        border: `1px solid ${theme.colors.primary1}`,
        borderRadius: theme.radius.radius100,
        textAlign: "center",
      },
    },
  };
});
