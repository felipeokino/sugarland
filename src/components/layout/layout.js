import { Dimensions, Image, StyleSheet, View } from 'react-native';

import React from 'react';
// import { Container } from './styles';
import background from '../../assets/background.png';

const layout = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
      }}
    >
      <Image source={background} resizeMode="contain" />
      <View
        style={{
          position: 'absolute',
          flex: 1,
          top: 200,
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height - 200,
        }}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'relative',
  },
});

export default layout;
