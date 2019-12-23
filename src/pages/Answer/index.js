import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container, ContainerHeader, AnswerTable, Pagination } from './styles';
import ContainerLoading from '~/components/Loading';

export default function Answer() {
  const [answer, setAnswer] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleAnswer() {
      try {
        setLoading(true);

        const response = await api.get('/help-orders/answer', {
          params: {
            page,
          },
        });

        setLoading(false);
        setAnswer(response.data);
      } catch (error) {
        toast.error('Erro ao listar perguntas');
      }
    }

    handleAnswer();
  }, [page]);

  return (
    <Container>
      <ContainerHeader>
        <h1>Pedidos de auxílio</h1>
      </ContainerHeader>

      {loading ? (
        <ContainerLoading />
      ) : (
        <AnswerTable>
          <thead>
            <th>ALUNO</th>
            <th />
          </thead>

          <tbody>
            {answer.map(a => (
              <tr key={a.id.toString()}>
                <td> {a.student.name} </td>
                <td>
                  <div>
                    <a href="">responder</a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </AnswerTable>
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
  );
}
