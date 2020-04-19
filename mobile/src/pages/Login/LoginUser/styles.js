import styled from "styled-components/native";

import Input from "../../../components/Input";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const LoginContainer = styled.View`
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InputText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const InputLogin = styled(Input)`
  width: 300px;
  height: 40px;
  padding: 10px 30px;
  border-radius: 20px;
  background: #fff;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  margin: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  margin: 0 50px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #fff;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #07224a;
`;

export const ButtonContainerSub = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const TextButtonSub = styled.Text`
  color: #fff;
  margin: 10px 0;
  font-size: 16px;
`;
