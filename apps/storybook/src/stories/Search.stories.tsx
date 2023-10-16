import { Search } from "ui";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import React from "react";

const entries = [
  { key: "one", data: "Erster Eintrag" },
  { key: "two", data: "Zweiter Eintrag" },
  { key: "three", data: "Dritter Eintrag" },
  { key: "four", data: "Vierter Eintrag" },
  { key: "five", data: "Fünfter Eintrag" },
];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Search",
  component: Search,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  render: (args) => (
    <Search {...args}>{(itemProps) => <>{itemProps.data}</>}</Search>
  ),
  args: {
    placeholder: "Suchen...",
    loadResults: (text: string) =>
      entries.filter((item) => text.length === 0 || item.data.includes(text)),
  },
} satisfies Meta<typeof Search<string>>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filter: StoryObj<typeof Search<string>> = {
  args: {
    placeholder: "Placeholder...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement as HTMLElement);
    await expect(canvas.getByRole("button")).toHaveTextContent(
      "Placeholder..."
    );
    await userEvent.click(canvas.getByRole("button"));
    await userEvent.keyboard("Erst");
    await expect(canvas.getByText("Erster Eintrag")).toBeInTheDocument();
    await expect(canvas.queryByText("Zweiter Eintrag")).toBe(null);
  },
};

const demoEntries = [
  { key: "310", data: "IC 310 - Drava" },
  { key: "311", data: "IC 311 - Drava" },
  { key: "79", data: "RJ 79 - Vindobona" },
];

export const Demo: StoryObj<typeof Search<string>> = {
  args: {
    placeholder: "Suche...",
    loadResults: (text: string) =>
      demoEntries.filter((item) => text.length > 0 && item.data.includes(text)),
  },
};
