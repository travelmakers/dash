import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles(
  (theme, { load, error }: { load: boolean; error: boolean }) => {
    return {
      image: {
        display: load && !error ? "block" : "none",
        objectFit: load && !error ? "cover" : "contain",
      },
      loading: {
        objectFit: "contain",
        backgroundColor: "#EFEFEF",
      },
    };
  }
);
