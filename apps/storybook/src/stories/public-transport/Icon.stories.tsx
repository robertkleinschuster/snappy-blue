import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Icon, iconResources } from "ui";
import {ICONS_BKK, ICONS_DB_1, ICONS_DB_2, ICONS_DB_3, ICONS_MAV, ICONS_OEBB} from "ui/src";

const defaultSize = 40

export default {
  title: "PublicTransport/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    resource: {
      control: false,
    },
    icon: {
      control: "select",
      options: iconResources.getResource(ICONS_BKK).names,
    },
    size: {
      control: {
        type: "range",
        min: 12,
        max: 200
      },
    },
  },
  args: {
    size: defaultSize,
    icon: "tram",
    resource: ICONS_BKK,
  },
} satisfies Meta<typeof Icon>;

function createResourceExport(name: string): StoryObj<typeof Icon> {
  const icons = iconResources.getResource(name).names;
  return {
    name: name,
    storyName: name,
    tags: ['autodocs'],
    argTypes: {
      icon: {
        control: "select",
        options: icons,
      },
    },
    args: {
      size: defaultSize,
      icon: icons[0],
      resource: name,
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      await expect(
        canvas.getByText(iconResources.getChar(name, icons[0]))
      ).toBeInTheDocument();
    },
  };
}

export const BKK = createResourceExport(ICONS_BKK);
export const MAV = createResourceExport(ICONS_MAV);
export const OEBB = createResourceExport(ICONS_OEBB);
export const DB_1 = createResourceExport(ICONS_DB_1);
export const DB_2 = createResourceExport(ICONS_DB_2);
export const DB_3 = createResourceExport(ICONS_DB_3);
