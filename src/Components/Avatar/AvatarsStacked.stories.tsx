import "../../index.css";
import { Meta } from '@storybook/react';

import AvatarOffline from './AvatarOffline';
import AvatarsStacked from "./AvatarsStacked";
import image from "../../img/profile-12.jpg"

export default {
  component: AvatarsStacked,
  title: 'Components/Avatar',
} as Meta;

export const stackedAvatar = (args: any) => {
  return(
    <AvatarsStacked {...args}></AvatarsStacked>
  )
}

const myArr = [
  <AvatarOffline img={image} theme="large"></AvatarOffline>,
  <AvatarOffline img={image} theme="large"></AvatarOffline>,
  <AvatarOffline img={image} theme="large"></AvatarOffline>,
  <AvatarOffline img={image} theme="large"></AvatarOffline>,
  <AvatarOffline img={image} theme="large"></AvatarOffline>,
  <AvatarOffline img={image} theme="large"></AvatarOffline>,
  <AvatarOffline img={image} theme="large"></AvatarOffline>
]


stackedAvatar.args ={
  children: myArr,
  theme: "large",
  maxAvatars: 4,
  className: ""
}