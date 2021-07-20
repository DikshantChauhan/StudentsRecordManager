import "../../index.css"

import { Meta } from '@storybook/react';

import Input from './Input';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

export const main = (args: any) => <Input {...args}></Input>;