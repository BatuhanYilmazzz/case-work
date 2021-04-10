import React from 'react';
import Box from '../Box';
import {Image} from 'react-native';

const HeaderRight = () => {
  return (
    <Box p={2}>
      <Image
        source={require('../../../assets/icons/basket.png')}
        style={{width: 25, height: 25}}
      />
    </Box>
  );
};

export default HeaderRight;
