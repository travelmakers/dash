import { createStyles, TmTheme } from "@travelmakers-design-v2/styles";
import { AccordionType, Props } from "../Accordion/Accordion";

const ACCORDION_HEIGHT: { [key in AccordionType]: string } = {
  small: "40px",
  medium: "56px",
};

const getSpacing = (theme: TmTheme, type: AccordionType) => {
  switch (type) {
    case "small":
      return {
        padding: `${theme.spacing.spacing10} ${theme.spacing.spacing30}`,
      };
    case "medium":
      return { padding: `${theme.spacing.spacing30}` };
    default:
      return;
  }
};

const getFontStyles = (theme: TmTheme, type: AccordionType) => {
  switch (type) {
    case "small":
      return theme.typography.subhead2;
    case "medium":
      return theme.typography.subhead1;
    default:
      return;
  }
};

export default createStyles(
  (
    theme,
    { type, gap, isCollapse = true }: Props & { isCollapse: boolean }
  ) => {
    return {
      item: {
        maxHeight: `${isCollapse ? ACCORDION_HEIGHT[type] : "auto"}`,
        marginBottom: `${gap}px`,
        color: `${theme.colors.primary1}`,
        borderRadius: theme.radius.radius20,
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
        ...getSpacing(theme, type),
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
        margin: `0 ${theme.spacing.spacing30}`,
        backgroundColor: theme.colors.outline,
      },
      content: {
        margin: 0,
        ...getSpacing(theme, type),
        ...getFontStyles(theme, "small"),
      },
    };
  }
);
