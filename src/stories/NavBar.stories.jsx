import 'bootstrap/dist/css/bootstrap.min.css'


import { NavBar } from '../components/NavBar/NavBar';

export default {
  title: 'Components-TP1/NavBar',
  component: NavBar
};

const Template = (args) => <NavBar {...args} />;

export const BgDark = Template.bind({});
BgDark.args = {
  font: "dark",
  bgColor: "dark"
};

export const BgPrimary = Template.bind({});
BgPrimary.args = {
  font: "dark",
  bgColor: "primary"
};

export const BgLight = Template.bind({});
BgLight.args = {
  font: "light",
  bgColor: "light"
};