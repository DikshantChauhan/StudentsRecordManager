import "../../index.css"

import { Meta } from '@storybook/react';

import Alert from './Alert';

export default {
  component: Alert,
  title: 'Components/PopUp',
} as Meta;

export const main = (args: any) => {
    return(
        <Alert {...args}></Alert>
    )
};

main.args = {
  theme: "ErrorRed",
  children: "Error! Lorem Ipsum is simply dummy text of the printing.",
}
