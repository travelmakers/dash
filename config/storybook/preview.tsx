import { themes } from "@storybook/theming";
import { ColorSchemeProvider, TmProvider } from "@travelmakers-design-v2/core";
import { useDarkMode } from "storybook-dark-mode";

export const parameters = {
  layout: "fullscreen",
  docs: {
    theme: themes.light,
  },
  darkMode: { current: "dark" },
};

function ThemeWrapper(props: any) {
  const colorScheme = useDarkMode() ? "dark" : "light";
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
      <TmProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {props.children}
      </TmProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [
  (renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
