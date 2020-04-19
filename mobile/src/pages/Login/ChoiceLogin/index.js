import React from "react";
import Background from "../../../components/Background";

import { Container, Logo, LoginButton, TextButton } from "./styles";

import logo from "../../../assets/logo.png";

export default function ChoiceLogin({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo source={logo} />

        <LoginButton onPress={() => navigation.navigate('LoginOng')}>
          <TextButton>SOU UMA ONG</TextButton>
        </LoginButton>

        <LoginButton onPress={() => navigation.navigate('LoginUser')}>
          <TextButton>SOU UM VOLUNTÁRIO</TextButton>
        </LoginButton>
      </Container>
    </Background>
  );
}

ChoiceLogin.navigationOptions = {
  title: 'Bem vindo',
  headerTitleAlign: 'center',
}
