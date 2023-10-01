import { Preview } from "@storybook/react";
import { NextUIProvider } from "@nextui-org/react";
import "../src/index.css";
import "ui/dist/index.css";

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
    (Story, context) => {
      document.body.classList.remove('light', 'dark')
      if (context?.globals?.theme) {
        document.body.classList.add(context.globals.theme)
      }
      return (
        <NextUIProvider>
            <Story />
        </NextUIProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        icon: 'contrast',
        items: [
          {value: "light", title: 'Light'},
          {value: "dark", title: 'Dark'}
        ],
      },
    },
  },
};

export default preview;
