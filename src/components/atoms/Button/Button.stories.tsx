import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Atoms/Button/Normal",
  parameters: {
    backgrounds: {
      default: "text",
    },
  },
  component: Button,
  argTypes: {
    color: {
      control: "color",
    },
    backgroundColor: {
      control: "color",
    },
    children: {
      defaultValue: "Click it!",
      control: "text",
    },
    ref: {
      control: { disable: true },
    },
    theme: {
      control: { disable: true },
    },
    as: {
      control: { disable: true },
    },
    forwardedAs: {
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
