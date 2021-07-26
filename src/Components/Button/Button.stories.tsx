import "../../index.css"

import { Meta } from '@storybook/react';

import Button from './ButtonOutline';
import ButtonSolid from './ButtonSolid';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    theme: {
      control: {type: "inline-radio"},
      options: ["blue", "black", "red"]
    }
  }
} as Meta;

export const outline = (args: any) => <Button {...args}></Button>;
export const solid = (args: any) => <ButtonSolid {...args}></ButtonSolid>;


outline.args = {
  theme: "blue",
  children: "Button",
}
solid.args = {
  theme: "blue",
  children: "Button",
}