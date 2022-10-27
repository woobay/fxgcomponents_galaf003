import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import { Card } from '../components/Card/Card';

export default {
  title: 'Components-TP1/Card',
  component: Card
};

const Template = (args) => <Card {...args} />;

export const Small = Template.bind({});
Small.args = {
  width: '18rem'
};

export const Medium = Template.bind({});
Medium.args = {
  width: '24rem'
};

export const Large = Template.bind({});
Large.args = {
  width: '30rem'
};