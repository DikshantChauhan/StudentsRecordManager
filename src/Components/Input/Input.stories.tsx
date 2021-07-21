import "../../index.css"

import { Meta } from '@storybook/react';

import Input from './Input';
import { IoMdMail } from "react-icons/io";

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

export const main = (args: any) => <Input {...args}></Input>;

main.args ={
  placeholder: "Username",
  Icon: <IoMdMail className={`w-5 h-5 text-primary-main`}></IoMdMail>,
}