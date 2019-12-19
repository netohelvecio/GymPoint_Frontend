import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Wrapper } from './styles';

import logo from '~/assets/images/logo2x.png';

// VALIDAÇÃO DO FORM
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  // FUNÇÃO A SER CHAMADA AO SUBMIT
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Wrapper>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <img src={logo} alt="Logo" />

          <label htmlFor="email">SEU E-MAIL</label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
          />

          <label htmlFor="password">SUA SENHA</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
          />

          <button type="submit">Entrar no sistema</button>
        </Form>
      </Container>
    </Wrapper>
  );
}
