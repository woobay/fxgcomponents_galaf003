import React from 'react';
import './style.css'

import { Button } from '../components/Button/Button';

export default {
  title: 'Components-TP1/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Dashed = Template.bind({});
Dashed.args = {
  text: "Button",
  type: 'dashed'
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
  type: 'primary'
};

export const Link = Template.bind({});
Link.args = {
  text: "Button",
  type: "link"
};

export const Patate = Template.bind({});
Patate.args = {
  text: "Patate",
  type: 'primary'
};
