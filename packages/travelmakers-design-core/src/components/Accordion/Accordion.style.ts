import { createStyles, TmTheme } from "@travelmakers-design-v2/styles";
import { AccordionType } from "./Accordion";

const ACCORDION_MARGIN_HORIZONTAL = "16px";

const ACCORDION_PADDING = {
  small: "8px 16px",
  medium: "16px",
};

const ACCORDION_TITLE_HEIGHT = {
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

export default createStyles((theme, { type }: { type: AccordionType }) => {
  return {
    root: {
      margin: 0,
    },
    item: {
      marginBottom: "32px",
      color: `${theme.colors.primary1}`,
      borderRadius: "8px",
      backgroundColor: "#fff",
      overflow: "hidden",
    },
    title: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: ACCORDION_TITLE_HEIGHT[type],
      padding: ACCORDION_PADDING[type],
      ...getFontStyles(theme, type),
      fontWeight: 700,
      cursor: "pointer",
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
});
