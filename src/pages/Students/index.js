import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import {
  Container,
  ContainerHeader,
  RegisterOptions,
  StudentTable,
  ButtonDelete,
  ButtonEdit,
} from './styles';

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

        <StudentTable>
          <thead>
            <th width={400}>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
            <th />
          </thead>
          <tbody>
            <tr>
              <td>Helvécio Neto</td>
              <td>helvecioneto77@gmail.com</td>
              <td>20</td>
              <td>
                <div>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </div>
              </td>
            </tr>
            <tr>
              <td>Helvécio Neto</td>
              <td>helvecioneto77@gmail.com</td>
              <td>20</td>
              <td>
                <div>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </div>
              </td>
            </tr>
            <tr>
              <td>Helvécio Neto</td>
              <td>helvecioneto77@gmail.com</td>
              <td>20</td>
              <td>
                <div>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </div>
              </td>
            </tr>
            <tr>
              <td>Helvécio Neto</td>
              <td>helvecioneto77@gmail.com</td>
              <td>20</td>
              <td>
                <div>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </div>
              </td>
            </tr>
            <tr>
              <td>Helvécio Neto</td>
              <td>helvecioneto77@gmail.com</td>
              <td>20</td>
              <td>
                <div>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </div>
              </td>
            </tr>
            <tr>
              <td>Helvécio Neto</td>
              <td>helvecioneto77@gmail.com</td>
              <td>20</td>
              <td>
                <div>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </div>
              </td>
            </tr>
            <tr>
              <td>Helvécio Neto</td>
              <td>helvecioneto77@gmail.com</td>
              <td>20</td>
              <td>
                <div>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </div>
              </td>
            </tr>
          </tbody>
        </StudentTable>
      </Container>
    </>
  );
}
