import { Preview } from "@storybook/react";
import { NextUIProvider } from "@nextui-org/react";
import "../src/index.css";
import 'ui/dist/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <NextUIProvider>
        <Story />
      </NextUIProvider>
    ),
  ],
};

export default preview;
