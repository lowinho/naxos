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
        <Link className="add" to="/vehicle-list/vehicle">
          <FaPlusSquare size={12} data-tip="Adicionar Veículo" />
          <ReactTooltip />
        </Link>
        <span>Cadastrar novo Veículo</span>
        <Title>
          <h1>Véículos</h1>
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
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Cor</th>
            </tr>
          </thead>

          {vehicle.map(vehicles => (
            <tbody key={String(vehicles.id)}>
              <tr>
                <td>
                  <Link to={`/vehicle-list/control-register/${vehicles.id}`}>
                    {vehicles.name}
                  </Link>
                </td>
                <td>{vehicles.rg}</td>
                <td>{vehicles.cpf}</td>
                <td>{vehicles.street}</td>
                <td>{vehicles.number}</td>
                <td>{vehicles.district}</td>
                <td>{vehicles.city}</td>
                <td>{vehicles.uf}</td>
                <td>{vehicles.phone}</td>
                <td>{vehicles.plate}</td>
                <td>{vehicles.assembler}</td>
                <td>{vehicles.model}</td>
                <td>{vehicles.color}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </StudentContainer>
    </Container>
  );
}
