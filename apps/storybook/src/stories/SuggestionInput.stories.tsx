import { SuggestionInput } from "ui";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const entries = [
  { key: "one", data: "Erster Eintrag" },
  { key: "two", data: "Zweiter Eintrag" },
];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/SuggestionInput",
  component: SuggestionInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  render: args =>
      <SuggestionInput {...args}>{itemProps => <>{itemProps.data}</>}</SuggestionInput>,
  args: {
    loadResults: (text: string) =>
        entries.filter((item) => text.length === 0 || item.data.includes(text)),
  },
} satisfies Meta<typeof SuggestionInput<string>>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputText: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement as HTMLElement);
    await userEvent.click(canvas.getByRole("button"));
    await userEvent.keyboard("Erst");
    await expect(canvas.getByText("Erster Eintrag")).toBeInTheDocument();
    await expect(canvas.queryByText("Zweiter Eintrag")).toBe(null);
  },
};
