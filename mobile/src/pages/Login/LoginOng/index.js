import React from "react";
import { TouchableOpacity } from 'react-native';

import Background from "../../../components/Background";

import {
  Container,
  LoginContainer,
  InputText,
  InputLogin,
  ButtonContainer,
  ButtonContainerSub,
  SubmitButton,
  TextButton,
  TextButtonSub,
} from "./styles";

export default function LoginOng({ navigation }) {
  return (
    <Background>
      <Container>
        <LoginContainer>
          <InputText>E-mail</InputText>
          <InputLogin placeholder="Digite seu e-mail" />

          <InputText>Senha</InputText>
          <InputLogin placeholder="Digite sua senha" />
        </LoginContainer>

        <ButtonContainer>
          <SubmitButton onPress={() => {}}>
            <TextButton>Entrar</TextButton>
          </SubmitButton>

          <SubmitButton onPress={() => navigation.navigate('ChoiceLogin')}>
            <TextButton>Cancelar</TextButton>
          </SubmitButton>
        </ButtonContainer>

        <ButtonContainerSub>

          <TouchableOpacity onPress={() => {}}>
            <TextButtonSub>Esqueci a senha</TextButtonSub>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('FormOng')}>
            <TextButtonSub>Não tenho cadastro</TextButtonSub>
          </TouchableOpacity>

        </ButtonContainerSub>
      </Container>
    </Background>
  );
}

LoginOng.navigationOptions = {
  title: 'Bem vindo Ong',
  headerTitleAlign: 'center',
}
