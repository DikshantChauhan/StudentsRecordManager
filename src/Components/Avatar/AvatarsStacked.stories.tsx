import "../../index.css";
import { Meta } from '@storybook/react';

import Avatar from './Avatar';
import AvatarsStacked from "./AvatarsStacked";
import image from "../../img/profile-12.jpg"

export default {
  component: AvatarsStacked,
  title: 'Components/AvatarsStacked',
  argTypes:{
    maxAvatars: {
      control: { type: "range", min: 0, max: 7},
    }, 
    buttonTheme: {
      options: ["large", "medium", "small", "varySmall"],
      control: {type: "inline-radio"}
    },
  }
} as Meta;

export const stackedAvatar = (args: any) => {
  return(
    <AvatarsStacked {...args}></AvatarsStacked>
  )
} 

stackedAvatar.args ={
  children: [
    <Avatar img={image} theme="large" variant="default"></Avatar>,
    <Avatar img={image} theme="large" variant="default"></Avatar>,
    <Avatar img={image} theme="large" variant="default"></Avatar>,
    <Avatar img={image} theme="large" variant="default"></Avatar>,
    <Avatar img={image} theme="large" variant="default"></Avatar>,
    <Avatar img={image} theme="large" variant="default"></Avatar>,
    <Avatar img={image} theme="large" variant="default"></Avatar>,
  ],
  buttonTheme: "large",
  maxAvatars: 4,
  className: "",
}