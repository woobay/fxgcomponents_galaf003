import { Avatar as AvatarComp } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const Avatar = ({color, user}) => {
 
  return (
    
    <>
      <AvatarComp
        style={{
          backgroundColor: `${color}`,
          verticalAlign: 'middle',
        }}
        size="large"  
        >
       {user}
        </AvatarComp>
    </>
  );
};
 
Avatar.PropTypes = {
    color: PropTypes.string,
    user: PropTypes.string
}