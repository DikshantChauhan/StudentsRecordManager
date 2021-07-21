import "../../index.css"

import { Meta } from '@storybook/react';

import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
} as Meta;

export const main = (args: any) => <ProgressBar {...args}></ProgressBar>;

main.args = {
  theme: "primary",
  progress: "50"
}
