import "src/index.css";
import ElevatedButton from "../components/ElevatedButton";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ElevatedButton> = {
  title: "ElevatedButton",
  component: ElevatedButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicMode: Story = {
  args: {
    id: "1",
    key: "1",
    disabled: false,
    text: "Active",
    onClick: () => console.log("Clicked!"),
  },
};
