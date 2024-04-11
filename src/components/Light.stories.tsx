import { Meta, StoryObj } from "@storybook/react";
import { LightProps } from "./Light";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  title: "Light",
  component: Light,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {} as LightProps,
};
