import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, ContainerHeader, RegisterOptions } from './styles';

export default function Students() {
  return (
    <>
      <Container>
        <ContainerHeader>
          <h1>Gerenciando alunos</h1>

          <RegisterOptions>
            <button type="button">
              <MdAdd color="#fff" size={20} />
              CADASTRAR
            </button>

            <div>
              <MdSearch color="#999" size={20} />
              <input type="text" placeholder="Buscar aluno" />
            </div>
          </RegisterOptions>
        </ContainerHeader>
      </Container>
    </>
  );
}
