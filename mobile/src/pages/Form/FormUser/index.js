import React, { useRef, useState } from "react";
import logo from "../../../assets/logo.png";

import Background from "../../../components/Background";

import {
  Container,
  Form,
  FormInput,
  SignLinkText,
  SubmitButton,
  SignLink,
  SubmitText,
  Logo,
} from "./styles";

export default function FormUser({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpfRef = useRef();
  const phoneRef = useRef();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Background>
      <Container>
        <Logo source={logo} />

        <Form>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            secureTextEntry
            placeholder="Seu CPF"
            ref={cpfRef}
            returnKeyType="send"
            value={cpf}
            onChangeText={setCpf}
          />

          <FormInput
            secureTextEntry
            placeholder="Seu telefone"
            ref={phoneRef}
            returnKeyType="send"
            value={phone}
            onChangeText={setPhone}
          />
        </Form>

          <SubmitButton onPress={() => {}}>
            <SubmitText>Criar conta</SubmitText>
          </SubmitButton>

        <SignLink onPress={() => navigation.navigate("LoginUser")}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

FormUser.navigationOptions = {
  title: "Cadastro de Voluntário",
  headerTitleAlign: "center",
};
