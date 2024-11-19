import { createStyles } from "@travelmakers/styles";
import { Props } from "./Indicator";

export default createStyles(
  (theme, { topIndicatorPosition }: Pick<Props, "topIndicatorPosition">) => {
    return {
      indicatorBox: {
        maxWidth: theme.deviceSizes.mobile,
        margin: "auto",
        height: "64px",
        position: "sticky",
        top: topIndicatorPosition,
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.colors.surface,
        padding: `${theme.spacing.spacing10} ${theme.spacing.spacing50}`,
      },
      indicatorInnerBox: {
        display: "flex",
        flexDirection: "row",
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
      indicatorSelectedDayContainer: {
        minWidth: 100
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
          minWidth: "56px",
          height: "28px",
          padding: `0 ${theme.spacing.spacing10}`,
          border: `1px solid ${theme.colors.primary1}`,
          borderRadius: theme.radius.radius100,
          textAlign: "center",
        },
      },
      indicatorContractUsBox: {
        margin: "auto 0",
        ["& > div"]: {
          minWidth: "56px",
          height: "28px",
          padding: `0 ${theme.spacing.spacing10}`,
          border: `1px solid ${theme.colors.primary1}`,
          borderRadius: theme.radius.radius100,
          textAlign: "center",
          cursor: "pointer"
        },
        display: "flex",
      },
      indicatorNight: {
        display: "flex",
        justifyContent: "center",
        lineHeight: "28px",
      },
      bridgeTooltip: {
        position: "absolute",
        top: "50px",
        right: "24px",

      }
    };
  }
);
