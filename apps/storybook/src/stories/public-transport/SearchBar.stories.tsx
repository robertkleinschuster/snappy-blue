import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "ui-public-transport";

export default {
  title: "PublicTransport/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export const Primary: StoryObj<typeof SearchBar> = {};
