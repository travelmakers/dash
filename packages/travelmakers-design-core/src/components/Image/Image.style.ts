import { createStyles } from "@travelmakers-design-v2/styles";
import { Props } from "./Image";

export default createStyles((theme, { load }: { load: boolean }) => {
  return {
    loading: {
      display: "none",
    },
  };
});
