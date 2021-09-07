import { ComponentStory, ComponentMeta } from "@storybook/react";

import News from "./News";
//{ title, category, content, image, alt }
export default {
  title: "Components/Molecules/News",
  parameters: {
    backgrounds: {
      default: "background",
    },
  },
  component: News,
  argTypes: {
    content: {
      name: "Content",
      defaultValue:
        "Morbi mattis nunc non nibh laoreet, nec ullamcorper velit posuere. Vivamus ac mauris ex. Ut pharetra gravida varius. Proin vulputate ligula at nunc pretium, nec ultrices ante placerat. Quisque non mollis nisl. In et lorem euismod quam dapibus fringilla. Phasellus eu velit et erat rutrum ultricies. Fusce vel cursus nisi. Aliquam sed finibus tortor. Mauris consectetur efficitur leo, in sollicitudin tellus rhoncus placerat.",
      control: { type: "text" },
    },
    title: {
      name: "Title",
      defaultValue: "Shool is coming!",
      control: { type: "text" },
    },
    category: {
      name: "Category",
      defaultValue: "students",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = (args) => <News {...args} />;

export const Default = Template.bind({});
