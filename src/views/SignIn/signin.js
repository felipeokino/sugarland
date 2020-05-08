import { Container, Content, Logo } from './styles';
import { Dimensions, Image, Text, View } from 'react-native';

import Constants from 'expo-constants';
import React from 'react';
import background from '../../assets/background.png';
import logo from '../../assets/logo.png';

const SignIn = () => {
  return (
    <Container>
      <Image source={background} resizeMode="contain" />
      <Content>
        <Logo>
          <Image source={logo} />
        </Logo>
      </Content>
    </Container>
  );
};

export default SignIn;
