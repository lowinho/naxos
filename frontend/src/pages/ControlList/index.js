import React, { useState, useEffect } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, ControlContainer } from './styled';
import axios from '../../services/axios';

export default function ControlList() {
  const [vehicle, setVehicle] = useState([]);
  const [control, setControl] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/vehicles');
      setVehicle(data);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/controls');
      setControl(data);
    }

    getData();
  }, [setControl]);

  return (
    <Container>
      <ControlContainer>
        <Title>Entradas em aberto</Title>
        <input
          type="text"
          id="input-search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Insira a placa"
        />

        {control.map((controls, index) => (
          <div key={controls.id}>
            {controls.date === search ||
            controls.plate === search ||
            controls.destiny === search ||
            controls.enter === search ||
            controls.exit === search ? (
              <table>
                <thead>
                  <tr>
                    <th id="th-date">Data</th>
                    <th id="th-plate">Placa</th>
                    <th id="th-destiny">Destino</th>
                    <th id="th-enter">Entrada</th>
                    <th id="th-exit">Saída</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th id="th-date">{controls.date}</th>
                    <th id="th-plate">{controls.plate}</th>
                    <th id="th-destiny">{controls.destiny}</th>
                    <th id="th-enter">{controls.enter}</th>
                    <th id="th-exit">{controls.exit}</th>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p hidden>Aberto</p>
            )}
          </div>
        ))}
      </ControlContainer>
    </Container>
  );
}
