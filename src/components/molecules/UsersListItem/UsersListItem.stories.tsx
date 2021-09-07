import { ComponentStory, ComponentMeta } from "@storybook/react";

import UsersListItem from "./UsersListItem";
// { id, name, attendance, average }
export default {
  title: "Components/Molecules/UserListItem",
  parameters: {
    backgrounds: {
      default: "background",
    },
  },
  component: UsersListItem,
  argTypes: {
    name: {
      name: "Name student",
      defaultValue: "Joo Bray's",
      control: { type: "text" },
    },
    attendance: {
      name: "Attendance",
      defaultValue: "99%",
      control: { type: "text" },
    },
    average: {
      name: "Average",
      defaultValue: "4",
      control: { type: "text" },
    },
    consents: {
      control: { display: false },
    },
  },
} as ComponentMeta<typeof UsersListItem>;

const Template: ComponentStory<typeof UsersListItem> = (args) => <UsersListItem {...args} />;

export const Default = Template.bind({});
