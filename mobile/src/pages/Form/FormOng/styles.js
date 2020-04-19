import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behaivior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  width: 300px;
  height: 40px;
  padding: 10px 30px;
  border-radius: 20px;
  background: #fff;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 15px;
  background: #fff;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const SubmitText = styled.Text`
  color: #07224A;
  font-size: 16px;
  font-weight: bold;
`;
