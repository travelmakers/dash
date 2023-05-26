import { createStyles, TmFontSize, TmTheme } from "@travelmakers/styles";
import { Props } from "../Accordion/Accordion";
import { AccordionType } from "../Accordion/Accordion.type";

const ACCORDION_HEIGHT: Record<AccordionType, string> = {
  small: "40px",
  medium: "56px",
};

const ACCORDION_FONT: Record<AccordionType, TmFontSize> = {
  small: "subhead2",
  medium: "subhead1",
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

export default createStyles(
  (
    theme,
    {
      type,
      gap,
      isCollapse = true,
    }: Omit<Props, "items"> & { isCollapse: boolean }
  ) => {
    const { colors, radius, typography, spacing } = theme;

    return {
      item: {
        marginBottom: `${gap}px`,
        color: `${colors.primary1}`,
        borderRadius: radius.radius20,
        backgroundColor: colors.white,
        whiteSpace: "pre-wrap",
        overflow: "hidden",

        ["&:last-child"]: {
          marginBottom: 0,
        },
      },
      header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: ACCORDION_HEIGHT[type],
        ...getSpacing(theme, type),
        ...typography[ACCORDION_FONT[type]],
        fontWeight: 700,
        cursor: "pointer",
      },
      icon: {
        transform: `${!isCollapse && "rotate(180deg)"}`,
      },
      detail: {
        maxHeight: `${isCollapse ? 0 : "auto"}`,
        margin: 0,
        overflow: "hidden",
      },
      divider: {
        margin: `0 ${spacing.spacing30}`,
      },
      content: {
        margin: 0,
        ...getSpacing(theme, type),
        ...typography[ACCORDION_FONT["small"]],
      },
    };
  }
);
