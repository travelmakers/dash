import { createStyles } from "@travelmakers/styles";

export default createStyles((theme, { error }: { error: boolean }) => {
  return {
    image: {
      display: !error ? "block" : "none",
      objectFit: !error ? "cover" : "contain",
    },
    loading: {
      objectFit: "contain",
      backgroundColor: "#EFEFEF",
    },
  };
});
