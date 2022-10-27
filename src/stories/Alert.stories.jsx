import './style.css'

import { Alert } from '../components/Alert/Alert';

export default {
  title: 'Components-TP1/Alert',
  component: Alert
};

const Template = (args) => <Alert {...args} />;

export const Sccess = Template.bind({});
Sccess.args = {
    text: "Ceci est une texte de Success",
    type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
    text: "Ceci est un texte de Warning",
    type: "warning",
};

export const Info = Template.bind({});
Info.args = {
    text: "Ceci est une Information",
    type: "info",
};