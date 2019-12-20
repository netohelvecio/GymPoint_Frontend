import React from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import { Container, ContainerHeader, RegisterOptions } from './styles';

export default function StudentsRegister() {
  return (
    <Container>
      <ContainerHeader>
        <h1>Cadastro de aluno</h1>

        <RegisterOptions>
          <NavLink to="/student">
            <MdChevronLeft color="#fff" size={20} />
            VOLTAR
          </NavLink>

          <button type="submit">
            <MdCheck color="#fff" size={20} />
            CADASTRAR
          </button>
        </RegisterOptions>
      </ContainerHeader>

      <form>
        <label htmlFor="name">NOME COMPLETO</label>
        <input type="text" id="name" placeholder="Helvécio Neto" />

        <label htmlFor="email">ENDEREÇO DE EMAIL</label>
        <input type="email" id="email" placeholder="exemplo@email.com" />

        <div>
          <label htmlFor="age">IDADE</label>
          <input type="number" id="age" />

          <label htmlFor="weight">PESO (em kg)</label>
          <input type="number" id="weight" />

          <label htmlFor="height">ALTURA</label>
          <input type="number" id="height" />
        </div>
      </form>
    </Container>
  );
}
