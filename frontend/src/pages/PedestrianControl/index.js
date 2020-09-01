import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Title, ControlContainer, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function PedestrianControl() {
  const [pedestrian, setPedestrian] = useState([]);
  const [control, setControl] = useState([]);

  const [date, setDate] = useState('');
  const [plate, setPlate] = useState('');
  const [destiny, setDestiny] = useState('');
  const [enter, setEnter] = useState('');
  const [exit, setExit] = useState('');

  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/pedestrians');
      setPedestrian(data);
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

  function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
  }

  const getDate = () => {
    const value = new Date();

    const day = value.getDate();
    const month = value.getMonth();
    const year = value.getFullYear();

    const dateNow = `${day}/${month + 1}/${year}`;

    setDate(dateNow);
  };

  const getHour = () => {
    const value = new Date();

    const hour = zeroLeft(value.getHours());
    const min = zeroLeft(value.getMinutes());
    const sec = zeroLeft(value.getSeconds());

    const hourNow = `${hour}:${min}:${sec}`;

    return setEnter(hourNow);
  };

  const handleSubmit = async e => {
    try {
      await axios.post(`/controls/`, {
        date,
        plate,
        destiny,
        enter,
        exit,
      });

      toast.success('Controle criado com sucesso!');
      history.push(`/control`);
    } catch (err) {
      toast.error('Erro ao criar controle!');
      history.push(`/control`);
    }
  };

  const handleUpdate = async (e, id, index) => {
    e.preventDefault();

    const value = new Date();

    const hour = zeroLeft(value.getHours());
    const min = zeroLeft(value.getMinutes());
    const sec = zeroLeft(value.getSeconds());

    const hourNow = `${hour}:${min}:${sec}`;

    setExit(hourNow);

    const newControls = [...control];
    newControls.splice(index, 1);
    setControl(newControls);

    try {
      await axios.put(`/controls/${id}`, {
        date: setDate(),
        plate: setPlate(),
        destiny: setDestiny(),
        enter: setEnter(),
        exit: hourNow,
      });

      toast.success('Saída Finalizada com sucesso!');
      history.push(`/control`);
    } catch (err) {
      toast.error('Erro ao finalizar saída!');
      history.push(`/control`);
    }
  };

  return (
    <Container>
      <ControlContainer>
        <Title>Controle</Title>
        <Form onSubmit={handleSubmit}>
          <div className="fields">
            <input
              type="text"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              placeholder="Data"
              required
            />

            <button type="button" className="btn-date" onClick={getDate}>
              +
            </button>

            <select
              id="vehicle"
              value={plate}
              onChange={e => {
                setPlate(e.target.value);
              }}
            >
              <option>Selecione o Pedestre</option>
              {pedestrian.map(pedestrians => (
                <option key={pedestrians.id}>{pedestrians.name}</option>
              ))}
            </select>

            <input
              type="text"
              id="destiny"
              value={destiny}
              onChange={e => setDestiny(e.target.value)}
              placeholder="Destino"
              required
            />

            <input
              type="text"
              id="enter"
              value={enter}
              onChange={e => setEnter(e.target.value)}
              placeholder="Entrada"
            />

            <button type="button" className="btn-enter" onClick={getHour}>
              +
            </button>
          </div>

          <div className="button">
            <button type="submit" id="send">
              Enviar
            </button>
          </div>
        </Form>

        <hr />
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
            {controls.exit === '' && controls.plate === search ? (
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
                    <th id="th-exit">
                      <button
                        type="button"
                        id="btn-end"
                        onClick={e => {
                          handleUpdate(e, controls.id, index);
                        }}
                      >
                        Finalizar
                      </button>
                    </th>
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
