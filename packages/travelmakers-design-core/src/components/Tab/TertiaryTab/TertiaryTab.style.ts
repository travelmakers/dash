import { createStyles } from "@travelmakers-design-v2/styles";
// import { Props } from "./TertiaryTab";

/** style에서 사용할 Props Type을 선언합니다.
 * ex)
 *		export default createStyles((theme, { type }: Pick<Props, "prop">) => {
 *			// writhing styles
 *		}
 * */
export default createStyles((theme) => {
  const { spacing, colors, radius } = theme;

  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      columnGap: spacing.spacing5,
      margin: 0,
      padding: spacing.spacing5,
      border: 0,
      backgroundColor: colors.primary,
      borderRadius: radius.radius100,
    },
  };
});
