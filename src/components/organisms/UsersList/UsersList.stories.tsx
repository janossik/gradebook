import { ComponentStory, ComponentMeta } from "@storybook/react";

import UsersList from "./UsersList";
// { id, name, attendance, average }
export default {
  title: "Components/Organisms/UsersList",
  parameters: {
    backgrounds: {
      default: "background",
    },
  },
  component: UsersList,
  argTypes: {
    id: {
      name: "Show students from group",
      defaultValue: "A",
      options: ["A", "B", "C"],
      control: { type: "select" },
    },
    users: {
      defaultValue: [
        {
          id: "1",
          name: "Adam Romański",
          attendance: "39%",
          average: "2.3",
          group: "A",
        },
        {
          id: "3",
          name: "Robert Greg",
          attendance: "52%",
          average: "3.3",
          group: "A",
        },
        {
          id: "2",
          name: "Agnieszka Krak",
          attendance: "69%",
          average: "4.3",
          group: "B",
        },
      ],
      control: "object",
    },
  },
} as ComponentMeta<typeof UsersList>;

const Template: ComponentStory<typeof UsersList> = (args) => <UsersList {...args} />;

export const Default = Template.bind({});
