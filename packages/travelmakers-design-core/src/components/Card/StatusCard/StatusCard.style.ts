import { createStyles } from "@travelmakers/styles";

import { Props } from "./StatusCard";

export default createStyles(
  (theme, { isArrow, isLabel }: Pick<Props, "isArrow" | "isLabel">) => {
    return {
      root: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.radius.radius20,
        padding: theme.spacing.spacing20,
      },
      container: {
        display: "flex",
        gap: theme.spacing.spacing20,
        cursor: isArrow ? "pointer" : "auto",
      },
      image: {
        borderRadius: theme.radius.radius20,
      },
      textContainer: {
        width: "100%",
      },
      description: {
        marginTop: "7px",
      },
      footerWrapper: {
        marginTop: "7px",

        height: isLabel ? theme.lineHeights.body3 : "47px",
        display: "flex",
        alignItems: !isLabel && "flex-end !important",
      },
      textBreak: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: theme.lineHeights.body3,
        wordWrap: "break-word",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "1",
      },
      textRoomBreak: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: isLabel ? "1" : "2",
      },
      flex: {
        display: "flex",
        alignItems: "center",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
      arrowImage: {
        width: "16px",
        height: "16px",
      },
    };
  }
);
