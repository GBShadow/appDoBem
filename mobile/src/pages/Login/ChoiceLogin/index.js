import React from "react";
import Background from "../../../components/Background";

import { Container, Logo, LoginButton, TextButton } from "./styles";

import logo from "../../../assets/logo.png";

export default function ChoiceLogin() {
  return (
    <Background>
      <Container>
        <Logo source={logo} />

        <LoginButton>
          <TextButton>SOU UMA ONG</TextButton>
        </LoginButton>

        <LoginButton>
          <TextButton>SOU UM VOLUNTÁRIO</TextButton>
        </LoginButton>
      </Container>
    </Background>
  );
}
