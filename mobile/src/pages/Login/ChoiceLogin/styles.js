import { RectButton } from 'react-native-gesture-handler';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 20px
`;

export const LoginButton = styled(RectButton)`
  width: 250px;
  height: 50px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #07224A;
`;
