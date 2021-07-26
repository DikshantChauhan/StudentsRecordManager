import "../../index.css";
import { Meta } from '@storybook/react';

import Avatar from './Avatar';
import image1 from "../../img/profile-12.jpg"
import image2 from "../../img/shield-1086703_960_720.webp"

export default {
  component: Avatar,
  title: 'Components/Avatars',
  argTypes: {
    variant: {
        options: ["default", "online", "offline"],
        control: { type: "inline-radio" }
    },
    theme: {
      options: ["large", "medium", "small", "varySmall"],
      control: { type: "inline-radio"}
    },
    img: {
      options: [image1, image2],
      control: { type: "select"}
    }
  }
} as Meta;

export const avatar_ = (args: any) => <Avatar {...args}></Avatar>;

avatar_.args ={
  theme: "large",
  variant: "default",
  img: image1,
};