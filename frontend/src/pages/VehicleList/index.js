import React, { useEffect, useState } from 'react';

import { FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { Container } from '../../styles/GlobalStyles';
import { Title, StudentContainer } from './styled';

import axios from '../../services/axios';

export default function VehicleList() {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/vehicles');
      setVehicle(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <StudentContainer>
        <Link className="add" to="/vehicle-list/register">
          <FaPlusSquare size={12} data-tip="Adicionar Veículo" />
          <ReactTooltip />
        </Link>
        <span>Cadastrar novo Veículo</span>
        <Title>
          <h1>Veículos</h1>
        </Title>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>RG</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Placa</th>
            </tr>
          </thead>

          {vehicle.map(vehicles => (
            <tbody key={String(vehicles.id)}>
              <tr>
                <td>
                  <Link to={`/vehicle-list/register/${vehicles.id}`}>
                    {vehicles.name}
                  </Link>
                </td>
                <td>{vehicles.rg}</td>
                <td>{vehicles.cpf}</td>
                <td>{vehicles.phone}</td>
                <td>{vehicles.plate}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </StudentContainer>
    </Container>
  );
}
