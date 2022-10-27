import { Divider, Tag as TagComp } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';



export const Tag = ({color}) => (
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      <TagComp color={color}>{color}</TagComp>
    </div>
  </>
);

Tag.PropTypes = {
    color: PropTypes.string
}
