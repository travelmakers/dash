import { createStyles } from "@travelmakers/styles";

export default createStyles((theme) => {
  const { spacing, typography, colors } = theme;

  return {
    item: {
      display: "flex",
      alignItems: "center",

      ".tm-tab__content": { ...typography.body1, color: colors.primary3 },
      "&:last-child > .tm-tab__divider": { display: "none" },
      "& > .tm-tab__divider": { margin: `0 ${spacing.spacing20}` },
    },
    label: { minWidth: "52px", textAlign: "center", cursor: "pointer" },
    input: {
      "&:checked + .tm-tab__content": {
        ...typography.subhead1,
        color: colors.secondary1,
        fontWeight: 700,
      },
    },
  };
});
