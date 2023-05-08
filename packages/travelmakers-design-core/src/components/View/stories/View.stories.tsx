import { View } from "../View";

export default {
  title: "@travelmakers/core/General/View",
  component: View,
};

export const Default = () => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.black,
      })}
    />
  );
};
