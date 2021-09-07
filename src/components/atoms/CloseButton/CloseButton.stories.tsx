import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./CloseButton";

export default {
  title: "Components/Atoms/Button/CloseButton",
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
