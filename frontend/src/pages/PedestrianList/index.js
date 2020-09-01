import React, { useEffect, useState } from 'react';

import { FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { Container } from '../../styles/GlobalStyles';
import { Title, StudentContainer } from './styled';

import axios from '../../services/axios';

export default function PedestrianList() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/pedestrians');
      setAlunos(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <StudentContainer>
        <Link className="add" to="/pedestrian-list/pedestrian">
          <FaPlusSquare size={12} data-tip="Adicionar Pedestre" />
          <ReactTooltip />
        </Link>
        <span>Cadastrar novo Pedestre</span>
        <Title>
          <h1>Pedestre</h1>
        </Title>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>RG</th>
              <th>CPF</th>
              <th>Rua</th>
              <th>Número</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>UF</th>
              <th>Telefone</th>
            </tr>
          </thead>
          {alunos.map(pedestrian => (
            <tbody key={String(pedestrian.id)}>
              <tr>
                <td>
                  <Link to={`/pedestrian-list/register/${pedestrian.id}`}>
                    {pedestrian.name}
                  </Link>
                </td>
                <td>{pedestrian.rg}</td>
                <td>{pedestrian.cpf}</td>
                <td>{pedestrian.street}</td>
                <td>{pedestrian.number}</td>
                <td>{pedestrian.district}</td>
                <td>{pedestrian.city}</td>
                <td>{pedestrian.uf}</td>
                <td>{pedestrian.phone}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </StudentContainer>
    </Container>
  );
}
