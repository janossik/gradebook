import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import CheckBox from "./CheckBox";

export default {
  title: "Components/Atoms/CheckBox",
  component: CheckBox,
  argTypes: {
    color: {
      control: "color",
    },
    name: {
      defaultValue: "Check it!",
      control: "text",
    },
    value: {
      control: "boolean",
      defaultValue: false,
      description: "This value is controlled by onClick",
    },
    onClick: {
      control: false,
      description: "This action control state (useState) and set value for checkbox",
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <CheckBox
      {...args}
      value={value}
      onClick={() => {
        setValue(!value);
      }}
      color={args.color}
    />
  );
};

export const Default = Template.bind({});

Default.args = {};

export const Checked = Template.bind({});

Checked.args = {
  value: true,
};
