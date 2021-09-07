import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Hamburger";

export default {
  title: "Components/Atoms/Button/Hamburger",
  parameters: {
    backgrounds: {
      default: "background",
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
    active: {
      defaultValue: false,
      control: "boolean",
    },
    children: {
      control: {
        disable: true,
      },
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

export const Active = Template.bind({});

Active.args = {
  active: {
    defaultValue: false,
    control: "boolean",
  },
};
