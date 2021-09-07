import { ComponentStory, ComponentMeta } from "@storybook/react";

import Score from "./Score";

export default {
  title: "Components/Atoms/Score",
  parameters: {
    backgrounds: {
      default: "background",
    },
  },
  component: Score,
  argTypes: {
    score: {
      defaultValue: 4,
      control: { max: 6, min: 0, type: "range" },
    },
  },
} as ComponentMeta<typeof Score>;

const Template: ComponentStory<typeof Score> = (args) => <Score {...args} />;

export const Default = Template.bind({});
