import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "./Alert";

export default {
  title: "Components/Molecules/Alert",
  parameters: {
    backgrounds: {
      default: "background",
    },
  },
  component: Alert,
  argTypes: {
    title: { defaultValue: "Oops!", control: "text" },
    message: {
      defaultValue: `Something went wrong. Please try again, or contact our support.`,
      control: "text",
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
    <Alert {...args} />
  </div>
);

export const Default = Template.bind({});
