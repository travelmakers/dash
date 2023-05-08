import { createStyles } from "@travelmakers/styles";
import { CalloutType } from "../Callout/Callout.type";
import { CALLOUT_COLOR } from "./CalloutHeader";

export default createStyles((theme, { type }: { type: CalloutType }) => {
  const { colors, typography, spacing } = theme;

  return {
    root: {
      display: "flex",
      alignItems: "center",
      color: colors[CALLOUT_COLOR[type]],
      ...typography.body3,
      fontWeight: 700,
      columnGap: spacing.spacing10,
    },
  };
});
