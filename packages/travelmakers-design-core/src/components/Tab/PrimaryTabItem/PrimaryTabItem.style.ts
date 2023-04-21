import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  const { spacing, typography, colors } = theme;

  return {
    item: {
      display: "flex",
      alignItems: "center",

      "&:last-child > .tm-tab__divider": { display: "none" },
    },
    label: { minWidth: "52px", textAlign: "center", cursor: "pointer" },
    input: {
      "&:checked + .tm-tab__divider": {
        ...typography.subhead1,
        color: colors.secondary1,
        fontWeight: 700,
      },
    },
    content: { ...typography.body1, color: colors.primary3 },
    ".tm-tab__divider": { margin: `0 ${spacing.spacing20}` },
  };
});
