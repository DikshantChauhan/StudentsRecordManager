import "../../index.css";
import { Meta } from '@storybook/react';

import Avatar from './AvatarOnline';
import AvatarOffline from './AvatarOffline';
import image from "../../img/profile-12.jpg"

export default {
  component: AvatarOffline,
  title: 'Components/Avatar',
} as Meta;

export const online = (args: any) => <Avatar {...args}></Avatar>;
export const offline = (args: any) => <AvatarOffline {...args}></AvatarOffline>;

offline.args ={
  theme: "large",
  img: image,
}
online.args ={
  theme: "large",
  img: image,
}