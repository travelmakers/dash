import { createStyles } from "@travelmakers/styles";
import { Props } from "./Indicator";

export default createStyles(
  (theme, { topIndicatorPosition }: Pick<Props, "topIndicatorPosition">) => {
    return {
      indicatorBox: {
        maxWidth: theme.deviceSizes.mobile,
        margin: "auto",
        height: "70px",
        position: "sticky",
        top: topIndicatorPosition,
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.colors.white,
        padding: `${theme.spacing.spacing10} ${theme.spacing.spacing30}`,
      },
      indicatorInnerBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: theme.spacing.spacing30,
        color: "black",
        width: "100%",
        height: "100%",
        ["& > div"]: {
          display: "flex",
          flexDirection: "column",
          rowGap: theme.spacing.spacing10,
          ["& > span"]: {
            height: theme.lineHeights.caption,
          },
        },
      },

      iconGroup: {
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100px",
        backgroundColor: theme.colors.primaryContainer,
      },

      iconCheck: {
        backgroundColor: theme.colors.primary,
      },
    };
  }
);
