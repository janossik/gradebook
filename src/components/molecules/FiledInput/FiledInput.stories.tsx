import { ComponentStory, ComponentMeta } from "@storybook/react";

import FiledInput from "./FiledInput";

export default {
  title: "Components/Molecules/FiledInput",
  parameters: {
    backgrounds: {
      default: "background",
    },
  },
  component: FiledInput,
  argTypes: {
    children: {
      name: "Label",
      defaultValue: "What is your name?",
      control: { type: "text" },
    },
    placeholder: {
      name: "Placeholder",
      defaultValue: "your name",
      control: { type: "text" },
    },
    min: {
      name: "Min for type Number",
      defaultValue: 0,
      control: { type: "number" },
    },
    max: {
      name: "Max for type Number",
      defaultValue: 0,
      control: { type: "number" },
    },
    step: {
      name: "Step for type Number",
      defaultValue: 0,
      control: { type: "number" },
    },
    type: {
      name: "Type input",
      options: ["number", "text", "radio"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof FiledInput>;

const Template: ComponentStory<typeof FiledInput> = (args) => <FiledInput {...args} />;

export const Text = Template.bind({});
export const Number = Template.bind({});
Number.args = {
  children: "Age",
  placeholder: "How much your age?",
  type: "number",
  min: 1,
  max: 10,
  step: 0.5,
};
