import React from 'react';

import { Container, Wrapper } from './styles';

import logo from '~/assets/images/logo2x.png';

export default function SignIn() {
  return (
    <Wrapper>
      <Container>
        <form>
          <img src={logo} alt="Logo" />
          <label htmlFor="email">SEU E-MAIL</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
          />

          <label htmlFor="password">SUA SENHA</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
          />

          <button type="submit">Entrar no sistema</button>
        </form>
      </Container>
    </Wrapper>
  );
}
