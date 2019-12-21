import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

import {
  Container,
  ContainerHeader,
  RegisterOptions,
  StudentTable,
  ButtonDelete,
  Pagination,
} from './styles';
import ContainerLoading from '~/components/Loading';

export default function Plans() {
  const [plan, setPlan] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStudent() {
      setLoading(true);
      const response = await api.get('plans', {
        params: {
          page,
        },
      });

      const data = response.data.map(p => ({
        ...p,
        priceFormatted: formatPrice(p.price),
      }));

      setPlan(data);
      setLoading(false);
    }

    loadStudent();
  }, [page]);

  async function deletePlan(id) {
    const result = window.confirm('Deseja deletar plano?');

    if (result) {
      await api.delete(`plans/${id}`);

      toast.success('Plano deletado!');
    }
  }

  return (
    <>
      <Container>
        <ContainerHeader>
          <h1>Gerenciando planos</h1>

          <RegisterOptions>
            <NavLink to="plan/register">
              <MdAdd color="#fff" size={20} />
              CADASTRAR
            </NavLink>
          </RegisterOptions>
        </ContainerHeader>

        {loading ? (
          <ContainerLoading />
        ) : (
          <StudentTable>
            <thead>
              <th width={400}>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR P/ MÊS</th>
              <th />
            </thead>

            <tbody>
              {plan.map(p => (
                <tr>
                  <td> {p.title} </td>
                  <td> {p.duration} mês </td>
                  <td> {p.priceFormatted} </td>
                  <td>
                    <div>
                      <NavLink type="button" to={`/plan/${p.id}`}>
                        editar
                      </NavLink>
                      <ButtonDelete
                        type="button"
                        onClick={() => deletePlan(p.id)}
                      >
                        apagar
                      </ButtonDelete>
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
