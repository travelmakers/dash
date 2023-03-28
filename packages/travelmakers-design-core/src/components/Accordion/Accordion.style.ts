import { createStyles, TmTheme } from "@travelmakers-design-v2/styles";
import { AccordionType } from "./Accordion";

const ACCORDION_MARGIN_HORIZONTAL = "16px";

type TypeData = { [key in AccordionType]: string };

const ACCORDION_PADDING: TypeData = {
  small: "8px 16px",
  medium: "16px",
};

const ACCORDION_HEIGHT: TypeData = {
  small: "40px",
  medium: "56px",
};

const getFontStyles = (theme: TmTheme, type: AccordionType) => {
  switch (type) {
    case "small":
      return {
        fontSize: theme.fontSizes.subhead2,
        fontWeight: theme.lineHeights.subhead2,
      };
    case "medium":
      return {
        fontSize: theme.fontSizes.subhead1,
        fontWeight: theme.lineHeights.subhead1,
      };
    default:
      return;
  }
};

export default createStyles(
  (
    theme,
    {
      type,
      gap,
      isCollapse = true,
    }: { type?: AccordionType; gap?: number; isCollapse?: boolean }
  ) => {
    return {
      root: {
        margin: 0,
      },
      item: {
        maxHeight: `${isCollapse ? ACCORDION_HEIGHT[type] : "auto"}`,
        marginBottom: `${gap}px`,
        color: `${theme.colors.primary1}`,
        borderRadius: "8px",
        backgroundColor: "#fff",
        overflow: "hidden",

        ["&:last-child"]: {
          marginBottom: 0,
        },
      },
      header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: ACCORDION_HEIGHT[type],
        padding: ACCORDION_PADDING[type],
        ...getFontStyles(theme, type),
        fontWeight: 700,
        cursor: "pointer",
      },
      icon: {
        transform: `${isCollapse ? "rotate(180deg)" : "rotate(0)"}`,
      },
      detail: {
        margin: 0,
      },
      divider: {
        height: "1px",
        margin: `0 ${ACCORDION_MARGIN_HORIZONTAL}`,
        backgroundColor: theme.colors.outline,
      },
      content: {
        margin: 0,
        padding: ACCORDION_PADDING[type],
        ...getFontStyles(theme, "small"),
      },
    };
  }
);
