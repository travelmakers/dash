import { createStyles } from "@travelmakers/styles";
import { Props } from "./TimeLineBanner";

export default createStyles(
  (theme, { status, arrowHidden }: Pick<Props, "status" | "arrowHidden">) => {
    return {
      root: {
        backgroundColor: status === "default" ? "#0D5E49" : "#C96F48",
        borderRadius: theme.radius.radius20,
        padding: theme.spacing.spacing20,
        position: "relative",
        overflow: "hidden",
        minWidth: "328px",
        cursor: "pointer",
      },
      titleWrapper: {
        marginBottom: theme.spacing.spacing30,
        maxWidth: "220px",
      },
      textMaxLength: {
        ["& > div "]: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
      },
      labelWrapper: {
        display: "flex",
        alignItems: "center",
        width: "fit-content",
      },
      labelText: {
        width: "fit-content",
      },
      arrowImage: {
        width: "16px",
        height: "16px",
        marginLeft: "2px",
      },
      imageOval: {
        position: "absolute",
        width: "78.03px",
        height: "110.61px",
        right: -5,
        bottom: -25,
        background:
          status === "default"
            ? "linear-gradient(149.99deg, rgba(19, 134, 104, 0.8) 0%, rgba(127, 102, 16, 0.8) 88.27%)"
            : "linear-gradient(103.18deg, rgba(222, 148, 80, 0.48) 40.51%, rgba(217, 59, 59, 0.8) 100%)",
        borderRadius: "7575.76px",
      },
    };
  }
);
