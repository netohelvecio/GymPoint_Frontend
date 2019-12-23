import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { addMonths, format, addDays, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import { formatPrice } from '~/util/format';
import api from '~/services/api';

import { Container, ContainerHeader, RegisterOptions } from './styles';

const schema = Yup.object().shape({
  planId: Yup.string().required('O plano é obrigatório'),
  start_date: Yup.date()
    .typeError('Campo deve ser uma data')
    .required('A data é obrigatória'),
});

export default function MatriculationsEdit({ match }) {
  const { id } = match.params;

  const [plan, setPlan] = useState([]);
  const [matriculation, setMatriculation] = useState({});
  const [planSelect, setPlanSelect] = useState();
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    async function handlePlan() {
      try {
        const response = await api.get('plans');

        setPlan(response.data);
      } catch (error) {
        toast.error('Erro ao listar planos');
      }
    }

    handlePlan();
  }, []);

  useEffect(() => {
    async function handleStudent() {
      try {
        const response = await api.get(`matriculations/${id}`);

        const startDateFormatted = format(
          parseISO(response.data.start_date),
          "yyyy'-'MM'-'dd"
        );

        const endDateDateFormatted = format(
          parseISO(response.data.end_date),
          "dd'/'MM'/'yyyy"
        );

        const data = {
          ...response.data,
          studentId: response.data.student.name,
          planId: response.data.plan,
          start_date: startDateFormatted,
          endDate: endDateDateFormatted,
          priceTotal: formatPrice(response.data.price),
        };

        setPriceTotal(data.priceTotal);
        setEndDate(data.endDate);
        setMatriculation(data);
      } catch (error) {
        toast.error('Erro ao listar planos');
      }
    }

    handleStudent();
  }, [id]);

  function getPlanValue(e) {
    const planId = Number(e.target.value);
    const plan_selected = plan.find(x => x.id === planId);
    setPlanSelect(plan_selected);
    setPriceTotal(formatPrice(plan_selected.duration * plan_selected.price));
  }

  function getDateStartValue(e) {
    const { value } = e.target;

    setStartDate(value);
  }

  useEffect(() => {
    if (planSelect && startDate) {
      const endDateFormatted = format(
        addMonths(addDays(new Date(startDate), 1), planSelect.duration),
        "dd'/'MM'/'yyyy"
      );

      setEndDate(endDateFormatted);
    }
  }, [planSelect, startDate]);

  async function handleSubmit({ planId, start_date }) {
    try {
      await api.put(`matriculations/${id}`, {
        plan_id: planId,
        start_date,
      });
      toast.success('Matrícula atualizada!');
    } catch (error) {
      toast.error('ERROR AO ATUALIZAR MATRÍCULA, VERIFIQUE OS DADOS!');
    }
  }

  return (
    <Container>
      <ContainerHeader>
        <h1>Edição de matrícula</h1>

        <RegisterOptions>
          <NavLink to="/matriculation">
            <MdChevronLeft color="#fff" size={20} />
            VOLTAR
          </NavLink>

          <button type="submit" form="form">
            <MdCheck color="#fff" size={20} />
            SALVAR
          </button>
        </RegisterOptions>
      </ContainerHeader>

      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={matriculation}
        id="form"
      >
        <label htmlFor="student">ALUNO</label>
        <Input type="text" name="studentId" id="student" />

        <div>
          <div>
            <label htmlFor="plan">PLANO</label>
            <Select
              name="planId"
              id="plan"
              options={plan}
              onChange={getPlanValue}
            />
          </div>

          <div>
            <label htmlFor="startDate">DATA DE INÍCIO</label>
            <Input
              type="date"
              name="start_date"
              id="startDate"
              onChange={getDateStartValue}
            />
          </div>

          <div>
            <label htmlFor="endDate">DATA DE TÉRMINO</label>
            <Input
              type="text"
              name="endDate"
              id="endDate"
              value={endDate}
              readOnly
            />
          </div>

          <div>
            <label htmlFor="priceTotal">VALOR FINAL</label>
            <Input
              type="text"
              name="priceTotal"
              id="priceTotal"
              value={priceTotal}
              readOnly
            />
          </div>
        </div>
      </Form>
    </Container>
  );
}

MatriculationsEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
