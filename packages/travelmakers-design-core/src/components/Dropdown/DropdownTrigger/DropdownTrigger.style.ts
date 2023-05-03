import { createStyles } from "@travelmakers-design-v2/styles";
// import { Props } from "./DropdownTrigger";

/** style에서 사용할 Props Type을 선언합니다.
 * ex)
 *		export default createStyles((theme, { type }: Pick<Props, "prop">) => {
 *			// writhing styles
 *		}
 * */
export default createStyles((theme) => {
  const { colors } = theme;

  return {
    root: {
      padding: 0,
      backgroundColor: colors.transparent,
      border: 0,
      outline: 0,
    },
  };
});
