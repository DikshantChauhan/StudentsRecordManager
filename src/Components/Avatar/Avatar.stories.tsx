import "../../index.css"

import { Meta } from '@storybook/react';

import Avatar from './AvatarOnline';
import AvatarOffline from './AvatarOffline';

export default {
  component: Avatar,
  title: 'Components/Avatar',
} as Meta;

export const online = (args: any) => <Avatar {...args}></Avatar>;
export const offline = (args: any) => <AvatarOffline {...args}></AvatarOffline>;