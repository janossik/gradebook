import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Components/Molecules/Header",
  parameters: {
    backgrounds: {
      default: "background",
    },
  },
  component: Header,
  argTypes: {
    children: {
      name: "Additional element ",
      defaultValue: "",
      control: { type: "text" },
    },
    title: {
      name: "Title",
      defaultValue: "Here it is title",
      control: { type: "text" },
    },
    category: {
      name: "Category",
      defaultValue: "Here it is category",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
