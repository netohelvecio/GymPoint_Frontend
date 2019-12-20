import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  ContainerHeader,
  RegisterOptions,
  StudentTable,
  ButtonDelete,
  ButtonEdit,
  Pagination,
} from './styles';
import ContainerLoading from '~/components/Loading';

export default function Students() {
  const [student, setStudent] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStudent() {
      setLoading(true);
      const response = await api.get('students', {
        params: {
          page,
          name,
        },
      });

      setStudent(response.data);
      setLoading(false);
    }

    loadStudent();
  }, [name, page]);

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

        {loading ? (
          <ContainerLoading />
        ) : (
          <StudentTable>
            <thead>
              <th width={400}>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
              <th />
            </thead>

            <tbody>
              {student.map(s => (
                <tr key={s.id.toString()}>
                  <td> {s.name} </td>
                  <td> {s.email} </td>
                  <td> {s.age} </td>
                  <td>
                    <div>
                      <ButtonEdit type="button">editar</ButtonEdit>
                      <ButtonDelete type="button">apagar</ButtonDelete>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </StudentTable>
        )}

        <Pagination>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => setPage(page - 1)}
          >
            Anterior
          </button>

          <span>Página {page} </span>

          <button type="button" onClick={() => setPage(page + 1)}>
            Próximo
          </button>
        </Pagination>
      </Container>
    </>
  );
}
