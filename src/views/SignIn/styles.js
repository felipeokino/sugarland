import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  flex: 1;
`;

export const Content = styled.View`
  position: absolute;
  flex: 1;
  top: 167px;
  width: 100%;
  height: ${Dimensions.get('screen').height - 167};
`;

export const Logo = styled.View`
  width: ${Dimensions.get('window').width};
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width - 60}px;
  margin: 0 auto;
  height: 62px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: #78dff0;
`;
