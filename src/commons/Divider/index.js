import React from 'react';
import { dividerStyle } from '../../styles/styles';

export const Divider = ({ direction = 'horizontal' }) => {
  return <div style={dividerStyle(direction)} />;
};