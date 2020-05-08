import { Button, Container, Content, Logo } from './styles';
import {
  Dimensions,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import Constants from 'expo-constants';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import background from '../../assets/background.png';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const LandPage = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.navigate('Signin');
  };

  return (
    <Container>
      <Image source={background} resizeMode="contain" />
      <Content>
        <Logo>
          <Image source={logo} />
        </Logo>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: 24,
            marginBottom: 100,
            marginTop: 30,
          }}
        >
          Happee Desserts
        </Text>
        <Button onPress={handleSignIn}>
          <Text style={{ fontSize: 24 }}>Sign In</Text>
        </Button>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}
        >
          <Text style={{ fontSize: 20 }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => alert('Hello there')}>
            <Text style={{ color: '#FF00DD', fontSize: 20 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default LandPage;
