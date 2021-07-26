import "../../index.css"

import { Meta } from '@storybook/react';

import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
  argTypes: {
    theme: {
      control: {type: "inline-radio"},
      options: ["primary", "secondary"]
    },
    progress: {
      control: { type: "range", min: 0, max: 100}
    }
  }
} as Meta;

export const main = (args: any) => <ProgressBar {...args}></ProgressBar>;

main.args = {
  theme: "primary",
  progress: 10
}
