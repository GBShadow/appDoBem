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

export default function FormOng({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const cnpjRef = useRef();
  const adressRef = useRef();
  const phoneRef = useRef();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [adress, setAdress] = useState("");
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
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            secureTextEntry
            placeholder="Seu CNPJ"
            ref={cnpjRef}
            returnKeyType="next"
            value={cnpj}
            onChangeText={setCnpj}
          />

          <FormInput
            secureTextEntry
            placeholder="Seu endereço"
            ref={adressRef}
            returnKeyType="next"
            value={adress}
            onChangeText={setAdress}
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

        <SignLink onPress={() => navigation.navigate("LoginOng")}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}


FormOng.navigationOptions = {
  title: 'Cadastro de Ong',
  headerTitleAlign: 'center',
}
