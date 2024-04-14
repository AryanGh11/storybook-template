import "src/index.css";
import TextField from "../components/TextField";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  title: "Text Field",
  component: TextField,
  argTypes: {
    value: {
      type: {
        name: "string",
        required: true,
      },
      defaultValue: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateMode: Story = {
  args: {
    id: "1",
    key: "1",
    placeholder: "Placeholder",
    value: "",
    onInputChange: () => {},
    disabled: false,
    onDisabledChange: () => {},
  },
};

export const EditMode: Story = {
  args: {
    id: "1",
    key: "1",
    placeholder: "Placeholder",
    value: "This is a test value",
    onInputChange: () => {},
    disabled: true,
    onDisabledChange: () => {},
  },
};

export const LoadingMode: Story = {
  argTypes: {
    value: {
      type: "symbol",
    },
  },
  args: {
    id: "1",
    key: "1",
    placeholder: "Placeholder",
    value: null,
    onInputChange: () => {},
    disabled: true,
    onDisabledChange: () => {},
  },
};
