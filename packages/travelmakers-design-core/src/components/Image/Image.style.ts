import { createStyles } from "@travelmakers-design-v2/styles";

export default createStyles((theme) => {
  return {
    loading: {
      display: "none",
    },
    image: {
      objectFit: "cover",
      aspectRatio: "4 / 3",
    },
  };
});
