import { createStyles } from "@travelmakers-design-v2/styles";
// import { Props } from "./ModalFullPageFooter";

/** style에서 사용할 Props Type을 선언합니다.
 * ex)
 *		export default createStyles((theme, { type }: Pick<Props, "prop">) => {
 *			// writhing styles
 *		}
 * */
export default createStyles((theme) => {
  const { colors, spacing, radius, typography } = theme;

  return {
    root: {
      height: "84px",
      padding: spacing.spacing30,
      paddingBottom: spacing.spacing60,
      backgroundColor: colors.white,
      borderTop: `1px solid ${colors.outline}`,
    },
    button: {
      ...typography.body2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "40px",
      padding: 0,
      color: colors.onPrimary,
      backgroundColor: colors.primary,
      border: 0,
      borderRadius: radius.radius20,
      cursor: "pointer",
    },
  };
});
