import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "./Title";

export default {
  title: "Components/Atoms/Title",
  parameters: {
    backgrounds: {
      default: "background",
    },
  },
  component: Title,
  argTypes: {
    children: {
      name: "Content",
      defaultValue: "Interesting",
      control: { type: "text" },
    },
    fontSize: {
      name: "Font Size",
      defaultValue: "m",
      control: { type: "select" },
    },
    fontWeight: {
      name: "Font Weight",
      defaultValue: "regular",
      control: { type: "select" },
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
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Small = Template.bind({});

Small.args = {
  fontSize: "xs",
  fontWeight: "light",
};

export const Medium = Template.bind({});

export const Large = Template.bind({});

Large.args = {
  fontSize: "xl",
  fontWeight: "Bold",
};
