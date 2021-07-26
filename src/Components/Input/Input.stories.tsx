import "../../index.css"

import { Meta } from '@storybook/react';

import Input from './Input';
import * as icons from "react-icons/io"

export default {
  component: Input,
  title: 'Components/Input',
  argTypes: {
    Icon: {
      control: {type: "select"},
      mapping: {...icons},
      options: Object.keys({...icons})
    }
  }
} as Meta;

export const main = (args: any) => <Input {...args}></Input>;

main.args ={
  placeholder: "Username",
}