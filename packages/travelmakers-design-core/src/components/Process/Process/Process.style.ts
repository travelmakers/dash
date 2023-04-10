import { createStyles } from "@travelmakers-design-v2/styles";
// import { Props } from "./Process";

/** style에서 사용할 Props Type을 선언합니다.
 * ex)
 *		export default createStyles((theme, { type }: Pick<Props, "prop">) => {
 *			// writhing styles
 *		}
 * */
export default createStyles((theme) => {
  const { spacing, colors } = theme;

  return {
    root: {
      display: "inline-flex",
      minWidth: "328px",
      minHeight: "52px",
      margin: 0,
      padding: spacing.spacing5,
      backgroundColor: colors.primary99,
      borderRadius: "26px",
    },
  };
});
